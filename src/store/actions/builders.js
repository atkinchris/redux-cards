import shortid from 'shortid'

import { addCard } from './index'

const buildCard = data => addCard({
  id: shortid.generate(),
  ...data,
})

export const addCreature = () => buildCard({
  type: 'creature',
  health: 3,
  attack: 1,
})

export const addItem = () => buildCard({ type: 'item' })
