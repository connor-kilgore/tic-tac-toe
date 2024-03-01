(ns tic-tac-toe.menu-selector-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-runner :as run]
            [tic-tac-toe.menu-selector :as menu]))

(describe "Menu Selector"
  (context "gives a function based on a start menu option"
    (it "nil if invalid selection"
      (should= nil (menu/get-option run/menu-options "0")))

    (it "initialize single-player if 1"
      (should= run/initialize-one-player (menu/get-option run/menu-options "1")))

    (it "initialize two-player if 2"
      (should= run/initialize-two-player (menu/get-option run/menu-options "2")))

    (it "close program if 3"
      (should= menu/close-program (menu/get-option run/menu-options "3"))))

  (context "gives a symbol based on a symbol selection"
    (it "nil if invalid selection"
      (should= nil (menu/get-option menu/symbol-options "a")))

    (it "X if x or X"
      (should= 1 (menu/get-option menu/symbol-options "x"))
      (should= 1 (menu/get-option menu/symbol-options "X")))

    (it "O if o or O"
      (should= 2 (menu/get-option menu/symbol-options "o"))
      (should= 2 (menu/get-option menu/symbol-options "O")))))
