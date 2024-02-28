(ns tic-tac-toe.menu-selector)

(defn print-start-screen []
  (println "Welcome to the Unsolvable Tic Tac Toe!"))

(defn print-start-selection []
  (println "\nPlease select an option!\n[1] Start Game.\n[2] Close Program."))

(defn print-symbol-selection []
  (println "\nPlease select a symbol!\n[X] (first turn).\n[O] (second turn)."))

(defn close-program []
  (println "\nClosing Program! Goodbye."))

(defn retry []
  (println "\nWould you like to try again?\n[1] Yes\n[2] No"))

(defn print-row-select [] (println "\nSelect a row [0-2]"))
(defn print-col-select [] (println "Select a column [0-2]"))

(def retry-options
  {:print-statement retry
   "1"              true
   "2"              false})

(def symbol-options
  {:print-statement print-symbol-selection
   "x"              1 "X" 1
   "o"              2 "O" 2})

(def rows-options
  {:print-statement print-row-select
   "0"              0
   "1"              1
   "2"              2})

(def cols-options
  {:print-statement print-col-select
   "0"              0
   "1"              1
   "2"              2})

(defn get-option [selected-map option]
  (get selected-map option))

(defn get-selection [selected-map]
  ((get-option selected-map :print-statement))
  (let [selection (get-option selected-map (read-line))]
    (if (nil? selection) (recur selected-map) selection)))

(defn start-menu [menu-options]
  (print-start-screen)
  ((get-selection menu-options)))
