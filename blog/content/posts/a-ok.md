---
title: "AoK"
date: 2025-12-19
draft: false
author: me, of course
katex: true
markup: "mmark"
summary: "Helping the Advent of Code Elves with kdb"
---
<style>
	pre {
	    background-color:aliceblue;
	}
</style>

It's the end of the year and not to let *another* year go by without writing anything, here is a little write up of the first Advent of Code problem this year done in kdb. These types of bite sized data processing problems tend to be well suited for kdb and quite a bit of fun. You can find the full AoC description [here](https://adventofcode.com/2025/day/1) but the gist of the first part is that you have a safe with a dial and a list of rotations, the number you are looking for is "the number of times the dial is left pointing at 0 after any rotation in the sequence." The dial starts off pointing at 50, the list of rotations looks like this:
```
R32
R2
R4
R1
L28
L35
...
```
After reading the input file in and defining a parsing function that turns the text rotations into positive or negative numbers:

```
q)t:read0`$":aoc-day-1.txt"
q)prs:{((-1;1)"R"=f)*"J"$x except f:first x}
```
The solution just is simply just counting up whenever the starting number plus the rotation modulo 100 is equal to 0. We can find this by scanning `\` over the parsed list and using the atomic equality check for when the result is 0. The answer to the first part of the day 1 question is 1074.    
```kdb
q)sum 0=50{(x+y)mod 100}\prs each t
1074
```
Broken down the expression evolves like this
```
q)prs each t
32 2 4 1 -28 -35 ...

q)50{(x+y)mod 100}\prs each t
82 84 88 89 61 26 ... 
```
It takes 50 rotations before we finally land on 0 for the first time, then we hit it again in 2 more rotations etc. 
```
q)0=50{(x+y)mod 100}\prs each t
00000000000000000000000000000000000000000000000001010010001...
```
We can see all the times we land on 0 by asking for the index where the equality occurs, but to get the answer we just need the sum. 
```
q)where 0=50{(x+y)mod 100}\prs each t
49 51 54 58 60 66 68 71 73 80 83 85 91 ...
```

The second part of the question indicates that "you're actually supposed to count the number of times any click causes the dial to point at 0, regardless of whether it happens during a rotation or at the end of one." This adds a few wrinkles to just modding over the summed list. For our purposes there are 3 ways that we need to account for. The first we already did in the prior step, checking if the value after rotation is 0 i.e. `(x+y)mod 100`. The next easiest one to check is revolutions. If during the rotation you do a full revolution or more, you know you must have passed through 0. Integer `div`ision will tell us how many revolutions we have done during the turn. The final and most nuanced check is if we pass through 0 at any point taking into account that we may or may not have already did so in a revolution. So if our starting value was 99 and we perform  R2 or R102 we need to record the values 1 and 2 respectively to account for the number of times we hit 0 in the process. The same goes for if we started at 1 and performed L2 or L102. Starting at 50 and performing R150 or L150 should record 2 total as after the revolution we rotate 50 more to land on 0. We can build up a table to get a feel for how this looks.

Let's first define a function that will run through the list of inputs and calculate each of the conditions we are interested in; the next value, how many revolutions, and if we have crossed 0 on the dial at any point during the rotation.  

```
calc:{
 nxt:(y+prv:first x)mod 100;
 sny:signum y;ay:abs y;
 (nxt; ay div 100;prv&nxt<>prv+sny*ay mod 100)}
```
We can see what this looks like by creating a table to inspect the results, it evolves like so.
```
q)(enlist 50)calc\prs each t
82 0 0
84 0 0
88 0 0
89 0 0

q)flip (enlist 50)calc\prs each t
82 84 88 89 61 26 42 85 61 85 20 11 64 57 36 28 3  86 65 20 44 69 89 37 ..
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  ..
0  0  0  0  0  0  0  0  0  0  1  0  1  0  0  0  0  1  0  0  0  0  0  1  ..

q)`nxt`revolutions`flippy!flip (enlist 50)calc\prs each t
nxt        | 82 84 88 89 61 26 42 85 61 85 20 11 64 57 36 28 3  86 65 20 ..
revolutions| 0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  ..
flippy     | 0  0  0  0  0  0  0  0  0  0  1  0  1  0  0  0  0  1  0  0  ..
q)

q)show turns:flip `nxt`rev`flippy!flip (enlist 50)calc\prs each t
nxt rev flippy
--------------
82  0   0
84  0   0
88  0   0
89  0   0
61  0   0
```
From here it is just a matter of summing the 3 conditions we are interested in.
```
q)exec sum rev+flippy|nxt=0 from turns
6254

```
This works in our case because we never start on 0 and do exactly one revolution, if we did we would have to add a condition to check.


Of course if we can sum it line by line there is no need to actually create the table, an inline version could look like the following.
```
inline:{
 rm:(y+prv:first x)mod 100;
 sny:signum y;ay:abs y;
 r:ay div 100;                   / number of revolutions
 zar:prv&rm<>prv+sny*ay mod 100; / crossed zero, accounting for revolutions
 (rm; x[1]+r+zar|not rm)}        / prev total + revolutions + cross or land on zero
```
Running through the list and getting
```
q)last (50;0)inline/prs each t
6254
```

That's all the help I can offer the Elves for now, Happy Holidays!