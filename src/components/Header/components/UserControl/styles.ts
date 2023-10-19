import { styled } from '@lebernardo/react'

export const UserActionContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  button: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '9999px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '&:hover': {
      background: '$gray800',
    },
  },

  svg: {
    color: '$white',
    fontSize: '$lg',
  },
})

export const BadgeContainer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  borderRadius: '9999px',
  width: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$base700',

  p: {
    fontSize: '$xs',
    color: '$white',
    fontWeight: '$bold',
  },
})
