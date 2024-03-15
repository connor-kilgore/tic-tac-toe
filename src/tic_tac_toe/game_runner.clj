(ns tic-tac-toe.game-runner
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.win-checker :as win?]))

(defn print-starting-game [] (println "Starting game..."))

(defn get-end-condition-string [winner players]
  (cond (nil? winner) "\nTie!"
        (= (second (first players)) winner) (str "\n" (first (first players)) " wins!")
        :else (str "\n" (first (second players)) " wins!")))

(defn end-game [winner players]
  (println (get-end-condition-string winner players))
  (menu/get-selection menu/retry-options))

(defn game-loop [board round players difficulty]
  (tttb/print-tttb board)
  (let [winner (win?/get-winner board)]
    (cond (not (nil? winner)) winner
          (> round (count board)) nil
          :else (recur (turn/play-next-turn board players round difficulty)
                       (inc round) players difficulty))))

(defn initialize-one-player []
  (let [user-symbol (menu/get-selection menu/symbol-options)]
    {"Player" user-symbol "AI" (-> user-symbol (mod 2) inc)}))

(def board-size-options
  {:print-statement (fn [] (println "\nPlease select a board size!\n[1] 3x3 (classic)\n[2] 4x4"))
   :error          (fn [] (println "\nPlease select a valid size!"))
   "1"             3
   "2"             4})

(defn make-board [size]
  (into [] (repeat (* size size) 0)))

(defn initialize-game [players]
  (let [difficulty (if (turn/has-ai? (into [] players))
                     (menu/get-selection menu/difficulty-options)
                     nil)
        size (menu/get-selection board-size-options)]
    (loop []
    (print-starting-game)
    (let [winner (game-loop (make-board size) 1 players difficulty)
          retry? (end-game winner players)]
      (if retry? (recur) nil)))))

(def menu-options
  {:print-statement (fn [] (println (str "\nPlease select an option!\n[1] Single Player\n"
                                         "[2] Two Player\n[3] AI vs. AI\n[4] Close Program")))
   :error           (fn [] (println "\nPlease select a valid option."))
   "1"              (fn [] (initialize-game (initialize-one-player)))
   "2"              (fn [] (initialize-game {"Player 1" 1 "Player 2" 2}))
   "3"              (fn [] (initialize-game {"AI 1" 1 "AI 2" 2}))
   "4"              menu/close-program})

(defn -main []
  (if (not (= (menu/start-menu menu-options) -1))
    (recur)))