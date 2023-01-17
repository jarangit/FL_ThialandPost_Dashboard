import React from 'react'

type Props = {
  text: string;
  onShow: any;
}

const ErrorLabel = ({ text, onShow }: Props) => {
  return (
    <>
      {onShow && (
        <div className='p-3 bg-pink  text-red rounded-sm  text-sm'>
          <div><span className='font-bold'>โปรดทราบ</span> : {text}</div>
        </div>
      )}
    </>
  )
}

export default ErrorLabel