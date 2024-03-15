(ns tic-tac-toe.tic-tac-toe-board
  (:require [tic-tac-toe.symbols :as symbols]))

(defn replace-0-with-index [index val]
  (if (= val 0) (format "%2d" index) val))

(defn convert-board-vals-to-symbols [board]
  (->> board (map symbols/symbols)
       (map-indexed replace-0-with-index)
       (partition (int (Math/sqrt (count board))))))

(defn add-vertical-dividers [board]
  (map #(interpose "|" %) (convert-board-vals-to-symbols board)))

(def horizontal-divider-count
  {9  8
   16 11})

(defn add-horizontal-dividers [board board-str]
  (->> board-str (interpose
                   (str "\n" (apply str (repeat (get horizontal-divider-count
                                                     (count board)) "=")) "\n"))))

(defn get-tttb-string [board]
  (str "\n" (->> (add-vertical-dividers board)
                 (add-horizontal-dividers board)
                 (apply concat) (apply str))))

(defn print-tttb [board]
  (println (get-tttb-string board)))

(defn spot-available? [board position]
  (= (get board position) 0))

(defn place-value-into-tttb [board value position]
  (if (not (spot-available? board position))
    board
    (assoc board position value)))

(defn not-zero? [x]
  (not (zero? x)))

(defn get-absolute-depth [board]
  (count board) (->> board (filter not-zero?) (count)))