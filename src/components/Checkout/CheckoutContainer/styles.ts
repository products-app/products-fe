import { styled, Heading, Text, Button } from '@lebernardo/react'

export const HeadingContainer = styled(Heading, {
  color: '$gray900',
})

export const OrderText = styled(Text, {
  color: '$gray600',
  paddingBottom: '1rem',
  marginBottom: '1rem',
  borderBottom: '1px solid $gray400',
})

export const OrderButton = styled(Button, {
  background: '$base500',
  padding: '0.5rem',
  marginTop: '2rem',
  width: '100%',
})
