(ns tic-tac-toe.option-selector
  (:require [tic-tac-toe.gui :as gui]
            [tic-tac-toe.tui :as tui]))

(defn print-start-screen [tui?]
  (if tui?
    (println "\nWelcome to the Unsolvable Tic Tac Toe!")
    (gui/start-gui)))

(defmulti close-program :ui)

(defmethod close-program :tui [_]
  (tui/print-text "\nClosing Program! Goodbye."))

(defmethod close-program :gui [_]
  (gui/update-state :close-program))

(def retry-options
  {:print-statement "\nWould you like to try again?\n[1] Yes\n[2] No"
   :error           "\nPlease select a valid option."
   "1"              true
   "2"              false})

(def symbol-options
  {:print-statement "\nPlease select a symbol!\n[X] X (first turn).\n[O] O(second turn)."
   :error           "\nPlease select a valid symbol."
   "x"              1 "X" 1
   "o"              2 "O" 2})

(def move-options
  {9  (conj
        {:print-statement "\nSelect a space [0-8]"
         :error           "\nPlease select a valid space."}
        (zipmap (map str (range 9)) (range 9)))
   16 (conj
        {:print-statement "\nSelect a space [0-15]"
         :error           "\nPlease select a valid space."}
        (zipmap (map str (range 16)) (range 16)))})

(def difficulty-options
  {:print-statement "\nPlease select a difficulty!\n[1] Unbeatable\n[2] Medium\n[3] Easy"
   :error           "\nPlease select a valid difficulty."
   "1"              10
   "2"              9
   "3"              -1})

(defn get-option [selected-map option]
  (get selected-map option))

(defn options-output [options ui]
  (cond (= ui :gui) nil
        :else (tui/print-text (:options options))))

(defmulti get-selection :ui)

(defmethod get-selection :tui [options]
  (tui/print-text (:print-statement (:options options)))
  (let [selection (get (:options options) (read-line))]
    (if (nil? selection)
      (do (tui/print-text (:error (:options options))) (recur options))
      selection)))

(defmethod get-selection :gui [options] (gui/get-selection (:options options)))