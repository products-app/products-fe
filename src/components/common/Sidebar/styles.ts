import { styled } from '@lebernardo/react'

export const SidebarContainer = styled('section', {
  background: '$gray900',
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',
  width: '24rem',
  overflowY: 'auto',
  zIndex: 9000,
  paddingLeft: '3rem 2rem 0',
  display: 'block',
  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '1000ms',
  maxHeight: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
})

export const ButtonClose = styled('button', {
  position: 'absolute',
  top: 0,
  right: 0,
  paddingTop: '2.5rem',
  paddingRight: '2.5rem',
  zIndex: 9999,
  cursor: 'pointer',
  border: 'none',

  svg: {
    color: '$white',
    fontSize: '$lg',
  },
})
