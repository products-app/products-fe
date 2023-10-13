import { styled, Heading, Text, Button } from '@lebernardo/react'

export const Container = styled('div', {
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',

  svg: {
    fontSize: '8rem',
    lineHeight: '1',
  }
})

export const HeadingContainer = styled(Heading, {
  marginTop: '1rem',

  span: {
    color: '$base300',
  }
})

export const TextContainer = styled(Text, {
  color: '$gray400',
})

export const ButtonContainer = styled(Button, {
  marginTop: '1rem',
})
