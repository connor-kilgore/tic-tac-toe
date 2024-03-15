(ns tic-tac-toe.ai-player-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-player :as ai]))

(describe "AI Player"

  (context "Makes all possible moves on a given board"
    (it "returns empty vec if no plays left"
      (should= {} (ai/make-hypothetical-moves [1 1 1 1 1 1 1 1 1] 1)))

    (it "1 board with position played if 1 play left"
      (should= {6 [1 1 1 1 1 1 2 1 1]} (ai/make-hypothetical-moves [1 1 1 1 1 1 0 1 1] 2)))

    (it "a series of possible plays if more than 1 play left"
      (should= {8 [0 0 0 0 0 0 0 0 1]
                7 [0 0 0 0 0 0 0 1 0]
                6 [0 0 0 0 0 0 1 0 0]
                5 [0 0 0 0 0 1 0 0 0]
                4 [0 0 0 0 1 0 0 0 0]
                3 [0 0 0 1 0 0 0 0 0]
                2 [0 0 1 0 0 0 0 0 0]
                1 [0 1 0 0 0 0 0 0 0]
                0 [1 0 0 0 0 0 0 0 0]} (ai/make-hypothetical-moves [0 0 0 0 0 0 0 0 0] 1))))

  (context "gets score of end condition"
    (it "returns 0 if a tie"
      (should= 0 (ai/get-end-score [1 2 1
                                    2 2 1
                                    1 1 2] 1)))

    (it "returns 1 if ai wins at depth 9"
      (should= 1 (ai/get-end-score [1 1 1 2 1 2 1 2 2] 1)))

    (it "returns -1 if ai loses at depth 9"
      (should= -1 (ai/get-end-score [1 1 1 2 1 2 1 2 2] 2))))

  (context "checks if it's currently the ai's turn or not"
    (it "returns false if depth is not even"
      (should (ai/is-ai-turn? 0)))
    (it "returns true if depth is even"
      (should-not (ai/is-ai-turn? 1))))

  (context "gives the right symbol depending on the context of
                 the ai's symbol and the depth"
    (it "returns 1 if ai symbol is 1 on first move"
      (should= 1 (ai/get-current-symbol 0 1)))
    (it "returns 2 if ai symbol is 1 on the second move"
      (should= 2 (ai/get-current-symbol 1 1))))

  (context "makes the best possible move based on an algorithm"
    (it "moves to any space when absolute depth is below 5"
      (should= [1 0 0 0 0 0 0 0 0] (ai/mini-max-algo [0 0 0 0 0 0 0 0 0] 1))
      (should= [1 0 0 0 2 0 0 0 0] (ai/mini-max-algo [1 0 0 0 0 0 0 0 0] 2)))


    (it "actively blocks player movement until tie or ai wins"
      (should= [1 2 1 0 2 2 2 1 1] (ai/mini-max-algo [1 2 1 0 2 0 2 1 1] 2))
      (should= [1 2 1 0 2 0 0 0 0] (ai/mini-max-algo [1 0 1 0 2 0 0 0 0] 2))
      (should= [1 2 1 0 2 0 0 2 1] (ai/mini-max-algo [1 2 1 0 2 0 0 0 1] 2))
      (should= [1 2 1 2 2 0 0 1 0] (ai/mini-max-algo [1 2 1 0 2 0 0 1 0] 2))
      (should= [1 2 1 2 2 1 0 1 2] (ai/mini-max-algo [1 2 1 2 2 1 0 1 0] 2)))

    (it "works for 4x4 too"
      (should= [0 2 0 0 0 1 0 0 0 1 2 0 0 1 0 2]
               (ai/mini-max-algo [0 0 0 0 0 1 0 0 0 1 2 0 0 1 0 2] 2))))


  (context "gives the best best score for the algorithm"
    (it "the biggest score if it's the ai's turn"
      (should= [3 4] (ai/get-best-score 0 {1 2 3 4}))
      (should= [3 4] (ai/get-best-score 0 {3 4 1 2})))
    (it "the smallest score if not the ai's turn"
      (should= [1 2] (ai/get-best-score 1 {1 2 3 4}))
      (should= [1 2] (ai/get-best-score 1 {3 4 1 2})))))

