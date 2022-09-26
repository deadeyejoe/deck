(ns conclave.view.generation.subs
  (:require [conclave.layout.directory :as directory]
            [conclave.subs :as subs]
            [superstring.core :as str]
            [re-frame.core :as rf]))

(def layout-code ::layout-code)
(rf/reg-sub
 layout-code
 :<- [subs/generation-option :selected-layout]
 (fn [selected-layout _qv]
   (str/upper-case selected-layout)))

(def layout-name ::layout-name)
(rf/reg-sub
 layout-name
 :<- [subs/generation-option :selected-layout]
 (fn [selected-layout _qv]
   (-> selected-layout directory/code->layout :name)))

(def seed? ::seed?)
(rf/reg-sub
 seed?
 :<- [subs/generation-option :seed]
 (fn [seed _qv]
   (str/some? seed)))
