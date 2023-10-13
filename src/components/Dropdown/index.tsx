import classNames from 'classnames'
import { UserCircle } from 'phosphor-react'
import { useState } from 'react'
import styles from './styles'

type DropdownProps = {
  items: app.DropdownItem[]
}

const Dropdown = ({ items }: DropdownProps) => {
  const [display, setDisplay] = useState(false)

  const handleDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div className={styles.container} suppressHydrationWarning>
      <div suppressHydrationWarning>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={styles.buttonOpen}
            onClick={handleDisplay}
          >
            <UserCircle className="text-white text-lg" />
          </button>
        </span>
      </div>
      <div
        className={classNames(styles.list, {
          [styles.listDisplayNone]: !display,
        })} 
        suppressHydrationWarning
      >
        <div className="rounded-md bg-gray900 shadow-xs">
          <div className="py-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className={styles.link}
                onClick={item.onClick && item.onClick}
              >
                {item.icon && item.icon} {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const defaultProps = {
  items: [],
}

Dropdown.defaultProps = defaultProps
export { Dropdown }
