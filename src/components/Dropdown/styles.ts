export default {
  container: 'relative inline-block text-left',
  buttonOpen:
    'inline-flex justify-center w-full rounded-full border-none hover:bg-gray800 px-3 py-3 text-lg leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray600 active:text-white transition ease-in-out duration-150',
  list: 'origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg',
  listDisplayNone:
    'origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg hidden',
  link: 'block px-4 py-2 text-sm leading-5 text-gray200 hover:bg-gray600 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex gap-2 items-center',
}

import { styled } from '@lebernardo/react'

export const LinksContainer = styled('div', {
  background: '$gray900',
  borderRadius: '0.375rem',
})
