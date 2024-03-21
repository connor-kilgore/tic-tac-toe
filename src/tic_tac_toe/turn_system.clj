(ns tic-tac-toe.turn-system
  (:require [tic-tac-toe.user-player :as user]
            [tic-tac-toe.ai-player :as ai]))

(defn is-turn? [user-symbol round]
  (or (and (= user-symbol 1) (odd? round))
      (and (= user-symbol 2) (even? round))))

(defn get-current-player [players round]
  (if (is-turn? (second (first players)) round) (first players) (second players)))

(defn is-ai? [player]
  (= (subs (first player) 0 2) "AI"))

(defn has-ai? [players]
  (some true? (map #(is-ai? %) players)))

(defn print-player-turn [player tui?]
  (if tui?
    (println (str "\n=== " (first player) " ==="))))

(defn play-next-turn [board players round difficulty tui?]
  (let [current-player (get-current-player players round)]
    (print-player-turn current-player tui?)
    (if (is-ai? current-player)
      (ai/play-turn board (second current-player) difficulty)
      (user/play-turn board (second current-player) tui?))))
