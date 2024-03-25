(ns tic-tac-toe.game-runner-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.file-saver :as file]
            [tic-tac-toe.game-runner :refer :all]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.turn-system :as turn]))

(describe "Game Runner Module"

  (context "checks if selected user interface options are a"
    (it "TUI"
      (should (tui? :tui))
      (should-not (tui? :gui)))

    (it "GUI"
      (should-not (gui? :tui))
      (should (gui? :gui)))

    (it "archived game"
      (should-not (archive? :tui))
      (should (archive? :archive))))

  (it "makes new match data"
    (should= {:players    {:player-1 1 :player-2 2}
              :difficulty 10
              :round      1
              :board      [0 0 0 0 0 0 0 0 0]} (get-new-game
                                                 {:players    {:player-1 1 :player-2 2}
                                                  :difficulty 10
                                                  :round      3
                                                  :board      [1 1 1 0 0 0 0 0 0]})))

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
      (with-redefs [turn/play-next-turn (fn [_ _] [0 0 0 0 0 0 0 0 0])
                    round-output (fn [_] nil)
                    file/set-save-game-state (fn [_ _] nil)]
        (should= nil (game-loop
                       {:board [0 0 0 0 0 0 0 0 0]
                        :round 1 :players {"Player 1" 1 "AI" 2}
                        :difficulty 10} nil))))

    (it "until a win"
      (with-redefs [turn/play-next-turn (fn [_ _] [1 1 1 0 0 0 0 0 0])
                    round-output (fn [_] nil)
                    file/set-save-game-state (fn [_ _] nil)]
        (should= 1 (game-loop
                     {:board [0 0 0 0 0 0 0 0 0]
                      :round 1 :players {"Player 1" 1 "AI" 2}
                      :difficulty 10} nil)))))

  (it "initializes a one player game"
    (with-redefs [menu/get-selection (fn [_] 2)]
      (should= {"Player" 2 "AI" 1} (initialize-one-player))))

  (it "makes an empty board given a side length"
    (should= [0 0 0 0 0 0 0 0 0] (make-board 3))
    (should= [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] (make-board 4)))

  (context "prints archived games by"
    (it "printing turns individually"
      (should= "\n=== ROUND:  1  ===  Player  === \n 0| 1| 2\n========\n 3| 4| 5\n========\n 6| 7| 8\n"
               (with-out-str (turn-to-str {:board      [0 0 0 0 0 0 0 0 0],
                                           :round      1, :players {"Player" 1, "AI" 2},
                                           :difficulty 10})))))
  )
