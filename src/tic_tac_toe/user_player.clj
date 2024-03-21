(ns tic-tac-toe.user-player
  (:require [tic-tac-toe.gui :as gui]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(defn print-spot-taken [tui?]
  (if tui?
    (println "\nSpace already taken, try again.")))

(defn make-move [board tui?]
  (if tui?
    (menu/get-selection (get menu/move-options (count board)) tui?)
    (gui/get-selection board)))

(defn play-turn
  ([board symbol tui?]
  (let [position (make-move board tui?)
        new-board (tttb/place-value-into-tttb board symbol position)]
    (if (not (= new-board board))
      new-board
      (do (print-spot-taken tui?) (recur board symbol tui?))))))