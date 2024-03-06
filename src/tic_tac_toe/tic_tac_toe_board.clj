(ns tic-tac-toe.tic-tac-toe-board
  (:require [tic-tac-toe.symbols :as symbols]))

(defn get-tttb-string [board]
  (str "\n" (->> (map #(interpose "|" %) (->> board (map symbols/symbols) (partition (int (Math/sqrt (count board)))))) (interpose (str "\n" (apply str (repeat (+ (Math/sqrt (count board)) (dec (Math/sqrt (count board)))) "=")) "\n")) (apply concat) (apply str))))

(defn print-tttb [board]
  (println (get-tttb-string board)))

(defn spot-available? [board position]
  (= (get board position) 0))

(defn place-value-into-tttb [board value position]
  (if (not (spot-available? board position)) board (assoc board position value)))