(ns tic-tac-toe.file-saver)

(def last-game-path "saved-games/last.txt")

(defn append-game-state-to-file [path state]
    (spit path (str state "\n") :append true))

(defn set-save-game-state [board round players difficulty archive-path]
  (let [saved-state
        {:board      board
         :round      round
         :players    players
         :difficulty difficulty}]
  (spit last-game-path saved-state)
  (append-game-state-to-file archive-path saved-state)))

(defn get-last-game-state []
  (try
    (read-string (slurp last-game-path))
    (catch Exception _ nil)))

(defn get-game-archive [path]
  (try
    (read-string (str "[" (slurp path) "]"))
    (catch Exception _ nil)))

(defn wipe-saved-game []
  (spit last-game-path ""))