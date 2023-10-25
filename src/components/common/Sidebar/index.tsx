import { X as CloseIcon } from 'phosphor-react'
import { SidebarContainer, ButtonClose } from './styles'

type SidebarProps = {
  isOpen?: boolean
  children?: React.ReactNode
  onClose: () => void
}

const Sidebar = ({ isOpen, children, onClose }: SidebarProps) => {
  let style
  if (isOpen) {
    style = { transform: 'translateX(0px)' }
  } else {
    style = { transform: 'translateX(100%)' }
  }

  return (
    <SidebarContainer id="sidebar" style={style}>
      <ButtonClose aria-label="button-close-sidebar" onClick={onClose}>
        <CloseIcon />
      </ButtonClose>
      {children}
    </SidebarContainer>
  )
}

const defaultProps = {
  isOpen: false,
  children: <></>,
}

Sidebar.defaultProps = defaultProps
export default Sidebar
