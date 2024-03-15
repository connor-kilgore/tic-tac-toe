(ns tic-tac-toe.menu-selector)

(defn print-start-screen []
  (println "\nWelcome to the Unsolvable Tic Tac Toe!"))

(defn close-program []
  (println "\nClosing Program! Goodbye.")
  -1)

(def retry-options
  {:print-statement (fn [] (println "\nWould you like to try again?\n[1] Yes\n[2] No"))
   :error           (fn [] (println "\nPlease select a valid option."))
   "1"              true
   "2"              false})

(def symbol-options
  {:print-statement (fn [] (println "\nPlease select a symbol!\n[X] (first turn).\n[O] (second turn)."))
   :error           (fn [] (println "\nPlease select a valid symbol."))
   "x"              1 "X" 1
   "o"              2 "O" 2})

(def move-options
  {9  (conj
        {:print-statement (fn [] (println "\nSelect a space [0-8]"))
         :error           (fn [] (println "\nPlease select a valid space."))}
        (zipmap (map str (range 9)) (range 9)))
   16 (conj
        {:print-statement (fn [] (println "\nSelect a space [0-15]"))
         :error           (fn [] (println "\nPlease select a valid space."))}
        (zipmap (map str (range 16)) (range 16)))})

(def difficulty-options
  {:print-statement (fn [] (println "\nPlease select a difficulty!\n[1] Unbeatable\n[2] Medium\n[3] Easy"))
   :error           (fn [] (println "\nPlease select a valid difficulty."))
   "1"              10
   "2"              9
   "3"              -1})

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
