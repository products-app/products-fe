import { styled, Text } from '@lebernardo/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '83.333333%',

  img: {
    width: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  }
})

export const TextContainer = styled(Text, {
  color: '$gray500',
})

