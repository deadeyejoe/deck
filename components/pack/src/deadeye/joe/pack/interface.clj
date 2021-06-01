(ns deadeye.joe.pack.interface
  (:require [deadeye.joe.pack.core :as core]))

(def build core/build)
(def deck core/deck)
(def stack core/stack)
(def panel core/panel)
(def hand core/hand)
(def supply core/supply)

(def draw  core/draw)
(def pick  core/pick)

(def add  core/add)
(def place  core/place)

(def sort  core/sort)
(def shuffle  core/shuffle)

(def size  core/size)
(def full?  core/full?)
