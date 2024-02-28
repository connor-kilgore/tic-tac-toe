(ns tic-tac-toe.core
  (:require [tic-tac-toe.game-runner :as game]))

(defn -main []
  (game/start-menu))
