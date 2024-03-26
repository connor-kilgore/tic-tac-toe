(ns tic-tac-toe.user-player
  (:require [tic-tac-toe.gui :as gui]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(defn print-spot-taken [tui?]
  (if tui?
    (println "\nSpace already taken, try again.")))

(defmulti make-move :ui)

(defmethod make-move :tui [game]
  (menu/get-selection {:options (get menu/move-options (count (:board (:game game)))) :ui (:ui game)}))

(defmethod make-move :gui [game]
  (gui/get-selection (:game game)))

(defn play-turn
  ([game symbol ui]
  (let [position (make-move {:game game :ui ui})
        new-board (tttb/place-value-into-tttb (:board game) symbol position)]
    (if (not (= new-board (:board game)))
      new-board
      (do (print-spot-taken ui) (recur game symbol ui))))))