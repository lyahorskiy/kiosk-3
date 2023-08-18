import { useState, useRef, useEffect } from 'react'

function BarItem({ name, menu, onBar, valueBar }) {
  const [open, setOpen] = useState(false)

  const menuRef = useRef(null)
  const itemRef = useRef(null)

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      itemRef.current &&
      !itemRef.current.contains(e.target)
    ) {
      setOpen(false)
    }
  }

  const onClickListItem = (i) => {
    onBar(i)
    setOpen(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="bar-item" onClick={() => setOpen(!open)}>
      <p ref={itemRef}>{name}</p>
      {open && (
        <div ref={menuRef}>
          <ul className="bar-item-ul">
            {menu.map((obj) => (
              <li
                onClick={() => onClickListItem(obj)}
                className={`bar-item-li ${
                  valueBar.properties === obj.name ? 'active' : ''
                }`}
                key={obj.properties}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default BarItem
