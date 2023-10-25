import { styled } from '@lebernardo/react'

export const DropdownContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
  textAlign: 'left',
})

export const ButtonDropdown = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  width: '100%',
  borderRadius: '9999px',
  padding: 0,
  margin: 0,

  '&:hover': {
    background: '$gray800',
    color: '$gray500',
  },

  svg: {
    width: '1.15rem',
    height: '1.15rem',
    color: '$white',
    fontSize: '$md',
  },
})

export const ListContainer = styled('div', {
  position: 'absolute',
  borderRadius: '0.375rem',
  visibility: 'hidden',
})

export const LinksContainer = styled('div', {
  background: '$gray900',
  transformOrigin: 'top right',
  left: 0,
  borderRadius: '0.375rem',
  filter:
    'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
  width: '14rem',
  overflow: 'hidden',

  div: {
    padding: '0.25rem 0',
  },

  a: {
    color: '$gray200',
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    padding: '.5rem 1rem',
    fontSize: '$sm',

    '&:hover': {
      color: '$white',
      background: '$base700',
    },
  },
})
