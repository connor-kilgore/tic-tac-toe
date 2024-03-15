(ns tic-tac-toe.game-runner
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.win-checker :as win?]
            [tic-tac-toe.file-saver :as file])
  (:import (java.text SimpleDateFormat)
           (java.util Date)))

(defn print-starting-game []
  (println "\nStarting game..."))

(defn get-end-condition-string [winner players]
  (cond (nil? winner) "\nTie!"
        (= (second (first players)) winner) (str "\n" (first (first players)) " wins!")
        :else (str "\n" (first (second players)) " wins!")))

(defn end-game [winner players]
  (file/wipe-saved-game)
  (println (get-end-condition-string winner players))
  (menu/get-selection menu/retry-options))

(defn game-loop [board round players difficulty archive-path]
  (file/set-save-game-state board round players difficulty archive-path)
  (tttb/print-tttb board)
  (let [winner (win?/get-winner board)]
    (cond (not (nil? winner)) winner
          (> round (count board)) nil
          :else (recur (turn/play-next-turn board players round difficulty)
                       (inc round) players difficulty archive-path))))

(defn initialize-one-player []
  (let [user-symbol (menu/get-selection menu/symbol-options)]
    {"Player" user-symbol "AI" (-> user-symbol (mod 2) inc)}))

(def board-size-options
  {:print-statement (fn [] (println "\nPlease select a board size!\n[1] 3x3 (classic)\n[2] 4x4"))
   :error           (fn [] (println "\nPlease select a valid size!"))
   "1"              3
   "2"              4})

(defn make-board [size]
  (into [] (repeat (* size size) 0)))

(defn get-archive-path []
  (str "saved-games/" (.format (SimpleDateFormat. "yyyyMMdd_HHmmss") (Date.)) ".txt"))

(defn initialize-game
  ([players]
   (let [difficulty (if (turn/has-ai? (into [] players))
                      (menu/get-selection menu/difficulty-options)
                      nil)
         size (menu/get-selection board-size-options)]
     (initialize-game players difficulty size)))
  ([players difficulty size]
   (print-starting-game)
   (let [winner (game-loop (make-board size) 1 players difficulty (get-archive-path))
         retry? (end-game winner players)]
     (if retry? (recur players difficulty size) nil))))

(defn resume-game []
  (let [saved-game (file/get-last-game-state)]
    (print-starting-game)
    (let [winner (game-loop (:board saved-game)
                            (:round saved-game)
                            (:players saved-game)
                            (:difficulty saved-game)
                            (get-archive-path))
          retry? (end-game winner (:players saved-game))]
      (if retry? (initialize-game (:players saved-game) (:difficulty saved-game)
                                  (int (Math/sqrt (count (:board saved-game))))) nil))))


(def menu-options
  {:print-statement (fn [] (println (str "\nPlease select an option!\n[1] Single Player\n"
                                         "[2] Two Player\n[3] AI vs. AI\n[4] Close Program")))
   :error           (fn [] (println "\nPlease select a valid option."))
   "1"              (fn [] (initialize-game (initialize-one-player)))
   "2"              (fn [] (initialize-game {"Player 1" 1 "Player 2" 2}))
   "3"              (fn [] (initialize-game {"AI 1" 1 "AI 2" 2}))
   "4"              menu/close-program})

(defn start-menu-loop []
  (if (not (= (menu/start-menu menu-options) -1))
    (recur)))

(def resume-options
  {:print-statement (fn [] (println (str "\nPrevious game detected. Would you like to resume?"
                                         "\n[1] Yes\n[2] No\n")))
   :error           (fn [] (println "\nPlease select a valid option."))
   "1"              (fn [] (resume-game) (start-menu-loop))
   "2"              (fn [] (start-menu-loop))})

(defn turn-to-str [turn-state]
  (let [current-player (turn/get-current-player (:players turn-state) (:round turn-state))]
    (println
      "\n=== ROUND: " (:round turn-state)
      " === " (first current-player) " ==="
      (tttb/get-tttb-string (:board turn-state)))))

(defn game-to-str [game-state]
  (doseq [turn-state game-state] (turn-to-str turn-state)))

(defn print-archived-game [path]
  (let [game-state (file/get-game-archive (str "saved-games/" path))]
    (if (nil? game-state) (println "Game not found... Goodbye.")
                          (game-to-str game-state))))

(defn -main [& args]
  (cond (not (nil? (first args))) (print-archived-game (first args))
        (not (nil? (file/get-last-game-state))) (menu/start-menu resume-options)
        :else (start-menu-loop)))