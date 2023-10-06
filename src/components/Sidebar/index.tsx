import { X as CloseIcon } from 'phosphor-react'
import classNames from 'classnames'

const styles = {
  sidebar:
    'fixed top-0 right-0 h-screen w-96 overflow-y-auto z-[9999] px-8 pt-12 bg-gray900 block transition ease-in-out duration-[1000ms] h-full overflow-hidden',
  sidebarOpen: 'translate-x-0',
  sidebarClose: 'translate-x-full',
  btnClose: 'absolute top-0 right-0 pt-10 pr-10',
}

type SidebarProps = {
  isOpen?: boolean
  children: React.ReactNode
  onClose: () => void
}

const Sidebar = ({ isOpen, children, onClose }: SidebarProps) => {
  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.sidebarClose]: !isOpen,
        [styles.sidebarOpen]: isOpen,
      })}
    >
      <button onClick={onClose} className={styles.btnClose}>
        <CloseIcon className="text-white text-lg" />
      </button>
      {children}
    </div>
  )
}

export default Sidebar
