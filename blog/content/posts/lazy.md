---
title: "Lazy"
date: 2020-07-03T18:42:59-04:00
draft: true
author: me, of course
katex: true
markup: "mmark"
# menu: "main"
---
# (Work In Progress)

Most sequence functions in Clojure, such as `map`, `range`, `filter` and others, return lazy sequences. This can be used to write methods that take advantage of lazy sequences where you would normally reach for loops in other languages. 

A simple example (and way to construct lazy seqs) is the Clojure function `iterate`. It takes a function and an initial value and will apply that function to the value, and each subsequent value produced, to generate "infinitely" many values for that sequence.

```clj
;; or else the repl will try to realize the entire seq
(set! *print-length* 10) 

(iterate inc 1)

;; returns
(1 2 3 4 5 6 7 8 9 10 ...)



(defn incr [p a]
  (lazy-seq (cons (+ p a) (incr (+ p a) a))))
  
(incr 0 10)

;; returns
(10 20 30 40 50 60 70 80 90 100 ...)
```

example other programming challenge

