import { styled, Heading, Text } from '@lebernardo/react'

export const Container = styled('div', {
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '3.5rem',

  svg: {
    fontSize: '8rem',
    lineHeight: '1',
  }
})

export const HeadingContainer = styled(Heading, {
  marginTop: '1rem',
})

export const TextContainer = styled(Text, {
  color: '$gray500',
})
