(ns tic-tac-toe.turn-system-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.turn-system :as turn]))

(describe "Turn System"
  (context "checks if players are an ai or not"
    (it "returns true if player is an ai"
      (should (turn/is-ai? ["AI 1" 1])))
    (it "returns false if player is not an ai"
      (should-not (turn/is-ai? ["Player 1" 1])))

    (it "returns true if list of players contains an ai"
      (should (turn/has-ai? [["Player" 1] ["AI" 2]]))
      (should-not (turn/has-ai? [["Player" 1] ["Player 2" 2]]))))

  (context "checks if it is users turn or not by"
    (it "returning true if users turn"
      (should (turn/is-turn? 1 1))
      (should (turn/is-turn? 2 2)))
    (it "returning false if not users turn"
      (should-not (turn/is-turn? 1 2))
      (should-not (turn/is-turn? 2 1)))

    (it "returning the player if it's their turn"
      (should= [:player1 1] (turn/get-current-player {:player1 1 :ai 1} 1))
      (should= [:ai 1] (turn/get-current-player {:player1 1 :ai 1} 2)))))
