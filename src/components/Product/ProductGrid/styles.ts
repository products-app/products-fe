import { styled } from '@lebernardo/react'

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gridAutoFlow: 'row',
  gap: '1rem',
})
