(ns tic-tac-toe.user-player
  (:require [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(defn parse-position [side-len row col]
  (+ (* row side-len) col))

(defn play-turn [board symbol]
  (let [position (parse-position (int (Math/sqrt (count board)))
                                 (menu/get-selection (get menu/rows-options (count board)))
                                 (menu/get-selection (get menu/cols-options (count board))))
        new-board (tttb/place-value-into-tttb board symbol position)]
    (if (not (= new-board board))
      new-board
      (do (println "\nSpace already taken, try again.") (recur board symbol)))))