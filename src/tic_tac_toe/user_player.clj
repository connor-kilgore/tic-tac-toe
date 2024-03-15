(ns tic-tac-toe.user-player
  (:require [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(defn play-turn
  ([board symbol]
  (let [position (menu/get-selection (get menu/move-options (count board)))
        new-board (tttb/place-value-into-tttb board symbol position)]
    (if (not (= new-board board))
      new-board
      (do (println "\nSpace already taken, try again.") (recur board symbol))))))