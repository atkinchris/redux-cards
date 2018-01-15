import shortid from 'shortid'

import { addCard } from './index'

const buildCard = data => ({
  id: shortid.generate(),
  type: null,
  ...data,
})

export const addCreature = () => addCard(buildCard({ type: 'creature' }))
export const addItem = () => addCard(buildCard({ type: 'item' }))
