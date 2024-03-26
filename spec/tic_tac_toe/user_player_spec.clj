(ns tic-tac-toe.user-player-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.user-player :refer :all]))

(describe "User Player"
  (it "plays user turn"
    (with-redefs [make-move (fn [_] 4)]
      (should= [0 0 0 0 1 0 0 0 0] (play-turn {:board [0 0 0 0 0 0 0 0 0] :three-d false} 1 :tui)))
    (with-redefs [make-move (fn [_] (rand-int 2))
                  println (fn [_] nil)]
      (should= [1 1 0 0 0 0 0 0 0] (play-turn {:board [0 1 0 0 0 0 0 0 0] :three-d false} 1 :tui)))))
