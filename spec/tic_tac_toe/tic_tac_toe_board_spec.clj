(ns tic-tac-toe.tic-tac-toe-board-spec
  (:require [speclj.core :as spec]
            [tic-tac-toe.tic-tac-toe-board :as tttb]))

(def mixed-board
  [1 0 2
   0 2 1
   2 1 0])

(spec/describe "Tic Tac Toe Board"
  (spec/context "gets string representing tttb"
    (spec/it "an empty board"
      (spec/should= "\n-------\n| | | |\n-------\n| | | |\n-------\n| | | |\n-------" (tttb/get-tttb-string tttb/empty-board)))

    (spec/it "a mixed board of x's and o's factoring in the color changes for x and o"
      (spec/should= (str "\n-------\n|" (get tttb/symbols 1) "| |" (get tttb/symbols 2) "|\n-------\n| |" (get tttb/symbols 2) "|" (get tttb/symbols 1) "|\n-------\n|" (get tttb/symbols 2) "|" (get tttb/symbols 1) "| |\n-------") (tttb/get-tttb-string mixed-board))))

  (spec/context "places a value into the tttb"
    (spec/it "an X into top left corner"
      (spec/should= [0 0 2 0 0 0 0 0 0] (tttb/place-value-into-tttb tttb/empty-board 2 2)))

    (spec/it "an X and O in opposite corners"
      (spec/should= [1 0 0 0 0 0 0 0 2] (-> tttb/empty-board (tttb/place-value-into-tttb 1 0) (tttb/place-value-into-tttb 2 8))))

    (spec/it "a series of inputs"
      (spec/should= mixed-board (-> tttb/empty-board
                                    (tttb/place-value-into-tttb 1 0)
                                    (tttb/place-value-into-tttb 2 2)
                                    (tttb/place-value-into-tttb 2 4)
                                    (tttb/place-value-into-tttb 1 5)
                                    (tttb/place-value-into-tttb 2 6)
                                    (tttb/place-value-into-tttb 1 7))))

    (spec/it "returns board input if value is attempting to overwrite X or O"
      (spec/should= mixed-board (tttb/place-value-into-tttb mixed-board 2 0))))

  (spec/context "checks if the game has met an end condition"
    (spec/it "returns symbol of winner if a winner is found"
      (spec/should= 1 (tttb/get-winner [1 0 0 1 0 0 1 0 0]))
      (spec/should= 2 (tttb/get-winner [2 2 2 1 0 2 1 0 0]))
      (spec/should= 1 (tttb/get-winner [1 2 2 1 0 2 1 0 1])))
    (spec/it "returns nil if no winner found"
      (spec/should= nil (tttb/get-winner tttb/empty-board)))

    (spec/it "returns symbol of winner if a horizontal win is found"
      (spec/should= 1 (tttb/get-horizontal-winner [1 1 1 0 0 0 0 0 0]))
      (spec/should= 2 (tttb/get-horizontal-winner [1 1 2 0 0 0 2 2 2])))
    (spec/it "returns nil if no horizontal win is found"
      (spec/should= nil (tttb/get-horizontal-winner [1 1 2 0 0 0 0 0 0])))

    (spec/it "returns a symbol of winner if a vertical win is found"
      (spec/should= 1 (tttb/get-vertical-winner [1 0 0 1 0 0 1 0 0]))
      (spec/should= 2 (tttb/get-vertical-winner [1 2 0 2 2 0 1 2 0])))
    (spec/it "returns nil if no vertical win is found"
      (spec/should= nil (tttb/get-vertical-winner [1 0 0 1 0 0 2 0 0])))

    (spec/it "returns a symbol of winner if a diagonal win is found"
      (spec/should= 1 (tttb/get-diagonal-winner [1 0 0 0 1 0 0 0 1]))
      (spec/should= 2 (tttb/get-diagonal-winner [1 0 2 0 2 0 2 0 1])))
    (spec/it "returns nil if no diagonal win is found"
      (spec/should= nil (tttb/get-diagonal-winner [1 1 1 0 2 2 2 2 1])))

    (spec/it "checks if there is a winner or a tie"
      (spec/should= "tie" (tttb/get-winner-or-tie [1 2 1 1 2 2 2 1 1]))
      (spec/should= 1 (tttb/get-winner-or-tie [1 1 1 1 2 2 2 1 1]))
      (spec/should= nil (tttb/get-winner-or-tie [1 1 0 1 2 2 2 1 1])))))
