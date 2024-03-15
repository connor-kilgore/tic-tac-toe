(ns tic-tac-toe.ai-player
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.symbols :as symbols]
            [tic-tac-toe.win-checker :as win?]))

(def depth-limit
  {9  5
   16 6})

(defn below-depth-limit? [board]
  (< (tttb/get-absolute-depth board) (get depth-limit (count board))))

(defn is-ai-turn? [depth] (even? depth))

(defn sleep-n-seconds [n]
  (Thread/sleep (* n 1000)))

(defn get-current-symbol [depth symbol]
  (if (is-ai-turn? depth) symbol (symbols/reverse-symbol symbol)))

(defn get-end-score [board ai-symbol]
  (let [end-condition (win?/get-winner-or-tie board)
        depth (tttb/get-absolute-depth board)]
    (cond (= end-condition "tie") 0
          (nil? end-condition) nil
          (not (= end-condition ai-symbol)) (- depth (inc (count board)))
          :else (- (inc (count board)) depth))))

(defn make-hypothetical-moves
  ([board symbol] (make-hypothetical-moves board symbol 0 {}))
  ([board symbol position new-boards]
   (cond (>= position (count board)) new-boards
         (tttb/spot-available? board position)
         (recur board symbol
                (inc position)
                (conj {position (tttb/place-value-into-tttb board symbol position)} new-boards))
         :else (recur board symbol (inc position) new-boards))))

(defn get-best-score [depth scores]
  (if (is-ai-turn? depth)
    (apply max-key val scores)
    (apply min-key val scores)))

(defn get-new-alpha [score alpha depth]
  (if (and (is-ai-turn? depth) (not (empty? score)))
    (max (second score) alpha)
    alpha))

(defn get-new-beta [score beta depth]
  (if (or (is-ai-turn? depth) (empty? score))
    beta
    (min (second score) beta)))

(defn get-new-score [score-1 score-2 depth]
  (cond (empty? score-1) score-2
        (empty? score-2) score-1
        (is-ai-turn? depth) (apply max-key second [score-2 score-1])
        :else (apply min-key second [score-2 score-1])))

(defn get-depth-score [depth]
  (if (is-ai-turn? depth)
    depth
    (* depth -1)))

(defn mini-max-algo
  ([board symbol] (mini-max-algo
                    board symbol 0
                    (-> board (count) (inc) (* -1)) (-> board (count) (inc))))
  ([board symbol depth alpha beta]
   (let [end-condition (get-end-score board symbol)]
     (if (not (nil? end-condition))
       end-condition
       (let [moves (make-hypothetical-moves board (get-current-symbol depth symbol))]

         (loop [i 0
                a alpha
                b beta
                best-score []]

           (cond (> depth (get depth-limit (count board))) (get-depth-score depth)
                 (and (= depth 0) (>= i (count board))) (get moves (first best-score))
                 (>= i (count board)) (second best-score)
                 (nil? (get moves i)) (recur (inc i) a b best-score)
                 (<= b a) (recur (inc i) a b best-score)
                 :else (let [score [i (mini-max-algo (get moves i) symbol (inc depth) a b)]
                             new-score (get-new-score best-score score depth)
                             new-alpha (get-new-alpha score a depth)
                             new-beta (get-new-beta score b depth)]
                         (recur (inc i) new-alpha new-beta new-score)
                         ))))))))

(defn place-random-spot [board symbol]
  (let [position (rand-int (count board))]
    (if (tttb/spot-available? board position)
      (tttb/place-value-into-tttb board symbol position)
      (recur board symbol))))

(defn play-turn [board ai-symbol difficulty]
  (println "\nThinking of move...")
  (if (> (rand-int 11) difficulty)
    (place-random-spot board ai-symbol)
    (mini-max-algo board ai-symbol))
    )
