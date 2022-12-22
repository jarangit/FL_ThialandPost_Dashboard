/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from 'react'
import InputSearch from '../../components/inputs/inputSearch'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'
import Input from '../../components/inputs/input'
import FormMenage from './components/formMenage'
import SavedModal from '../../components/modal/savedModal'
import ConfirmDeleteModal from '../../components/modal/confirmDeleteModal'

type Props = {}

const menageNamePage = (props: Props) => {
  const [mode, setMode] = useState("DEFAULT")
  const [showModalSaved, setShowModalSaved] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  console.log(mode)

  const onChangeMode = (currentMode: string) => {
    if (currentMode) {
      setMode(currentMode)
    }
  }

  return (
    <div>
      <div className='flex items-center justify-between w-full border-b-2 border-gray-light pb-3'>
        <div className=' pb-3 text-xl'>
          {mode == "DEFAULT" && "จัดการคำนำหน้าชื่อ"}
          {mode == "CREATE" && "เพิ่มคำนำหน้าชื่อ"}
          {mode == "UPDATE" && "แก้ไขคำนำหน้าชื่อ"}
        </div>
        <div>
          <InputSearch placeholder='Search candidates' />
        </div>
      </div>

      <CardWhite>
        <div className={`min-h-[200px]`}>
          {/* table */}
          {mode == "DEFAULT" && (
            <Table onChangeMode={onChangeMode} setShowModalDelete ={() => setShowModalDelete(true)}/>
          )}

          {/* create name */}
          {mode == "CREATE" && (
            <FormMenage onChangeMode={onChangeMode} setShowModalSaved={() => setShowModalSaved(true)} />
          )}

          {/* update name */}
          {mode == "UPDATE" && (
            <FormMenage onChangeMode={onChangeMode} mode={mode} setShowModalSaved={() => setShowModalSaved(true)} />
          )}
        </div>
      </CardWhite>

      {/* modal zone */}
      <SavedModal handleClose={() => setShowModalSaved(false)} open={showModalSaved} />
      <ConfirmDeleteModal handleClose={() => setShowModalDelete(false)} open={showModalDelete} />
    </div>
  )
}

export default menageNamePage