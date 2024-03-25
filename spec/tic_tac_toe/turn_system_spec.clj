(ns tic-tac-toe.turn-system-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-player :as ai]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.user-player :as user]))

(describe "Turn System"

  (context "checks if ai is"
    (it "the player being checked."
      (should (turn/is-ai? ["AI 1" 1]))
      (should-not (turn/is-ai? ["Player 1" 1])))

    (it "within a list of players"
      (should-not (turn/has-ai? [["Player" 1] ["Player 2" 2]]))
      (should (turn/has-ai? [["Player" 1] ["AI" 2]]))))

  (context "Play's the"
    (it "ai's turn"
      (with-redefs [ai/play-turn (fn [_ _ _] "AI")
                    println (fn [_] nil)]
        (should= "AI" (turn/play-next-turn {:board   [0 0 0 0 0 0 0 0 0]
                                            :players {"Player 1" 1 "AI" 2}
                                            :round   2 :difficulty 10} false))))
    (it "player's turn"
      (with-redefs [user/play-turn (fn [_ _ _] "Player")
                    println (fn [_] nil)]
        (should= "Player" (turn/play-next-turn {:board   [0 0 0 0 0 0 0 0 0]
                                                :players {"Player 1" 1 "AI" 2}
                                                :round   1 :difficulty 10} false)))))

  (context "checks if it is players turn by"
    (it "returning true if it is"
      (should (turn/is-turn? 1 1))
      (should (turn/is-turn? 2 2)))
    (it "returning false if it is not"
      (should-not (turn/is-turn? 1 2))
      (should-not (turn/is-turn? 2 1)))

    (it "returning the player whose turn it is"
      (should= [:player1 1] (turn/get-current-player {:player1 1 :ai 1} 1))
      (should= [:ai 1] (turn/get-current-player {:player1 1 :ai 1} 2)))))
