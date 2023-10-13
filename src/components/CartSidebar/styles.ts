import { styled, Button, Text, Card } from '@lebernardo/react'

export const SidebarContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  position: 'relative',
  padding: '24px',
})

export const CartContainer = styled('div', {
  height: '93%',
  position: 'relative',
  width: '100%',
})

export const ItemsText = styled(Text, {
  marginBottom: '1.25rem',
})

export const ItemsContainer = styled('div', {
  width: '100%',
  height: '90%',
  position: 'relative',
  overflowY: 'scroll'
})

export const CartControl = styled(Card, {
  position: 'fixed',
  right: 0,
  bottom: 0,
  width: '100%',
})

export const ButtonContainer = styled(Button, {
  margin: '1rem 0',
  width: '100%',
})
