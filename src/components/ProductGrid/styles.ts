import { styled, Button, Heading } from '@lebernardo/react'

export const ProductItemContainer = styled('div', {
  background: '$gray600',
  overflow: 'hidden',
  borderRadius: '0.5rem',

  img: {
    width: '100%',
    aspectRatio: '1/1',
  },

  figcaption: {
    padding: '1rem',
  },
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gridAutoFlow: 'row',
  gap: '1rem',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonAddToCart = styled(Button, {
  width: '100%',
  marginTop: '1rem',
})

export const ProductName = styled(Heading, {
  color: '$white',
  height: '4rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})
