const Notification = ({ message, hideNotification }) => {
  if (message === null) {
    return null
  }

  const classType = message.type === 'error' ? 'notification notification__type-error' : 'notification notification__type-info'
  hideNotification(3000)

  return (
    <div className={classType}>
      {message.text}
    </div>
  )
}

export default Notification