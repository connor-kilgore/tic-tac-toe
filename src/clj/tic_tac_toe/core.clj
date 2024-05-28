(ns tic-tac-toe.core
  (:require [tic-tac-toe.game-runner :as game]))

(defn -main [& args]
  (let [new-game (game/parse-arguments game/base-game args)]
    (game/menu-loop new-game)))