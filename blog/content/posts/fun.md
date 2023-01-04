---
title: "Categorically Fun"
date: 2023-01-01
draft: true
author: me, of course
katex: true
markup: "mmark"
---

How would you answer if someone asked, "In essence, what is a function?" We're talking programming here. How does something like, "a compound operation that can be given a name" fit the bill? Maybe something about parameters or output or side effects or maybe how it's a subprogram, or even just a dictionary. It has always been a bit unsettling for me not to have some grounding definition of what a function is in it's essence.

I have been skimming through [Seven Sketches in Compositionality, An Invitation to Applied Category Theory](https://arxiv.org/pdf/1803.05316.pdf) and in doing so came across quite a settling definition of what a function is. From Seven Sketches:
> Let $$S$$ and $$T$$ be sets. A function from $$S$$ to $$T$$ is a subset $$F \subseteq S \times T$$ such that for all $$s \in S$$ there exists a unique $$t \in T$$ with $$(s, t) \in F$$.

But hey, I said we were talking about programming, not category theory. Let me explain... Although this definition is pulled from category theory, I think that it really gets to the heart of what a function is, and relates to programming in a direct way. A function is a set in category theory, and **a way to describe a set in programming.** We'll go over a few examples to illustrate, but first here is a bit more terminology from Seven Sketches to help us along:
> The function F is often denoted $$F : S \rightarrow T$$. From now on, we write $$F(s) = t$$ to mean $$(s, t) \in F$$.

I'll use TS flavored psudocode, with `(arg1: type, arg2: type ) => expression or function body` to represent our example functions which will refer to always as $$F$$. Let's start with something easy; a pure function that takes no arguments and always returns 1
```js
() => 1
```
Does it fit the definition? Let's define it in terms of $$F : S \rightarrow T$$; here we define $$S$$ as a set containing the empty set $$S := \{\emptyset\}$$ because our function takes no arguments (and does not close over anything) and $$T$$ as a set containing the number one $$T := \{1\}$$ because our function always returns $$1.$$ The product, $$S \times T$$, or $$\{\emptyset\} \times  \{1\}$$ is the set of pairs $$(s, t)$$, where $$s \in S$$ and $$t \in T$$. So the product here would be

|               | 1                  |
|---------------|--------------------|
| $$\emptyset$$ | $$(\emptyset, 1)$$ |


Giving us $$S \times T = \{(\emptyset, 1)\}$$ 

So what is our function $$F$$ here? From the definition, we need to find a subset of $$S \times T$$ where for all $$s \in S$$ there is a unique $$t \in T$$ with $$(s, t) \in F$$. Because we only have one item in each of $$S$$ and $$T$$ this one is easy, $$S \times T = F$$. Explicitly, this means that the product of $$S \times T$$ is the same as our function $$F$$. So, combining the theory with practice we can say that `() => 1`$$=\{(\emptyset, 1)\}$$

Let's add some parameters but keep returning $$1$$ no matter what we get
```js
(x: int) => 1
```
Defined in terms of $$F : S \rightarrow T$$ this function would look like  $$F : \{\mathbb{Z}\} \rightarrow \{1\}$$ where $$\mathbb{Z}$$ represents any integer we can pass into our function. What would the product look like here? Essentially the same as the prior function, but with one long column in which all integers map to $$1$$. Giving us 

$$F = \{(min_{\mathbb{Z}}, 1), ...,  (max_{\mathbb{Z}}, 1) \}$$

Again the product of $$S \times T = F$$, though that is not always the case as our next function will show. Here we can say `(x: int) => 1`$$= \{(min_{\mathbb{Z}}, 1), ...,  (max_{\mathbb{Z}}, 1) \}$$. Also, note that the function as written describes a set, but **the function when invoked returns an element of the described set** (even if the function does not explicitly return anything as we shall see later). So when we write `(x: int) => 1` we are describing a set, when we invoke `(9) => 1` we are retrieving an element from the set; $$(9,1) \in F$$ or more naturally, $$F(9) = 1$$.
 
Let's consider the following function that takes a letter $$x$$ and a number $$y$$ and returns a tuple with $$y$$ in the first position and $$x$$ in the second.
```js
type letters = {'a', 'b'}
type numbers = {1, 2}

(x: letters, y: numbers) => (y,x)
```

As before, let's consider this in terms of $$F : S \rightarrow T$$. Here we can exhaustively list out the sets that represent $$S$$ and $$T$$. In terms of our function they represent "what are all the combinations I can pass into my function" and "what are all the possible return values."

$$S := \{(a,1), (a,2), (b,1), (b,2) \}$$

$$T := \{(1,a), (1,b), (2,a), (2,b)\}$$

The product would look like the following with our possible arguments along the left and our possible return values along the top

{.prodTable}
|       | (1,a)        | (2,a)        | (1,b)        | (2,b)        |
|-------|--------------|--------------|--------------|--------------|
| (a,1) | (a,1), (1,a) | (a,1), (2,a) | (a,1), (1,b) | (a,1), (2,b) |
| (a,2) | (a,2), (1,a) | (a,2), (2,a) | (a,2), (1,b) | (a,2), (2,b) |
| (b,1) | (b,1), (1,a) | (b,1), (2,a) | (b,1), (1,b) | (b,1), (2,b) |
| (b,2) | (b,2), (1,a) | (b,2), (2,a) | (b,2), (1,b) | (b,2), (2,b) |

The cells that are shaded represent $$F$$ and the cells that are not shaded represent elements of $$S \times T$$ that are not present in $$F$$. Importantly here, each input maps to exactly one output thereby fulfilling the uniqueness constraint of our definition. This is our first example where $$S \times T \neq F$$. Thus (omitting the types) we can say

$$(x, y) => (y,x) = \{[(a,1), (1,a)], [(a,2), (2,a)], [(b,1), (1,b)], [(b,2), (2,b)]\}$$

So far all of our functions have only dealt with arguments they have been passed and returned values when called but what a really like about our new definition of a function is just how unifying. Consider the following

```js

let a = 0
// some other bits of code (maybe) update a ...
let b = true
// some other bits of code (maybe) update b ...
(x: int) => {
    if (x > a) b = false
}
```

This function will take one argument, but also close over two other variables and possibly has the side effect of setting external state while returning nothing. This is a much different animal from the previous three.

In the prior functions we defined the initial set $$S$$ in terms of the function's arguments and $$T$$ in terms of the return value because the domain and codomain of the function were distinct. While we can still treat them as distinct sets (they are), due to the imperative nature of the program you can think of $$S\rightarrow T$$ as really meaning $$S\rightarrow S'$$ where $$S'$$ indicates a "next-state" relation to the initial $$S$$. Thus implying that this function is going to have a side effect, and that side effect is to updated the "state" set something like an edge in a state machine graph or a possible state in a TLA+ specification.

Anyway, let's define this final function in our new way $$F:S\rightarrow T$$. So what do we need in $$S$$? There is only one argument to the function, but we rely on two other entities, let's add them to a tuple as we did with our arguments before, we have $$a$$, $$b$$, and $$x$$ which we can write as representing the type of each in a set like so 

$$S:=( \{\mathbb{Z}\}, \{\mathbb{B}\}, \{\mathbb{Z}\})$$

Notice that we do not return $$x$$, and it is not assigned anywhere outside the function and therefore will not be included in out $$T$$ in which we have $$a$$ and $$b$$

$$T:=( \{\mathbb{Z}\}, \{\mathbb{B}\})$$

While we can't write out the entire $$S\times T$$ product here (imagine the rows and columns extending out to cover all integers), we can fill out a few values and see if we can find an $$F$$ that makes sense.

{.pureTable}
|                | (0, true)      | (0, false)     | (10, true)     | (10, false)    |
|----------------|----------------|----------------|----------------|----------------
| (0, true, 1)   |                | $$\checkmark$$ |                |                
| (0, false, 1)  |                | $$\checkmark$$ |                |                
| (10, true, 1)  |                |                | $$\checkmark$$ |                
| (10, false, 1) |                |                |                | $$\checkmark$$ 


So while you would not call this a pure function in any traditional sense, when you look at its behavior in terms of finding a valid subset $$F \subseteq S \times T$$ it does in fact fit the definition. Contrast this with the following portion of a product that does not account for the closed over variables in the state space and would fail the uniqueness constraint. Here we pass in $$1$$ to our function and observe some possible differing results.

{.pureTable}
|     | (0, true) | (0, false)     | (10, true)     | (10, false)    |
|-----|-----------|----------------|----------------|----------------|
| (1) |           | $$\checkmark$$ | $$\checkmark$$ | $$\checkmark$$ |
|     |           |                |                |                |


For me at least, this is a pleasant definition for the essence of what a function is in programming. Even an impure function, as we have in this example, will have some reason to be so and once that reason is accounted for in the starting set it just behaves as any other function. So whether the function is pure or not, does or doesn't take parameters, was defined in a OO way or a functional way, it's doing something, and that something is describing a set. 

