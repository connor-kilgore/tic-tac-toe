(ns tic-tac-toe.game-runner-spec
  (:require [speclj.core :as spec]
            [tic-tac-toe.game-runner :as run]))

(spec/describe "Game Runner Module"

  (spec/context "gives an end condition string by"
    (spec/it "saying you tied when no winner"
      (spec/should= "\nTie!" (run/get-end-condition-string nil {"Player 1" 1 "AI" 2})))
    (spec/it "saying who won if there is a winner"
      (spec/should= "\nAI wins!" (run/get-end-condition-string 2 {"Player 1" 1 "AI" 2}))
      (spec/should= "\nPlayer 1 wins!" (run/get-end-condition-string 1 {"Player 1" 1 "AI" 2})))))
