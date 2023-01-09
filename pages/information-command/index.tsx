import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'
import ManageLayout from './components/manageLayout'
import OverviewLayout from './components/overviewLayout'
import FormCreateLayout from './components/formCreateLayout'
import SavedModal from '../../components/modal/savedModal'
import ConfirmDeleteModal from '../../components/modal/confirmDeleteModal'
import DetailModal from './components/detailModal'

type Props = {}

const InformationCommandPage = (props: Props) => {
  const [goToCreate, setGoToCreate] = useState("DEFAULT")
  const [showModalSaved, setShowModalSaved] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [showModalDetail, setShowModalDetail] = useState(true)

  return (
    <>
      {/* modal zone */}
      <SavedModal
        open={showModalSaved}
        handleClose={setShowModalSaved}
        onSubmit={() => setGoToCreate("DEFAULT")}
      />
      <ConfirmDeleteModal handleClose={() => setShowModalDelete(false)} open={showModalDelete} onSubmit={() => { setShowModalDelete(false) }} />
      <DetailModal handleClose={() => setShowModalDetail(false)} open={showModalDetail} />
      <CardWhite>
        <div>
          {goToCreate == "DEFAULT" && <OverviewLayout setGoToCreate={setGoToCreate} />}
          {goToCreate == "MANAGE" && <ManageLayout setGoToCreate={setGoToCreate} setShowModalDelete={setShowModalDelete} setShowModalDetail={setShowModalDetail} />}
          {goToCreate == "CREATE" && <FormCreateLayout setGoToCreate={setGoToCreate} setShowModalSaved={setShowModalSaved} />}
        </div>
      </CardWhite>
    </>
  )
}

export default InformationCommandPage