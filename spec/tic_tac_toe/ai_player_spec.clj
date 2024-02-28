(ns tic-tac-toe.ai-player-spec
  (:require [speclj.core :as spec]
            [tic-tac-toe.ai-player :as ai]))

(spec/describe "AI Player"

  (spec/context "Makes all possible moves on a given board"
    (spec/it "returns empty vec if no plays left"
      (spec/should= {} (ai/make-hypothetical-moves [1 1 1 1 1 1 1 1 1] 1)))

    (spec/it "1 board with position played if 1 play left"
      (spec/should= {6 [1 1 1 1 1 1 2 1 1]} (ai/make-hypothetical-moves [1 1 1 1 1 1 0 1 1] 2)))

    (spec/it "a series of possible plays if more than 1 play left"
      (spec/should= {8 [0 0 0 0 0 0 0 0 1]
                     7 [0 0 0 0 0 0 0 1 0]
                     6 [0 0 0 0 0 0 1 0 0]
                     5 [0 0 0 0 0 1 0 0 0]
                     4 [0 0 0 0 1 0 0 0 0]
                     3 [0 0 0 1 0 0 0 0 0]
                     2 [0 0 1 0 0 0 0 0 0]
                     1 [0 1 0 0 0 0 0 0 0]
                     0 [1 0 0 0 0 0 0 0 0]} (ai/make-hypothetical-moves [0 0 0 0 0 0 0 0 0] 1))))

  (spec/context "gets score of end condition"
    (spec/it "returns 0 if a tie"
      (spec/should= 0 (ai/get-end-score [1 2 1 2 2 1 1 1 2] 9 1)))

    (spec/it "returns 1 if ai wins at depth 9"
      (spec/should= 1 (ai/get-end-score [1 1 1 0 0 0 0 0 0] 9 1)))

    (spec/it "returns -1 if ai loses at depth 9"
      (spec/should= -1 (ai/get-end-score [1 1 1 0 0 0 0 0 0] 9 2))))

  (spec/context "checks if it's currently the ai's turn or not"
    (spec/it "returns false if depth is not even"
      (spec/should (ai/is-ai-turn? 0)))
    (spec/it "returns true if depth is even"
      (spec/should-not (ai/is-ai-turn? 1))))

  (spec/context "gives the right symbol depending on the context of
                 the ai's symbol and the depth"
    (spec/it "returns 1 if ai symbol is 1 on first move"
      (spec/should= 1 (ai/get-current-symbol 0 1)))
    (spec/it "returns 2 if ai symbol is 1 on the second move"
      (spec/should= 2 (ai/get-current-symbol 1 1))))

  (spec/context "makes the best possible move based on an algorithm"
    (spec/it "moves to 0 0 if empty board"
      (spec/should= [1 0 0 0 0 0 0 0 0] (ai/mini-max-algo [0 0 0 0 0 0 0 0 0] 1)))

    (spec/it "actively blocks player movement until tie or ai wins"
      (spec/should= [1 2 1 0 2 2 2 1 1] (ai/mini-max-algo [1 2 1 0 2 0 2 1 1] 2))
      (spec/should= [1 0 0 0 2 0 0 0 0] (ai/mini-max-algo [1 0 0 0 0 0 0 0 0] 2))
      (spec/should= [1 2 1 0 2 0 0 0 0] (ai/mini-max-algo [1 0 1 0 2 0 0 0 0] 2))
      (spec/should= [1 2 1 0 2 0 0 2 1] (ai/mini-max-algo [1 2 1 0 2 0 0 0 1] 2))
      (spec/should= [1 2 1 2 2 0 0 1 0] (ai/mini-max-algo [1 2 1 0 2 0 0 1 0] 2))
      (spec/should= [1 2 1 2 2 1 0 1 2] (ai/mini-max-algo [1 2 1 2 2 1 0 1 0] 2)))))

