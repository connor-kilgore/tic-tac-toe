(ns tic-tac-toe.tic-tac-toe-board
  (:require [tic-tac-toe.symbols :as symbols]))

(def divider "\n-------")

(defn get-tttb-string
  ([board] (get-tttb-string board 0))
  ([board i]
   (cond (= i 8) (str (symbols/symbol-at i board) "|" divider)
         (= (mod i 3) 2) (str (symbols/symbol-at i board) "|" (get-tttb-string board (inc i)))
         (= (mod i 3) 0) (str divider "\n|" (symbols/symbol-at i board) "|" (get-tttb-string board (inc i)))
         :else (str (symbols/symbol-at i board) "|" (get-tttb-string board (inc i))))))

(defn print-tttb [board]
  (println (get-tttb-string board)))

(defn spot-available? [board position]
  (= (get board position) 0))

(defn place-value-into-tttb [board value position]
  (if (not (spot-available? board position)) board (assoc board position value)))