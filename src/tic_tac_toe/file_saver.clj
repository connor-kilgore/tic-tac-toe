(ns tic-tac-toe.file-saver
  (:import (java.text SimpleDateFormat)
           (java.util Date)))

(def last-game-path "saved-games/last.txt")

(defn append-game-state-to-file [path state]
    (spit path (str state "\n") :append true))

(defn get-archive-path []
  (str "saved-games/" (.format (SimpleDateFormat. "yyyyMMdd_HHmmss") (Date.)) ".txt"))

(defn set-save-game-state [game archive-path]
  (spit last-game-path game)
  (append-game-state-to-file archive-path game))

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