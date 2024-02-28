(ns tic-tac-toe.turn-system
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.ai-player :as ai]))

(defn is-user-turn? [user-symbol round]
  (or (and (= user-symbol 1) (odd? round))
      (and (= user-symbol 2) (even? round))))

(defn parse-position [row col]
  (+ (* row 3) col))

(defn play-user-turn [symbol board]
  (let [position (parse-position (menu/get-selection menu/rows-options) (menu/get-selection menu/cols-options))
        new-board (tttb/place-value-into-tttb board symbol position)]
    (if (not (= new-board board)) new-board (recur symbol board))))

(defn sleep-n-seconds [n]
  (Thread/sleep (* n 1000)))

(defn play-ai-turn [board ai-symbol]
  (println "\nThinking of move...")
  (sleep-n-seconds 2)
  (ai/mini-max-algo board ai-symbol))
