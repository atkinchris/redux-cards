import shortid from 'shortid'

const addCard = () => ({
  type: 'add_card',
  payload: {
    id: shortid.generate(),
  },
})

export {
  addCard,
}
