(ns tic-tac-toe.turn-system-spec
  (:require [speclj.core :as spec]
            [tic-tac-toe.turn-system :as turn]))

(spec/describe "Turn System"
  (spec/context "checks if it is users turn or not by"
    (spec/it "returning true if users turn"
      (spec/should (turn/is-user-turn? 1 1))
      (spec/should (turn/is-user-turn? 2 2)))
    (spec/it "returning false if not users turn"
      (spec/should-not (turn/is-user-turn? 1 2))
      (spec/should-not (turn/is-user-turn? 2 1))))

  (spec/context "parses the position on the board with row and col"
    (spec/it "gets the position with a proper row and col"
      (spec/should= 0 (turn/parse-position 0 0))
      (spec/should= 3 (turn/parse-position 1 0)))))
