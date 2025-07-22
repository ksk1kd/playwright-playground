export const NewTabButton = () => {
  const handleClick = () => {
    const newWindow = window.open('', '_blank')
    if (newWindow) {
      newWindow.document.title = 'New Window'
      const button = newWindow.document.createElement('button')
      button.textContent = 'Click me!'
      newWindow.document.body.appendChild(button)
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>open new tab</button>
    </div>
  )
}
