---
title: "Lazy"
date: 2020-07-03T18:42:59-04:00
draft: true
author: me, of course
katex: true
markup: "mmark"
# menu: "main"
---

Most sequence functions in Clojure, such as `map`, `range`, `filter` and others, return lazy sequences. This can be used to write methods that take advantage of lazy sequences where you would normally reach for loops. The benefits typically associated with lazy sequences are
* Only calculating what you need when you need it (if ever)
* Being able to represent infinite sequences that would not fit in memory

After working with them a bit I'd add
* Seeing variables that would otherwise be trapped and mutated in a loop as a general purpose sequence can add simplicity, composability and reuse to your code 

What brought this to mind was a toy programming problem I came across recently. It went something like this
> You want to buy a car that cost `x` you can save `y` per month and you have a car that you can sell for `z` dollars. Both the new and old car depreciate at rate `r` per month. How many months till you can but the car and how much is left over?

The imperative approach is straight forward and would look something like the following (using JS here)
```js

const deprRate = 0.985;
const monthlySavings = 1000;
let newCar = 8000;
let oldCar = 2000;
let savings = 0;
let months = 0;

while (oldCar + savings < newCar) {
    oldCar *= deprRate;
    newCar *= deprRate;
    savings += monthlySavings;
    months++;
}

[months, oldCar + savings - newCar]
// [6, 520]
 
```

Fairly simple and for a toy programming problem just fine. There are, however, some interesting insights when this problem is solved using lazy sequences. Looking at the code above, there are four sequences relating to the change in value of `newCar`, `oldCar`, `savings` and `months` as they get reassigned in the while loop. Lets take the simplest one, `months`, and model it as a lazy sequence in Clojure. 

Note: if you are trying this in a repl, be sure to `(set! *print-length* 10)` else it will try to realize the whole (infinite) sequence.

```clj
(iterate inc 0)
;; (0 1 2 3 4 5 6 7 8 9 ...)
```

As we see, `(iterate inc 0)` returns the lazy sequence `0`, `(inc 0)`, `(inc (inc 0))`, `...`. Another way to look at what `iterate` does would be to define it directly in terms of the `lazy-seq` itself like so
```clj
(defn iterate2 [f x]
  (lazy-seq (cons x (iterate2 f (f x)))))
  
(iterate2 inc 0)
;; (0 1 2 3 4 5 6 7 8 9 ...)
```
This gives a good idea of what it's logically doing, but in reality `(lazy-seq ...)` will not perform actual recursion as the code may suggest. Under the covers its a macro that will re-write the recursion and just calculate the values when asked. This ends up being a good thing, you don't have to worry about blowing the stack. You can, however, still run out of memory if you accidentally hold onto all the values along the way. 

Back to our example, `months` and `savings` are basically the same in terms of operations, lets define an incrementing function that can handle either and returns a lazy sequence
```clj
(defn incr [start to-add] (iterate #(+ % to-add) start))

(incr 0 1)
;; (0 1 2 3 4 5 6 7 8 9 ...)
```

`newCar` and `oldCar` are basically the same as well, lets define a deprecating function
```clj
(defn depr [start rate] (iterate #(* % rate) start))

(map int (depr 1000 0.5))
;; (1000 500 250 125 62 31 15 7 3 1 ...)
```
Notice that `map` here is both taking and returning a lazy sequence.


So now that we have modeled our sequences, let's combine them to arrive at the solution. First let's combine the savings and the old car
```clj
(map +
     (incr 0 1000)
     (depr 2000 0.985))
     
;; note, I removed the decimals for readability
;; (2000 2970 3940 4911 5882 6854 7826 8799 9772 10745 ...)
```

Then we want to subtract the deprecating value of the new car. We can do that by adding the negated value, again using the fact that `map` can take and return lazy sequences.
```clj
(map +
     (incr 0 1000)
     (depr 2000 0.985)
     (map - (depr 8000 0.985)))
     
;; returns 
(-6000
 -4910
 -3821
 -2734
 -1648
 -563
 520
 1602
 2683
 3763
 ...)
```
We see that the seventh value is positive, meaning that the savings plus the old car are enough to buy the new (with $520 left over). Lets start taking values when they are no longer negative. We can do this by dropping values that are negative.
```clj
(->> (map +
          (incr 0 1000)
          (depr 2000 0.985)
          (map - (depr 8000 0.985)))
     (drop-while neg?))
     
;; returns
(520 1602 2683 3763 10217 ...)
```
From here there are a few ways we can deduce the month, but to keep with the spirit of the example, let's stick to composing sequences. We can stick the months and money sequences side by side in a `vector`, and use `map` to do it (thus producing a new combined sequence). We will then adjust our `drop-while` predicate to look at the money value. At the end we'll add a `first` to just grab the first item in the newly constructed sequence which is our answer.
```clj
(->> (map vector
          (incr 0 1)
          (map +
               (incr 0 1000)
               (depr 2000 0.985)
               (map - (depr 8000 0.985))))
     (drop-while #(neg? (% 1)))
     (first))
     
;; [6 520]
```

Notice that this approach has some nice characteristics. There is no reassignment or mutation, there are no loops, and we get some useful sequence generating helper functions relating to our problem domain. While this surely does not matter on a small toy problem, in a real code base it may.

Also, at least for me, seeing a loop turn into something that looks closer to processing streams is just neat. 
