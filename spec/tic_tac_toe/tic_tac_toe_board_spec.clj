(ns tic-tac-toe.tic-tac-toe-board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.symbols :as symbols]))
(def empty-board
  [0 0 0
   0 0 0
   0 0 0])

(def mixed-board
  [1 0 2
   0 2 1
   2 1 0])

(describe "Tic Tac Toe Board"
  (context "gets string representing tttb"
    (it "an empty board"
      (should= "\n-------\n| | | |\n-------\n| | | |\n-------\n| | | |\n-------" (tttb/get-tttb-string empty-board)))

    (it "a mixed board of x's and o's factoring in the color changes for x and o"
      (should= (str "\n-------\n|" (get symbols/symbols 1) "| |" (get symbols/symbols 2) "|\n-------\n| |" (get symbols/symbols 2) "|" (get symbols/symbols 1) "|\n-------\n|" (get symbols/symbols 2) "|" (get symbols/symbols 1) "| |\n-------") (tttb/get-tttb-string mixed-board))))

  (context "places a value into the tttb"
    (it "an X into top left corner"
      (should= [0 0 2 0 0 0 0 0 0] (tttb/place-value-into-tttb empty-board 2 2)))

    (it "an X and O in opposite corners"
      (should= [1 0 0 0 0 0 0 0 2] (-> empty-board (tttb/place-value-into-tttb 1 0) (tttb/place-value-into-tttb 2 8))))

    (it "a series of inputs"
      (should= mixed-board (-> empty-board
                               (tttb/place-value-into-tttb 1 0)
                               (tttb/place-value-into-tttb 2 2)
                               (tttb/place-value-into-tttb 2 4)
                               (tttb/place-value-into-tttb 1 5)
                               (tttb/place-value-into-tttb 2 6)
                               (tttb/place-value-into-tttb 1 7))))

    (it "returns board input if value is attempting to overwrite X or O"
      (should= mixed-board (tttb/place-value-into-tttb mixed-board 2 0)))))
