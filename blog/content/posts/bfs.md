---
title: "(((((((((( BFS ))))))))))"
date: 2020-05-03
draft: false
author: me, of course
---

Given a graph G = (V, E) and a distinguished vertex s, BFS explores the edges of
G to discover every vertex that is reachable from s.

It computes the distance (smallest number of edges) from s to each reachable
vertex.

It produces an breadth-first tree with root s that contains all reachable
vertices. For any vertex v reachable from s, the path in the breadth-first
tree from v to s corresponds to a shortest path from v to s in G.

BFS expands the frontier between discovered and undiscovered vertices
uniformly across the breadth of the frontier, it discovers all vertices at a
distance k from s before it discovers any vertices k+1 from s.

BFS is O(V + E).


```clj

(defn BFS [G s]
  "color, distance, parent, queue, vertex (u), adjacent vertices (av)"
  (let [[c d p q] [(merge (into {} (map (fn [[k]] [k "white"]) G)) {s "gray"}) {s 0} {s nil} [s]]]
    (loop [[c d p q][c d p q]]
      (if (empty? q) [c d p q]
          (let [u (first q)
                q (vec (rest q))]
            (recur (loop [av (u G) c c d d p p q q]
                      (let [v (first av)]
                        (if (nil? v) [(assoc c u "black") d p q]
                            (if (= (v c) "white") (recur (rest av)
                                                         (assoc c v "gray")
                                                         (assoc d v (inc (u d)))
                                                         (assoc p v u)
                                                         (conj q v))
                                (recur (rest av) c d p q)))))))))))




(def g {:a [:b :f]
        :b [:c]
        :c [:d :e]
        :d []
        :e [:g]
        :f [:g :e :a]
        :g []})


(BFS g :a)

;; returns
[{:a "black",
  :b "black",
  :c "black",
  :d "black",
  :e "black",
  :f "black",
  :g "black"}
 {:a 0, :b 1, :f 1, :c 2, :g 2, :e 2, :d 3}
 {:a nil, :b :a, :f :a, :c :b, :g :f, :e :f, :d :c}
 []]


```
