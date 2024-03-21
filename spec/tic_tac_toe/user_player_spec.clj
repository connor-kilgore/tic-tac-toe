(ns tic-tac-toe.user-player-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.menu-selector :as menu]
            [tic-tac-toe.user-player :as user]))

(describe "User Player"
  (it "plays user turn"
    (with-redefs [menu/get-selection (fn [_ _] 4)]
      (should= [0 0 0 0 1 0 0 0 0] (user/play-turn [0 0 0 0 0 0 0 0 0] 1 true)))
    (with-redefs [menu/get-selection (fn [_ _] (rand-int 2))
                  println (fn [_] nil)]
      (should= [1 1 0 0 0 0 0 0 0] (user/play-turn [0 1 0 0 0 0 0 0 0] 1 true))))
  )
