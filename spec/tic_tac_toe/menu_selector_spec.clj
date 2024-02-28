(ns tic-tac-toe.menu-selector-spec
  (:require [speclj.core :as spec]
            [tic-tac-toe.game-runner :as run]
            [tic-tac-toe.menu-selector :as menu]))

(spec/describe "Menu Selector"
  (spec/context "gives a function based on a start menu option"
    (spec/it "nil if invalid selection"
      (spec/should= nil (menu/get-option run/menu-options "0")))

    (spec/it "initialize game if 1"
      (spec/should= run/initialize-game (menu/get-option run/menu-options "1")))

    (spec/it "close program if 2"
      (spec/should= menu/close-program (menu/get-option run/menu-options "2"))))

  (spec/context "gives a symbol based on a symbol selection"
    (spec/it "nil if invalid selection"
      (spec/should= nil (menu/get-option menu/symbol-options "a")))

    (spec/it "X if x or X"
      (spec/should= 1 (menu/get-option menu/symbol-options "x"))
      (spec/should= 1 (menu/get-option menu/symbol-options "X")))

    (spec/it "O if o or O"
      (spec/should= 2 (menu/get-option menu/symbol-options "o"))
      (spec/should= 2 (menu/get-option menu/symbol-options "O")))))
