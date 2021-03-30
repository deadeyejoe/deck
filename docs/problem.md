# What problem is this solving?

- Keeping the game moving: how long has it been your turn?
  - Prod players when turn has lasted x minutes
  - Could be varying times depending on the phase
  - How do we know who's turn it is?
- Keeping track of turns in twilight imperium, whose turn is it now?
  - Ordering changes from round to round
  - Ordering can be overridden by game effects (e.g. naalu)
  - Turn has different meanings:
    - A players turn in the action phase
      - Based on initiative
    - A players opportunity to react (e.g. to activating a strategy card)
      - Based on position relative to activator
    - A players turn to pick a strategy card
      - Based on position relative to speaker
- Limited table space, small text
  - strategy cards
  - objective cards
    - scoring?
    - secret?
  - political cards

# Implementation problems

- Who advances the state?
  - It would be better (or cooler?) for each player to be able to signal they're done.
  - This implies shared state between devices:
    - Mobile apps
    - Overview (for a computer or projector screen)
    - Backend
- Mobile Apps
  - How to develop? (react native?)
  - Keeping screen on?
- Webhooks
