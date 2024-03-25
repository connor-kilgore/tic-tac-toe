(ns tic-tac-toe.file-saver-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.file-saver :refer :all]))

(def game-state {:board      [0 0 0 0 0 0 0 0 0]
                 :round      1
                 :players    {"Player 1" 1 "AI" 2}
                 :difficulty 10})

(describe "File Saver"

  (context "last game can be deleted by"
    (it "wiping the old content"
      (should= nil (wipe-saved-game)))
    (it "retrieving nil if file is empty"
      (should= nil (get-last-game-state))))

  (context "last game is retrievable by"
    (it "saving the game state to a json file each round"
      (with-redefs [append-game-state-to-file (fn [_ _] nil)]
        (should= nil (set-save-game-state game-state nil))))

    (it "getting the last game state from a file"
      (should= game-state (get-last-game-state))))

  (it "gets the archive a specified game"
    (should= [{:board [0 0 0 0 0 0 0 0 0], :round 1, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 0 0 0 0 0 0 0 0], :round 2, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 0 0 0 2 0 0 0 0], :round 3, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 0 0 2 0 0 0 0], :round 4, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 2 0 2 0 0 0 0], :round 5, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 2 0 2 0 1 0 0], :round 6, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 2 2 2 0 1 0 0], :round 7, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 2 2 2 1 1 0 0], :round 8, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 2 2 2 1 1 2 0], :round 9, :players {"Player" 1, "AI" 2}, :difficulty 10}
              {:board [1 1 2 2 2 1 1 2 1], :round 10, :players {"Player" 1, "AI" 2}, :difficulty 10}]
             (get-game-archive "saved-games/test.txt")))
  )
