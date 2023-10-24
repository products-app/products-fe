import { styled, keyframes, Text } from '@lebernardo/react'

export const LoadingContainer = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '8rem 0',
})

const spinAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const LoadingIcon = styled('div', {
  borderColor: 'rgb(209 213 219)',
  width: '2.5rem',
  height: '2.5rem',
  animation: `${spinAnimation} 1s linear infinite`,
  borderRadius: '9999px',
  borderWidth: '8px',
  borderTopColor: '$base500',
  marginBottom: '2rem',
})

export const TextContainer = styled(Text, {
  color: '$gray500',
})
