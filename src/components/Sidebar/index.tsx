import { X as CloseIcon } from 'phosphor-react'
import { useState } from 'react'
import classNames from 'classnames'

const styles = {
  sidebar:
    'fixed top-0 right-0 h-screen w-96 overflow-y-auto z-50 p-8 pt-12 bg-gray900 block transition ease-in-out delay-350 duration-[1000ms]',
  sidebarOpen: 'translate-x-0',
  sidebarClose: 'translate-x-full',
  btnClose: 'absolute top-0 right-0 pt-10 pr-10',
}

type SidebarProps = {
  isOpen?: boolean
  children: React.ReactNode
}

const Sidebar = ({ isOpen, children }: SidebarProps) => {
  const [open, setOpen] = useState(isOpen)

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.sidebarClose]: !open,
        [styles.sidebarOpen]: open,
      })}
    >
      <button onClick={handleClose} className={styles.btnClose}>
        <CloseIcon className="text-white text-lg" />
      </button>
      {children}
    </div>
  )
}

export default Sidebar
