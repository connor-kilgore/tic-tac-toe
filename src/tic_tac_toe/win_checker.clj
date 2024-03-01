(ns tic-tac-toe.win-checker
  (:require [tic-tac-toe.symbols :as symbols]))

(defn horizontal-win? [board position]
  (and (not (= (get board position) 0))
       (= (get board position) (get board (inc position)) (get board (+ position 2)))))

(defn get-horizontal-winner
  ([board] (get-horizontal-winner board 0))
  ([board position]
   (cond (>= position 9) nil
         (horizontal-win? board position) (get board position)
         :else (recur board (+ position 3)))))

(defn vertical-win? [board position]
  (and (not (= (get board position) 0))
       (= (get board position) (get board (+ position 3)) (get board (+ position 6)))))

(defn get-vertical-winner
  ([board] (get-vertical-winner board 0))
  ([board position]
   (cond (>= position 3) nil
         (vertical-win? board position) (get board position)
         :else (recur board (inc position)))))

(defn diagonal-win? [board]
  (and (not (= (get board 4) 0))
       (or (= (get board 0) (get board 4) (get board 8))
           (= (get board 2) (get board 4) (get board 6)))))

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