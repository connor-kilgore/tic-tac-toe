(ns tic-tac-toe.user-player-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.user-player :as user]))

(describe "User Player"
  (context "parses the position on the board with row and col"
    (it "gets the position with a proper row and col"
      (should= 0 (user/parse-position 3 0 0))
      (should= 3 (user/parse-position 3 1 0)))))