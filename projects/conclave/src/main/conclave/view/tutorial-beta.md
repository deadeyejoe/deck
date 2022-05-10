# Conclave Map Generator

Select a 'Layout' and click 'Generate' to get started.

## Player Summary

The player summary shows a breakdown of each player's slice; resource, influence, tech specialties etc.

A player's **slice** is the set of tiles they can reach before any other player, hover over a player on the summary to highlight their slice on the map.

Some player rows may be highlighted in **red**. This means their slice violates one or more goals of the balancing algorithm. Hover over a row to see a summary of these problems (if any). The goals are:

- Optimal resources at least 2.5, optimal influence at least 4
- Total of optimal resource and influence between 9 and 13
- No more than two distinct tech specialties

## Optimal Resources & Influence

The balancing is based on **optimal resource** and **optimal influence**, which models how players use their planets in practice. It assumes that players will exhaust planets for their highest value.

The _optimal resource_ value of a planet depends on how its resource value compares to its influence value:

- if the resource value is _greater_ it is the resource value
- if the resource value is _less_ it is zero
- if the values are equal it is resource value / 2
  And vice-versa for optimal influence. Feel free to play with the numbers here to get a feel for it:

[]

When considering a player's slice: the total optimal resource value can be thought of as 'how many resources can be generated efficiently', while the total resource value is 'how many resources can be generated if I don't care about influence'.

These values are displayed colour coded, with optimal values being brighter colours.
