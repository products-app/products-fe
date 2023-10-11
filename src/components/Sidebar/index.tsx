import { X as CloseIcon } from 'phosphor-react'
import classNames from 'classnames'
import styles from './styles'

type SidebarProps = {
  isOpen?: boolean
  children?: React.ReactNode
  onClose: () => void
}

const Sidebar = ({ isOpen, children, onClose }: SidebarProps) => {
  const sidebarClassNames = classNames(styles.sidebar, {
    [styles.sidebarClose]: !isOpen,
    [styles.sidebarOpen]: isOpen,
  })

  return (
    <div id="sidebar" className={sidebarClassNames}>
      <button onClick={onClose} className={styles.buttonClose}>
        <CloseIcon className={styles.buttonIconClose} />
      </button>
      {children}
    </div>
  )
}

const defaultProps = {
  isOpen: false,
  children: <></>,
}

Sidebar.defaultProps = defaultProps
export default Sidebar
