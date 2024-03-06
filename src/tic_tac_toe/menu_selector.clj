(ns tic-tac-toe.menu-selector)

(defn print-start-screen []
  (println "Welcome to the Unsolvable Tic Tac Toe!"))

(defn close-program []
  (println "\nClosing Program! Goodbye."))

(def retry-options
  {:print-statement (fn [] (println "\nWould you like to try again?\n[1] Yes\n[2] No"))
   :error (fn [] (println "\nPlease select a valid option."))
   "1"              true
   "2"              false})

(def symbol-options
  {:print-statement (fn [] (println "\nPlease select a symbol!\n[X] (first turn).\n[O] (second turn)."))
   :error (fn [] (println "\nPlease select a valid symbol."))
   "x"              1 "X" 1
   "o"              2 "O" 2})

(def rows-options
  {:print-statement (fn [] (println "\nSelect a row [0-2]"))
   :error (fn [] (println "\nPlease select a valid row."))
   "0"              0
   "1"              1
   "2"              2})

(def cols-options
  {:print-statement (fn [] (println "Select a column [0-2]"))
   :error (fn [] (println "\nPlease select a valid column."))
   "0"              0
   "1"              1
   "2"              2})

(defn get-option [selected-map option]
  (get selected-map option))

(defn get-selection [selected-map]
  ((get-option selected-map :print-statement))
  (let [selection (get-option selected-map (read-line))]
    (if (nil? selection)
      (do ((get-option selected-map :error)) (recur selected-map))
      selection)))

(defn start-menu [menu-options]
  (print-start-screen)
  ((get-selection menu-options)))
