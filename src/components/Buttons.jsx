export function DDButton (children) {
  const { action, type } = children

  const ButtonActionClasses = action === 'success'
    ? 'button-success'
    : action === 'cancel'
      ? 'button-cancel'
      : 'button-default'

  return (
    <div>
      <button
        type={type} className={`button ${ButtonActionClasses}`}
      >
        {children.children}
      </button>
    </div>
  )
}

export function DDButtonCustom (children) {
  return (
    <button
      type={children.type} className={`button ${children.className || ''}`}
    >
      {children.children}
    </button>
  )
}
