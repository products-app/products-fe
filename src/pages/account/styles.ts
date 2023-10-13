export default {
  container: 'max-w-5xl m-auto py-8',
  containerRegister: 'max-w-3xl m-auto py-8',
  col2: 'flex gap-8',
  card: 'flex flex-col gap-8',
  inputWrapper: 'flex flex-col gap-2 w-full',
  checkboxWrapper: 'flex flex-row gap-2 items-center',
  actionsWrapper: 'flex items-center gap-4 justify-end',
}

import { styled } from '@lebernardo/react'

export const Input = styled('input', {
  background: '$gray900',
  padding: '1rem',
  marginBottom: '3rem',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  outline: 'none',

  '&:focus': {
    borderColor: '$base300',
  },
})
