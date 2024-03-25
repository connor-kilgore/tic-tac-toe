(ns tic-tac-toe.game-runner
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.tui :as tui]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.win-checker :as win?]
            [tic-tac-toe.file-saver :as file]
            [tic-tac-toe.gui :as gui]))
(defn tui? [ui] (= :tui ui))
(defn gui? [ui] (= :gui ui))
(defn archive? [ui] (= :archive ui))
(def ui (atom :tui))

(defn print-to-ui [s]
  (if @tui?
    (println s)))

(defn print-gui-text [s]
  (gui/update-state s))

(defmulti round-output :ui)

(defmethod round-output :tui [game]
  (tui/round-output (:game game)
                    (turn/get-current-player (:players (:game game)) (:round (:game game)))))

(defmethod round-output :gui [game]
  (gui/update-state {:board (:board (:game game))}))

(defn get-end-condition-string [winner players]
  (cond (nil? winner) "\nTie!"
        (= (second (first players)) winner) (str "\n" (first (first players)) " wins!")
        :else (str "\n" (first (second players)) " wins!")))

(defmulti end-game-to-ui :ui)
(defmethod end-game-to-ui :tui [end-condition-str]
  (tui/print-text (:end-str end-condition-str)))

(defmethod end-game-to-ui :gui [end-condition-str]
  (do (print-gui-text (:end-str end-condition-str)) (Thread/sleep 4000)))

(defn end-game [winner players]
  (file/wipe-saved-game)
  (let [end-condition-str (get-end-condition-string winner players)]
    (end-game-to-ui {:end-str end-condition-str :ui @ui}))
  (menu/get-selection {:options menu/retry-options :ui @ui}))

(defn game-loop [game archive-path]
  (file/set-save-game-state game archive-path)
  (round-output {:game game :ui @ui})
  (let [winner (win?/get-winner (:board game))]
    (cond (not (nil? winner)) winner
          (> (:round game) (count (:board game))) nil
          :else (recur {:board      (turn/play-next-turn game @ui)
                        :round      (inc (:round game))
                        :players    (:players game)
                        :difficulty (:difficulty game)}
                       archive-path))))

(defn initialize-one-player []
  (let [user-symbol (menu/get-selection {:options menu/symbol-options :ui @ui})]
    {"Player" user-symbol "AI" (-> user-symbol (mod 2) inc)}))

(def board-size-options
  {:print-statement "\nPlease select a board size!\n[1] 3x3 (classic)\n[2] 4x4"
   :error           "\nPlease select a valid size!"
   "1"              3
   "2"              4})

(defn make-board [size]
  (into [] (repeat (* size size) 0)))

(defn get-new-game [game]
  {:players    (:players game)
   :difficulty (:difficulty game)
   :round      1
   :board      (make-board (tttb/get-side-len (:board game)))})

(defn run-game-loop [game]
  (let [winner (game-loop game (file/get-archive-path))
        retry? (end-game winner (:players game))]
    (when retry? (recur (get-new-game game)))))

(defn initialize-game [players]
  (let [difficulty (when (turn/has-ai? (into [] players))
                     (menu/get-selection {:options menu/difficulty-options :ui @ui}))
        size (menu/get-selection {:options board-size-options :ui @ui})]
    {:players players :difficulty difficulty :board (make-board size) :round 1}))

(defn close-program []
  (menu/close-program {:ui @ui}))

(def menu-options
  {:print-statement "\nPlease select an option!\n[1] Single Player\n[2] Two Player\n[3] AI vs. AI\n[4] Close Program"
   :error           "\nPlease select a valid option."
   "1"              :one-player ;(fn [] (initialize-one-player))
   "2"              {"Player 1" 1 "Player 2" 2}
   "3"              {"AI 1" 1 "AI 2" 2}
   "4"              :close-program
   })

(defn start-menu-loop [game ui]
  (when (= game :resume-game)
    (game-loop (file/get-last-game-state) (file/get-archive-path)))

  (let [selection (menu/get-selection {:options menu-options :ui ui})
        players (if (= selection :one-player) (initialize-one-player) selection)]
    (if (= selection :close-program)
      (close-program)
      (do (run-game-loop (initialize-game players)) (recur :new-game ui)))))


(def resume-options
  {:print-statement "\nPrevious game detected. Would you like to resume? \n[1] Yes\n[2] No\n"
   :error           "\nPlease select a valid option."
   "1"              :resume-game
   "2"              :new-game})

(defn turn-to-str [turn-state]
  (let [current-player (turn/get-current-player (:players turn-state) (:round turn-state))]
    (println
      "\n=== ROUND: " (:round turn-state)
      " === " (first current-player) " ==="
      (tui/get-tttb-string (:board turn-state)))))

(defn game-to-str [game-state]
  (doseq [turn-state game-state] (turn-to-str turn-state)))

(defn print-archived-game [path]
  (let [game-state (file/get-game-archive (str "saved-games/" path))]
    (if (nil? game-state) (println "Game not found... Goodbye.")
                          (game-to-str game-state))))

(def ui-types
  {"--gui"     :gui
   "--archive" :archive})

(defn -main [& args]
  (when (not (nil? (first args)))
    (reset! ui (get ui-types (first args) :tui)))

  (when (gui? @ui) (gui/start-gui))

  (cond (archive? @ui) (print-archived-game (second args))
        (not (nil? (file/get-last-game-state))) (start-menu-loop
                                                  (menu/get-selection {:options resume-options :ui @ui}) @ui)
        :else (start-menu-loop :new-game @ui)))