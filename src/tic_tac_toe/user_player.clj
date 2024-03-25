(ns tic-tac-toe.user-player
  (:require [tic-tac-toe.gui :as gui]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(defn print-spot-taken [tui?]
  (if tui?
    (println "\nSpace already taken, try again.")))

(defmulti make-move :ui)

(defmethod make-move :tui [board]
  (menu/get-selection {:options (get menu/move-options (count (:board board))) :ui board}))

(defmethod make-move :gui [board]
  (gui/get-selection {:board (:board board)}))

(defn play-turn
  ([board symbol ui]
  (let [position (make-move {:board board :ui ui})
        new-board (tttb/place-value-into-tttb board symbol position)]
    (if (not (= new-board board))
      new-board
      (do (print-spot-taken ui) (recur board symbol ui))))))