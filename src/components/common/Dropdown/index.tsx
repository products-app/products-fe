import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { UserCircle } from 'phosphor-react'
import {
  DropdownContainer,
  ButtonDropdown,
  ListContainer,
  LinksContainer,
} from './styles'

type DropdownProps = {
  items: app.DropdownItem[]
}

const Dropdown = ({ items }: DropdownProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(false)

  const handleDisplay = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as HTMLElement)
      ) {
        setDisplay(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <DropdownContainer ref={wrapperRef}>
      <ButtonDropdown onClick={handleDisplay}>
        <UserCircle />
      </ButtonDropdown>
      <ListContainer
        className={classNames({
          show: display,
        })}
      >
        <LinksContainer>
          {items.map((item) => (
            <a key={item.label} href={item.link}>
              {item.icon && item.icon} {item.label}
            </a>
          ))}
        </LinksContainer>
      </ListContainer>
    </DropdownContainer>
  )
}

const defaultProps = {
  items: [],
}

Dropdown.defaultProps = defaultProps
export default Dropdown
