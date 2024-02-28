(ns tic-tac-toe.tic-tac-toe-board)

(def empty-board
  [0 0 0
   0 0 0
   0 0 0])

(def divider "\n-------")

(def symbols
  {0 " "
   1 (str "\u001b[38;5;" 1 "m" "X" "\u001b[0m")
   2 (str "\u001b[38;5;" 4 "m" "O" "\u001b[0m")})

(def reverse-symbols
  {1 2
   2 1})

(defn symbol-at [position board]
  (get symbols (get board position)))

(defn horizontal-win? [board position]
  (and (not (= (symbol-at position board) " "))
       (= (symbol-at position board) (symbol-at (inc position) board) (symbol-at (+ position 2) board))))

(defn get-horizontal-winner
  ([board] (get-horizontal-winner board 0))
  ([board position]
   (cond (>= position 9) nil
         (horizontal-win? board position) (get board position)
         :else (recur board (+ position 3)))))

(defn vertical-win? [board position]
  (and (not (= (symbol-at position board) " "))
       (= (symbol-at position board) (symbol-at (+ position 3) board) (symbol-at (+ position 6) board))))

(defn get-vertical-winner
  ([board] (get-vertical-winner board 0))
  ([board position]
   (cond (>= position 3) nil
         (vertical-win? board position) (get board position)
         :else (recur board (inc position)))))

(defn diagonal-win? [board]
  (and (not (= (symbol-at 4 board) " "))
       (or (= (symbol-at 0 board) (symbol-at 4 board) (symbol-at 8 board))
           (= (symbol-at 2 board) (symbol-at 4 board) (symbol-at 6 board)))))

(defn get-diagonal-winner [board]
  (if (diagonal-win? board) (get board 4) nil))

(defn get-winner [board]
  (first (filter #(not (nil? %)) [(get-vertical-winner board)
                                  (get-horizontal-winner board)
                                  (get-diagonal-winner board)])))

(defn get-winner-or-tie [board]
  (let [winner (get-winner board)]
    (cond (not (nil? winner)) winner
          (empty? (filter zero? board)) "tie"
          :else nil)))

(defn get-tttb-string
  ([board] (get-tttb-string board 0))
  ([board i]
   (cond (= i 8) (str (symbol-at i board) "|" divider)
         (= (mod i 3) 2) (str (symbol-at i board) "|" (get-tttb-string board (inc i)))
         (= (mod i 3) 0) (str divider "\n|" (symbol-at i board) "|" (get-tttb-string board (inc i)))
         :else (str (symbol-at i board) "|" (get-tttb-string board (inc i))))))

(defn print-tttb [board]
  (println (get-tttb-string board)))

(defn spot-available? [board position]
  (= (get board position) 0))

(defn place-value-into-tttb [board value position]
  (if (not (spot-available? board position)) board (assoc board position value)))