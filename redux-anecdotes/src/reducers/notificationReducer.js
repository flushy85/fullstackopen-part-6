const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'NOTIFICATION':
      return action.message
      
    case 'CLEARED':
      return ''
    default:
      return state
  }
}


let clearNotification
export const notification = (notification, time) => {
  const msecs = time * 1000
  return async dispatch => {
    await dispatch({
      type: 'NOTIFICATION',
      message: notification,
    })
    clearNotification = setTimeout(() => {
      dispatch({
        type: 'CLEARED'
      })
    }, msecs)
  }
}

export const resetNotificationTimer = () => {
  clearTimeout(clearNotification)
}


export default notificationReducer

