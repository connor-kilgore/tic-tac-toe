(ns tic-tac-toe.ai-player
  (:require [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.symbols :as symbols]
            [tic-tac-toe.win-checker :as win?]))

(def depth-limit
  {9  3
   16 5})

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
          (not (= end-condition ai-symbol)) (- depth 10)
          :else (- 10 depth))))

(defn make-hypothetical-moves
  ([board symbol] (make-hypothetical-moves board symbol 0 {}))
  ([board symbol position new-boards]
   (cond (>= position (count board)) new-boards
         (tttb/spot-available? board position) (recur board symbol (inc position) (conj {position (tttb/place-value-into-tttb board symbol position)} new-boards))
         :else (recur board symbol (inc position) new-boards))))

(defn get-best-score [depth scores]
  (if (is-ai-turn? depth)
    (apply max-key val scores)
    (apply min-key val scores)))

(defn mini-max-algo
  ([board symbol] (mini-max-algo board symbol 0))
  ([board symbol depth]
   (let [end-condition (get-end-score board symbol)]
     (if (not (nil? end-condition))
       end-condition
       (let [moves (make-hypothetical-moves board (get-current-symbol depth symbol))
             scores (if (below-depth-limit? board)
                      (second (first moves))
                      (apply merge (for [[k v] moves] {k (mini-max-algo v symbol (inc depth))})))]

         (cond (below-depth-limit? board) scores
               (> depth 0) (val (get-best-score depth scores))
               :else (get moves (key (get-best-score depth scores)))))))))

(defn play-turn [board ai-symbol]
  (println "\nThinking of move...")
  ;(sleep-n-seconds 2)
  (mini-max-algo board ai-symbol))