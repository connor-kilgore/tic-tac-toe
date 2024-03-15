(ns tic-tac-toe.menu-selector-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-runner :as run]
            [tic-tac-toe.menu-selector :as menu]))

(describe "Menu Selector"
  (context "gives a function based on a start menu option"
    (it "nil if invalid selection"
      (should= nil (menu/get-option run/menu-options "0")))

    (it "close program if 4"
      (should= menu/close-program (menu/get-option run/menu-options "4"))))

  (context "gets selection of a given map by"
    (it "returning valid user selection"
      (with-redefs [read-line (fn [] "2")
                    println (fn [_] nil)]
        (should= 9 (menu/get-selection menu/difficulty-options))))
    (it "having user re-choose if invalid selection"
      (with-redefs [read-line (fn [] (str (+ (rand-int 2) 3)))
                    println (fn [_] nil)]
        (should= -1 (menu/get-selection menu/difficulty-options)))))
  )
