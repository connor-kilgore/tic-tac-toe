(ns tic-tac-toe.turn-system
  (:require [tic-tac-toe.user-player :as user]
            [tic-tac-toe.ai-player :as ai]))

(defn is-turn? [user-symbol round]
  (or (and (= user-symbol 1) (odd? round))
      (and (= user-symbol 2) (even? round))))

(defn get-current-player [players round]
  (if (is-turn? (second (first players)) round) (first players) (second players)))

(defn play-next-turn [board players round]
  (let [current-player (get-current-player players round)]
    (println (str "\n=== " (first current-player) " ==="))
    (if (= (subs (first current-player) 0 2) "AI")
      (ai/play-turn board (second current-player))
      (user/play-turn board (second current-player)))))
