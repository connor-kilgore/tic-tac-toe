(ns tic-tac-toe.win-checker)

(defn get-rows [board]
  (->> board (partition (int (Math/sqrt (count board))))))

(defn get-cols [board]
  (->> (map-indexed vector board) (group-by #(mod (first %) (int (Math/sqrt (count board))))) (map second) (map (fn [inner-map] (map #(second %) inner-map)))))

(defn get-diagonals [board]
  (let [rows (get-rows board)]
    (list (for [[i v] (map-indexed vector rows)] (nth v i)) (for [[i v] (map-indexed vector rows)] (nth v (- (dec (count v)) i))))))

(defn get-horizontal-winner [board]
  (->> (get-rows board) (filter #(and (not (= (apply + %) 0)) (apply = %))) (first) (first)))

(defn get-vertical-winner [board]
  (->> (get-cols board) (filter #(and (not (= (apply + %) 0)) (apply = %))) (first) (first)))

(defn get-diagonal-winner [board]
  (->> (get-diagonals board) (filter #(and (not (= (apply + %) 0)) (apply = %))) (first) (first)))

(defn get-winner [board]
  (first (filter #(not (nil? %)) [(get-vertical-winner board)
                                  (get-horizontal-winner board)
                                  (get-diagonal-winner board)])))

(defn get-winner-or-tie [board]
  (let [winner (get-winner board)]
    (cond (not (nil? winner)) winner
          (empty? (filter zero? board)) "tie"
          :else nil)))