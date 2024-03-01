(ns tic-tac-toe.win-checker-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.win-checker :as win?]))

(describe "Win Checker"
  (context "checks if the game has met an end condition"
    (it "returns symbol of winner if a horizontal win is found"
      (should= 1 (win?/get-horizontal-winner [1 1 1 0 0 0 0 0 0]))
      (should= 2 (win?/get-horizontal-winner [1 1 2 0 0 0 2 2 2])))
    (it "returns nil if no horizontal win is found"
      (should= nil (win?/get-horizontal-winner [1 1 2 0 0 0 0 0 0])))

    (it "returns a symbol of winner if a vertical win is found"
      (should= 1 (win?/get-vertical-winner [1 0 0 1 0 0 1 0 0]))
      (should= 2 (win?/get-vertical-winner [1 2 0 2 2 0 1 2 0])))
    (it "returns nil if no vertical win is found"
      (should= nil (win?/get-vertical-winner [1 0 0 1 0 0 2 0 0])))

    (it "returns a symbol of winner if a diagonal win is found"
      (should= 1 (win?/get-diagonal-winner [1 0 0 0 1 0 0 0 1]))
      (should= 2 (win?/get-diagonal-winner [1 0 2 0 2 0 2 0 1])))
    (it "returns nil if no diagonal win is found"
      (should= nil (win?/get-diagonal-winner [1 1 1 0 2 2 2 2 1])))

    (it "returns symbol of winner if a winner is found"
      (should= 1 (win?/get-winner [1 0 0 1 0 0 1 0 0]))
      (should= 2 (win?/get-winner [2 2 2 1 0 2 1 0 0]))
      (should= 1 (win?/get-winner [1 2 2 1 0 2 1 0 1])))
    (it "returns nil if no winner found"
      (should= nil (win?/get-winner [0 0 0 0 0 0 0 0 0])))

    (it "checks if there is a winner or a tie"
      (should= "tie" (win?/get-winner-or-tie [1 2 1 1 2 2 2 1 1]))
      (should= 1 (win?/get-winner-or-tie [1 1 1 1 2 2 2 1 1]))
      (should= nil (win?/get-winner-or-tie [1 1 0 1 2 2 2 1 1])))))