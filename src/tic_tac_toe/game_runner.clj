(ns tic-tac-toe.game-runner
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.win-checker :as win?]))

(def empty-board [0 0 0 0 0 0 0 0 0])

(defn print-starting-game [] (println "Starting game..."))

(defn get-end-condition-string [winner players]
  (cond (nil? winner) "\nTie!"
        (= (second (first players)) winner) (str "\n" (first (first players)) " wins!")
        :else (str "\n" (first (second players)) " wins!")))

(defn end-game [winner players]
  (println (get-end-condition-string winner players))
  (menu/get-selection menu/retry-options))

(defn game-loop [board round players]
  (tttb/print-tttb board)
  (let [winner (win?/get-winner board)]
    (cond (not (nil? winner)) winner
          (> round (count board)) nil
          :else (recur (turn/play-next-turn board players round) (inc round) players))))

(defn initialize-one-player []
  (print-starting-game)
  (let [user-symbol (menu/get-selection menu/symbol-options)
        players {"Player 1" user-symbol "AI" (-> user-symbol (mod 2) inc)}
        winner (game-loop empty-board 1 players)
        retry? (end-game winner players)]
      (if retry? (recur) (menu/close-program))))
(defn initialize-two-player []
  (print-starting-game)
  (let [players {"Player 1" 1 "Player 2" 2}
        winner (game-loop empty-board 1 players)
        retry? (end-game winner players)]
    (if retry? (recur) (menu/close-program))))

(def menu-options
  {:print-statement (fn [] (println "\nPlease select an option!\n[1] Single Player.\n[2] Two Player.\n[3] Close Program."))
   :error           (fn [] (println "\nPlease select a valid option."))
   "1"              initialize-one-player
   "2"              initialize-two-player
   "3"              menu/close-program})

(defn -main []
  (menu/start-menu menu-options))