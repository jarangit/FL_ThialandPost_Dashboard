import React, { useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { useLoading } from '../../hooks/useLoading'

type Props = {
  show?: boolean
}

const Loading = ({ show }: Props) => {
  const { showLoading, setShowLoading }: any = useLoading()

  useEffect(() => {

  }, [showLoading, setShowLoading])

  return (
    <>
      {showLoading ? (
        <div className={`${showLoading ? "opacity-100" : "opacity-0"} flex fixed top-0 left-0 right-0 z-50 w-full   items-center justify-center h-screen transition-all backdrop-opacity-10 backdrop-invert bg-white/50  overflow-hidden`}>
          <div className='flex flex-col gap-3 items-center'>
            <div>
              <Oval
                height={80}
                width={80}
                color="#002369"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#002369"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
            <div className='text-blue'>Loading</div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Loading