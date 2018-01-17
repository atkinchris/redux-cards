import shortid from 'shortid'

import { addCard } from './index'

const buildCard = data => addCard({
  id: shortid.generate(),
  ...data,
})

const addCreature = () => buildCard({
  type: 'creature',
  health: 3,
  attack: 1,
  damage: 0,
})

const addItem = () => buildCard({ type: 'item' })

const buildDeck = () => (dispatch) => {
  [
    ...Array(15).fill(addCreature),
  ].forEach(fn => dispatch(fn()))
}

export {
  addCreature,
  addItem,
  buildDeck,
}
