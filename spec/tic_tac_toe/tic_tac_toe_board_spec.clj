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

    (it "converts the board values to a more readable set of symbols"
      (should= [[(get symbols/symbols 1) (get symbols/symbols 2) " 2"] [(get symbols/symbols 2) " 4" (get symbols/symbols 1)] [" 6" (get symbols/symbols 1) (get symbols/symbols 2)]] (tttb/convert-board-vals-to-symbols [1 2 0 2 0 1 0 1 2]))
      (should= [[" 0" " 1" " 2" " 3"] [" 4" " 5" " 6" " 7"] [" 8" " 9" "10" "11"] ["12" "13" "14" "15"]] (tttb/convert-board-vals-to-symbols (repeat 16 0))))

    (it "an empty board"
      (should= "\n 0| 1| 2\n========\n 3| 4| 5\n========\n 6| 7| 8"  (tttb/get-tttb-string (repeat 9 0)))
      (should= "\n 0| 1| 2| 3\n===========\n 4| 5| 6| 7\n===========\n 8| 9|10|11\n===========\n12|13|14|15" (tttb/get-tttb-string (repeat 16 0))))

    (it "a mixed board of x's and o's factoring in the color changes for x and o"
      (should= (str "\n" (get symbols/symbols 1) "| 1|" (get symbols/symbols 2) "\n========\n 3|" (get symbols/symbols 2) "|" (get symbols/symbols 1) "\n========\n" (get symbols/symbols 2) "|" (get symbols/symbols 1) "| 8") (tttb/get-tttb-string mixed-board))))

  (context "places a value into the tttb"
    (it "checks if the position is empty to place"
      (should (tttb/spot-available? empty-board 0))
      (should-not (tttb/spot-available? [1 0 0 0 0 0 0 0 0] 0))
      (should-not (tttb/spot-available? [1 1 1 1 1 1 1 1 1] 4)))

    (it "an X into top left corner"
      (should= [0 0 2 0 0 0 0 0 0] (tttb/place-value-into-tttb empty-board 2 2)))
    (it "an X and O in opposite corners"
      (should= [1 0 0 0 0 0 0 0 2] (-> empty-board (tttb/place-value-into-tttb 1 0) (tttb/place-value-into-tttb 2 8))))
    (it "an X on a spot where an O exists"
      (should= [2 0 0 0 0 0 0 0 0] (-> empty-board (tttb/place-value-into-tttb 2 0) (tttb/place-value-into-tttb 1 0))))

    (it "a series of inputs"
      (should= mixed-board (-> empty-board
                               (tttb/place-value-into-tttb 1 0)
                               (tttb/place-value-into-tttb 2 2)
                               (tttb/place-value-into-tttb 2 4)
                               (tttb/place-value-into-tttb 1 5)
                               (tttb/place-value-into-tttb 2 6)
                               (tttb/place-value-into-tttb 1 7))))

    (it "returns board input if value is attempting to overwrite X or O"
      (should= mixed-board (tttb/place-value-into-tttb mixed-board 2 0))))

  (context "gives the absolute depth of the board"
    (it "0 if the board is empty"
      (should= 0 (tttb/get-absolute-depth [0 0 0 0 0 0 0 0 0]))))
  )
