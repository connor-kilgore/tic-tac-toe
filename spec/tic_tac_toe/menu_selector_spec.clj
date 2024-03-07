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

  (context "gives a symbol based on a symbol selection"
    (it "nil if invalid selection"
      (should= nil (menu/get-option menu/symbol-options "a")))

    (it "X if x or X"
      (should= 1 (menu/get-option menu/symbol-options "x"))
      (should= 1 (menu/get-option menu/symbol-options "X")))

    (it "O if o or O"
      (should= 2 (menu/get-option menu/symbol-options "o"))
      (should= 2 (menu/get-option menu/symbol-options "O")))))
