import shortid from 'shortid'

import { addCard, shuffleStack } from './index'

const buildCard = data => addCard({
  id: shortid.generate(),
  ...data,
})

const addCreature = () => buildCard({
  type: 'creature',
  name: 'Creature',
  health: 3,
  attack: 1,
  damage: 0,
})

const addPotion = () => buildCard({
  type: 'potion',
  name: 'Potion',
  healing: 3,
})

const buildDeck = () => (dispatch) => {
  [
    ...Array(15).fill(addCreature),
    ...Array(5).fill(addPotion),
  ].forEach(fn => dispatch(fn()))
  dispatch(shuffleStack({ stack: 'deck' }))
}

export {
  addCreature,
  addPotion,
  buildDeck,
}
