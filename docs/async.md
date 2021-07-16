# Async

## Merge

`(merge chs)`

Merges a set of channels together.

## Mix

`(mix out)`

Allows you to 'mix' a channel into `out` using `admix`. Supports togging

`(admix mix ch)`
`(unmix mix ch)`

## Mult

`(mult ch)`

Allows you to 'listen' to a channel using `tap`

`(tap mult ch)`
`(untap mult ch)`

## Pub

`(pub ch topic-fn)`

Allows you to split a channel using a topic fn and sub to topics

## Split

`(split p ch)`

Split a channel based on a predicate
