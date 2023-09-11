import React from 'react'
import type { ToastType } from '../../types/toast'
import { ToastClass } from '../../types/toast'
import { randomUuid } from '../../utils/utils'
import Toast from './Toast'

interface ToastManagerProps {
  children: React.ReactNode
}

export const ToastContext = React.createContext({
  addToast: (_message: string, _type: ToastType) => {},
  removeToast: (_id: string) => {},
})

interface ToastActionType {
  id: string
  toast?: ToastClass
  type: 'add' | 'remove' | 'close'
}

function ToastManager({ children }: ToastManagerProps) {
  const [toasts, dispatch] = React.useReducer((state: { [key: string]: ToastClass } = {}, action: ToastActionType) => {
    const newState = { ...state }

    switch (action.type) {
      case 'add':
        if (!action.toast)
          return state

        return {
          ...state,
          [action.id]: action.toast,
        }
      case 'close':
        if (!state[action.id])
          return state

        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            open: false,
          },
        }
      case 'remove':
        if (!state[action.id])
          return state

        delete newState[action.id]
        return newState
      default:
        return state
    }
  }, {})

  // remove toast function
  const removeToast = (id: string) => {
    dispatch({ id, type: 'close' })

    const removeTimer = setTimeout(() => {
      dispatch({ id, type: 'remove' })
    }, 200)

    return () => clearTimeout(removeTimer)
  }

  // add toast function
  const addToast = (message: string, type: ToastType) => {
    const toast = new ToastClass(message, type)

    const id = randomUuid()

    dispatch({ id, toast, type: 'add' })
    const closeTimer = setTimeout(() => {
      removeToast(id)
    }, 5000)

    return () => clearTimeout(closeTimer)
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <div className="absolute left-4 top-4 z-50 flex flex-col-reverse gap-3">
        {Object.entries(toasts).map(([id, toast]) => (
          <Toast key={id} {...toast} removeToast={() => removeToast(id)} />
        ))}
      </div>

      {children}
    </ToastContext.Provider>
  )
}

export default ToastManager
