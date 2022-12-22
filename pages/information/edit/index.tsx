import React, { useEffect, useState } from 'react'
import SavedModal from '../../../components/modal/savedModal'
import InformationForm from '../components/informationForm'

type Props = {}

const EditInformationPage = (props: Props) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal])

  useEffect(() => {
    setShowModal(false)
  }, [])
  
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl'>ข้อมูลส่วนตัว</div>
      <div className='bg-white rounded-lg mt-6 p-6 drop-shadow-lg'>
        <InformationForm setShowModal={setShowModal} />
      </div>

      {/* modal zone */}
      <SavedModal 
        open={showModal}
        handleClose={setShowModal}
      />
    </div>
  )
}

export default EditInformationPage