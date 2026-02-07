
(ns demo.static-website
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [clojure.core.async
             :as a
             :refer [>! <!  go chan buffer close! 
                     alts! timeout]]
   [clojure.edn :as edn]
   [clojure.math :as math]
   [clojure.string :as str]))

(js/console.log "Hello, Github Pages!")
(defn current-page []
  (fn []
    [:div
       
       "OOOOKKKKK"
       ]
    ))




(def click-count (reagent/atom 0))
(def num-correct (reagent/atom 0))
(def l  (reagent/atom ""))
(def o  (reagent/atom "Press Start!"))
(def r  (reagent/atom ""))
(def a  (reagent/atom ""))
(def ua  (reagent/atom (vector)))
(def correct-class (reagent/atom ""))
(def base-time (reagent/atom 0))
(def seconds-elapsed (reagent/atom 0))

(defn in-range? [n]
  (and (>= n 48) (<= n 57)))

;; (js/console.log "YEAHHHHHHHOKOKOK" %1 (.-charCode %1) "foo" (in-range? (.-charCode %1)))
;; (defn log-key [])
(def op-display {
                 + " + "
                 - " - "
                 / " / "
                 * " * "})
;;  (get (vec '(+ -)) (rand-int 2))

(defn q-obj []
  (let [l (rand-int 30)
        r (rand-int 30)
        o (get  [+ - / *] (rand-int 4))
        d (get op-display o)]
    (print l r o d)
    (if (= o /)
      (do (print "the first onr "){:l (* l r)
        :r r
        :a l
        :o o
        :d d})
      (do {:l l
        :r r
        :o o
        :d d
           :a (o l r)}))))

(defn reset-vals []
  (reset! correct-class "")
  (reset! l (rand-int 30))
  (reset! r (rand-int 30))
  (reset! o " + ")
  (reset! a (+ @l @r))
  (reset! ua (vector)))

(defn reset-game []
  (.log js/console "PUSH")
  (reset-vals)
  (reset! base-time (js/Date.now))
  (reset! seconds-elapsed 0)
  (reset! num-correct 0)
  )

(defn set-correct []
  (reset! correct-class "glow")
  (go
    (<! (timeout 1000))
    (reset-vals)
    (swap! num-correct inc)
    (.log js/console @l @r @a @ua )))

(defn add-answer-diget [num]
  (if (> @seconds-elapsed 0)
    (do
      (swap! ua conj (str num))
      ;(.log js/console "foo" num (edn/read-string (str/join "" @ua)) "that")
      (.log js/console (= @a (edn/read-string (str/join "" @ua))) )
      (if (= @a (edn/read-string (str/join "" @ua)))
        ( set-correct)))))


(defn set-key-handler[]
  (.log js/console "waka")
  (.addEventListener js/window "keydown" #(if (in-range? (.-keyCode %1))
                                            (add-answer-diget (.-key %1))
                                            ;(.log js/console %1)
                                            )))

(.addEventListener js/window "DOMContentLoaded" #(set-key-handler))
(set-key-handler)

;; (.addEventListener js/window "keydown" #((.log js/console "hey" )))


(defn counting-component []
  [:div
   "The atom  " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])



(defn lister [items]
  (for [item items]
    ^{:key item} [:button {:class "key" :on-click #(add-answer-diget item)  } item]))

(defn run-counter []
;  (.log js/console "so based" @base-time)
  (if (> @base-time 0)
    (let [time-left (- 120 (math/floor (/ (-(js/Date.now) @base-time ) 1000)))]
      (if (>= time-left 0)
        (reset! seconds-elapsed time-left)
        (do
          (reset! o "Press Start!")
          (reset! l "")
          (reset! r ""))))))

(defn timer-component []
  (fn []
    (js/setInterval #(run-counter) 400)
    [:span
     [:span @seconds-elapsed]]))

(defn other []
  (fn[]
    [:div {:class "body-container"}
     
 
     [:div {:class "container"}
      [:div {:class "header"}
       [:button {:class "key start" :on-click #(reset-game)} "Start"]
       [:div {:class "stats"}
        [:div {:class "results"} 
         [:span {:id "time-elapsed"} "Time:" ]
         [timer-component]]
        [:div {:class "results"}
         [:span {:id "correct-answers"} "Correct: " ]
         [:span @num-correct]]]]
      ;;[timer-component]

      ;;@num-correct
      ;;[:button {:class "key start" :on-click #(reset-game)} "start"]
      [:div {:class "display"}
       [:span {:id "equation"} @l @o @r]
       [:span {:id "current-answer" :class @correct-class} (str/join "" @ua)]]
      [:div {:class "keypad"}
       (lister [7 8 9 4 5 6 1 2 3])
       [:button {:class "key zero" :on-click #(add-answer-diget 0)} "0"]
       [:button {:class "key backspace" :on-click #(swap! ua pop )} "⌫"]]
      ]]))

(defn home-page []
  (fn[]
    [:div {:class "body-container"}
     
 
     [:div {:class "container"}
      [:div {:class "header"}
       [:button {:class "key start" :on-click #(reset-game)} "Start"]
       [:div {:class "stats"}
        [:div {:class "results"} 
         [:span {:id "time-elapsed"} "Time:" ]
         [timer-component]]
        [:div {:class "results"}
         [:span {:id "correct-answers"} "Correct: " ]
         [:span @num-correct]]]]
      ;;[timer-component]

      ;;@num-correct
      ;;[:button {:class "key start" :on-click #(reset-game)} "start"]
      [:div {:class "display"}
       [:span {:id "equation"} @l @o @r]
       [:span {:id "current-answer" :class @correct-class} (str/join "" @ua)]]
      [:div {:class "keypad"}
       (lister [7 8 9 4 5 6 1 2 3])
       [:button {:class "key zero" :on-click #(add-answer-diget 0)} "0"]
       [:button {:class "key backspace" :on-click #(swap! ua pop )} "⌫"]]
      ]]))


(rdom/render [home-page] (.getElementById js/document "app"))
