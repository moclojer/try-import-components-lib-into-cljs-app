(ns app.core
  (:require ["moclojer-components" :as mc]
            ["rc-input-number$default" :as InputNumber]
            ["react-dom/client" :as rdom]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))


(defnc my-component
  [{:keys [on?]}]
  (d/div
   {:style {:background (if on? "red" "black")}}
   "Hello, Helix!"))

(defnc app []
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
   (d/div

     ;; Example using an helix wrapped component
     ($ my-component {:on? true})

     ;; Example using an react component on local repo
     ($ mc/Banner {})

     ;; Example using an react component npm lib
     (d/div ($ InputNumber {:upHandler (d/div {:style {:color "blue"}} "^")
                            :downHandler (d/div {:style {:color "red"}} "V")
                            :defaultValue 10}))

     (d/input {:value (:name state)
               :on-change #(set-state assoc :name (.. % -target -value))}))))

;; start your app with your favorite React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app)))
  (println "Hello Helix!"))
