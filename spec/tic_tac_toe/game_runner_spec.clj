(ns tic-tac-toe.game-runner-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-runner :refer :all]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.turn-system :as turn]))

(describe "Game Runner Module"

  (context "gives an end condition string by"
    (it "saying you tied when no winner"
      (should= "\nTie!"
               (get-end-condition-string nil {"Player 1" 1 "AI" 2})))
    (it "saying who won if there is a winner"
      (should= "\nAI wins!"
               (get-end-condition-string 2 {"Player 1" 1 "AI" 2}))
      (should= "\nPlayer 1 wins!"
               (get-end-condition-string 1 {"Player 1" 1 "AI" 2}))))

  (context "runs the game-loop"
    (it "until a tie"
      (with-redefs [turn/play-next-turn (fn [_ _ _ _] [0 0 0 0 0 0 0 0 0])
                    tttb/print-tttb (fn [_] nil)]
        (should= nil (game-loop [0 0 0 0 0 0 0 0 0] 7 :players :difficulty))))
    (it "until a win"
      (with-redefs [turn/play-next-turn (fn [_ _ _ _] [1 1 1 0 0 0 0 0 0])
                    tttb/print-tttb (fn [_] nil)]
        (should= 1 (game-loop [0 0 0 0 0 0 0 0 0] 7 :players :difficulty)))))

  (it "initializes a one player game"
    (with-redefs [menu/get-selection (fn [_] 2)]
      (should= {"Player" 2 "AI" 1} (initialize-one-player))))

  (it "makes an empty board given a side length"
    (should= [0 0 0 0 0 0 0 0 0] (make-board 3))
    (should= [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] (make-board 4)))
  )
