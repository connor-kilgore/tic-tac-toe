(ns tic-tac-toe.tic-tac-toe-board)
(defn get-side-len [board]
  (int (Math/sqrt (count board))))

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