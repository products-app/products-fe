import { styled } from '@lebernardo/react'

export default {
  sidebar:
    'fixed top-0 right-0 h-screen w-96 overflow-y-auto z-[9000] px-8 pt-12 bg-gray900 block transition ease-in-out duration-[1000ms] h-full max-h-full overflow-hidden box-border',
  sidebarOpen: 'translate-x-0',
  sidebarClose: 'translate-x-full',
}

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
  transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '1000ms',
  maxHeight: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
})

export const ButtonClose = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  paddingTop: '2.5rem',
  paddingRight: '2.5rem',
  zIndex: 9999,
  cursor: 'pointer',

  svg: {
    color: '$white',
    fontSize: '$lg',
  }
});