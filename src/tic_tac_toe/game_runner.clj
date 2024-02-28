(ns tic-tac-toe.game-runner
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.menu-selector :as menu]))

(defn print-starting-game [] (println "Starting game..."))

(defn get-end-condition-string [winner user-symbol]
  (cond (nil? winner) "\nTie!"
        (= winner user-symbol) "\nYou won!"
        :else "\nYou lost!"))

(defn end-game [winner user-symbol]
  (println (get-end-condition-string winner user-symbol))
  (menu/get-selection menu/retry-options))

(defn game-loop [board round user-symbol]
  (tttb/print-tttb board)
  (let [winner (tttb/get-winner board)]
    (cond (not (nil? winner)) winner
          (> round (count board)) nil
          (turn/is-user-turn? user-symbol round) (recur (turn/play-user-turn user-symbol board) (inc round) user-symbol)
          :else (recur (turn/play-ai-turn board (get tttb/reverse-symbols user-symbol)) (inc round) user-symbol))))

(defn initialize-game []
  (let [user-symbol (menu/get-selection menu/symbol-options)]
    (print-starting-game)
    (let [winner (game-loop tttb/empty-board 1 user-symbol)
          retry? (end-game winner user-symbol)]
      (if retry? (recur) (menu/close-program)))))

(def menu-options
  {:print-statement menu/print-start-selection
   "1"              initialize-game
   "2"              menu/close-program})

(defn start-menu []
  (menu/start-menu menu-options))