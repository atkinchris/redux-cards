const runBehaviours = (card, actions) => {
  const { id, type } = card
  const { updateCard, getPlayer, updatePlayer, moveCard } = actions
  const player = getPlayer()

  if (type === 'creature') {
    const newCardDamage = (card.damage || 0) + player.attack
    updateCard({ id, damage: newCardDamage })

    if (card.health - newCardDamage <= 0) {
      moveCard({ card, destination: 'discard' })
    } else {
      updatePlayer({
        damage: player.damage + card.attack,
      })
    }
  }

  if (type === 'potion') {
    const newDamage = player.damage - card.healing

    updatePlayer({ damage: newDamage < 0 ? 0 : newDamage })
    moveCard({ card, destination: 'discard' })
  }
}

export default runBehaviours
