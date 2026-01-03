---
title: "( DFS )"
date: 2020-05-08
draft: false
author: me, of course
katex: true
markup: "mmark"
---
Useful for finding cycles and is often used as step in the process for things like topological sorts (as demonstrated below) and finding strongly connected components. DFS is generally run to learn about a graph's structure and, unlike BFS which is ordinarily seeded with a single root vertex, DFS will iterate over all vertices. The `discovered` and `finished` times have a parenthesis structure where the intervals $$[d[u], f[u]] \:and\: [d[v], f[v]]$$ are either entirely disjoint, or one is entirely contained within the other. 

The predecessor subgraph forms a depth-first forest where the edges are tree edges.

$$G_\pi = (V, E_\pi)$$ where 
 
 
$$E_\pi = \{(\pi[v], v) : v \in  V and \:\pi[v] \ne NIL\}$$ Basically the edges are those where the origin vertex was marked as a predecessor when running DFS.
 
The running time is $$\theta(V + E)$$. 

```clj
"(G)raph, vertex (u), (c)olor, (d)iscovered, (f)inished, (p)redecessor,
(t)ime, vertices (vs)"

(defn waj [G]
  "whiten adjacency list"
  (into {} (map (fn [[k]] [k "white"]) G)))
  
(defn DFS-VISIT [G u [c d f p t]]
  (let [t (inc t)
        c (assoc c u "gray")
        d (assoc d u t)
        r (loop [vs (u G)
                 [c d f p t][c d f p t]]
            (let [v (first vs)]
              (if (nil? v) [c d f p t]
                  (if (= (v c) "white") ;; "gray" here would indicate a cycle
                    (recur (rest vs) (DFS-VISIT G v [c d f (assoc p v u) t]))
                    (recur (rest vs) [c d f p t])))))
        [c d f p t] r]
    [(assoc c u "black") d (assoc f u (inc t)) p (inc t)]))


(defn DFS [G]
  (loop [vs (keys G)
         [c d f p t] [(waj G) {} {} {} 0]]
    (let [u (first vs)]
     (if (nil? u) [c d f p t]
         (if (= (u c) "white")
           (recur (rest vs) (DFS-VISIT G u [c d f p t])) 
           (recur (rest vs) [c d f p t]))))))

(def g {:a [:b :f]
        :b [:c]
        :c [:d :e]
        :d []
        :e [:g]
        :f [:g :e :a]
        :g []})

(DFS g)

;; returns
[{:a "black",
  :b "black",
  :c "black",
  :d "black",
  :e "black",
  :f "black",
  :g "black"}
 {:a 1, :b 2, :c 3, :d 4, :e 6, :g 7, :f 12}
 {:d 5, :g 8, :e 9, :c 10, :b 11, :f 13, :a 14}
 {:b :a, :c :b, :d :c, :e :c, :g :e, :f :a}
 14]

(def g22-7 {:socks [:shoes]
            :undershorts [:pants :shoes]
            :pants [:shoes :belt]
            :shoes []
            :watch []
            :shirt [:belt :tie]
            :belt [:jacket]
            :tie [:jacket]
            :jacket []})

(DFS g22-7)

;; returns
[{:tie "black",
  :jacket "black",
  :shoes "black",
  :shirt "black",
  :socks "black",
  :belt "black",
  :pants "black",
  :watch "black",
  :undershorts "black"}
 {:tie 1,
  :jacket 2,
  :shoes 5,
  :shirt 7,
  :belt 8,
  :socks 11,
  :pants 13,
  :watch 15,
  :undershorts 17}
 {:jacket 3,
  :tie 4,
  :shoes 6,
  :belt 9,
  :shirt 10,
  :socks 12,
  :pants 14,
  :watch 16,
  :undershorts 18}
 {:jacket :tie, :belt :shirt}
 18]
```

An example of using the output of DFS to generate a topological sort.

```clj



(defn topo [G]
  (let [[_ _ f] (DFS G)]
    (reverse (sort-by (fn [[_ v]] v) f))))

(topo g22-7)

;; returns
([:undershorts 18]
 [:watch 16]
 [:pants 14]
 [:socks 12]
 [:shirt 10]
 [:belt 9]
 [:shoes 6]
 [:tie 4]
 [:jacket 3])
```

