// TO DO: refactor icon, must be string and svg needs async load
import { SignOut, Package } from 'phosphor-react'

export const userMenuOptions: app.DropdownItem[] = [
  {
    label: 'Meus pedidos',
    link: '/user/orders',
    icon: <Package className="text-gray200 text-lg" />,
  },
  {
    label: 'Fazer logout',
    link: '/account/logout',
    icon: <SignOut className="text-gray200 text-lg" />,
  },
]
