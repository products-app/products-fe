import { styled, Button, Text, Card } from '@lebernardo/react'

export const ContainerImg = styled('div', {
  background: '$gray600',
  borderRadius: '0.5rem',
  width: '9rem',
  height: '3rem',
  overflow: 'hidden',

  img: {
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
    aspectRatio: '1/1',
  }
})

export const ContainerText = styled('figure', {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
})

export const TextQuantity = styled(Text, {
  color: '$gray400',
})

export const ContainerControls = styled('div', {
  textAlign: 'right',
})

export const TextPrice = styled(Text, {
  color: '$base300',
  fontWeight: 'bold',
})

export const ContainerQuantityControl = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  marginTop: '0.5rem',
})

export const ButtonQuantityMinus = styled('button', {
  background: '$gray700',
  padding: '0.25rem',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    color: '$white',
    fontSize: '$xs',
  }
})

export const ButtonQuantityPlus = styled('button', {
  background: '$gray800',
  padding: '0.25rem',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    color: '$white',
    fontSize: '$xs',
  }
})

export const ButtonRemoveProduct = styled('button', {
  padding: '0.5rem',

  '&:hover': {
    background: '$gray800',
    borderRadius: '9999px',
  },

  svg: {
    color: '$gray200',

    '&:hover': {
      color: '$white',
    },
  }
})

