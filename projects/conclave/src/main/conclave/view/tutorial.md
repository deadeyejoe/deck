# Tutorial

## Welcome to Conclave!

!highlight layout select and generate button

This is a quick tutorial explaining the features of this Twilight Imperium 4th Edition map generator.

Select a 'Layout' and click 'Generate' to get started.

You can exit this tutorial at any time. Open it again by clicking the 'tutorial' button.

## Player Summary

! highlight player summary

The player summary shows a breakdown of each player's slice; resource, influence, tech specialties etc.

A player's **slice** is the set of tiles they can reach before any other player, hover over a player on the summary to highlight their slice on the map.

Some player slices may be highlighted in **red**. This means their slice violates one or more goals of the balancing algorithm. Hover over a player to see a summary of these problems. Feel free to ignore these.

## Overlays

Use these buttons to toggle different overlays on the map. Hover over a button to see what it shows.

## Tile Preview

Hovering over a tile on the map shows more details of it in the tile preview pane.

## Optimal Resources & Influence

The balancing is based on **optimal resource** and **optimal influence**, which models how users actually use their planets in practice.

The optimal value of a planet is the higher of its resource and influence values. The lower value is treated as zero. If the values are equal both values are halved. See below for examples.

Maximum values for resource and influence are displayed in darker colours.

|planet|Optimal Resource|Max. Resource|Max. Influence|Optimal Influence|
|Atlas |3 |3 |1 |0 |
|Loki |0 |1 |2 |2 |
|Vefut |1 |2 |2 |1 |
