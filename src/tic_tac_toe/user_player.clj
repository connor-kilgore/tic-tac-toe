(ns tic-tac-toe.user-player
  (:require [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(defn parse-position [row col]
  (+ (* row 3) col))

(defn play-turn [board symbol]
  (let [position (parse-position (menu/get-selection menu/rows-options) (menu/get-selection menu/cols-options))
        new-board (tttb/place-value-into-tttb board symbol position)]
    (if (not (= new-board board))
      new-board
      (do (println "\nSpace already taken, try again.") (recur symbol board)))))