function DropDownItem(props) {
  const { goToMenu, set, leftIcon, rightIcon } = props
  return (
    <a className="menu-item" onClick={() => goToMenu && set(goToMenu)}>
      <span className="icon-button">{leftIcon}</span>
      {props.children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  )
}

export default DropDownItem
