(ns tic-tac-toe.game-runner-spec
  (:require [speclj.core :as spec]
            [tic-tac-toe.game-runner :as run]))

(spec/describe "Game Runner Module"

  (spec/context "gives an end condition string by"
    (spec/it "saying you tied when no winner"
      (spec/should= "\nTie!" (run/get-end-condition-string nil "X")))
    (spec/it "saying you lost when you aren't the winner"
      (spec/should= "\nYou lost!" (run/get-end-condition-string "X" "O")))
    (spec/it "saying you won when you are the winner"
      (spec/should= "\nYou won!" (run/get-end-condition-string "X" "X")))))
