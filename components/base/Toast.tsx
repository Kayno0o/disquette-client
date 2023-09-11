import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ToastColor } from '../../types/toast'
import type { ToastType } from '../../types/toast'

interface ToastProps {
  message: string
  open: boolean
  removeToast: () => void
  type: ToastType
}

function Toast(props: ToastProps) {
  return (
    <>
      <div
        className={twMerge(
          'relative flex w-fit gap-2 rounded-md border-l-8 bg-white py-3 pl-3 pr-10',
          ToastColor[props.type].border,
          props.open ? 'animate-toast-fade-in' : 'animate-toast-fade-out',
        )}
      >
        <FontAwesomeIcon
          icon={ToastColor[props.type].icon}
          className={twMerge('h-6 w-6', ToastColor[props.type].text)}
        />
        {props.message}
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-zinc-500"
          onClick={props.removeToast}
        />
      </div>
    </>
  )
}

export default Toast
