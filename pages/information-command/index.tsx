import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'
import ManageLayout from './components/manageLayout'
import OverviewLayout from './components/overviewLayout'
import FormCreateLayout from './components/formCreateLayout'

type Props = {}

const InformationCommandPage = (props: Props) => {
  const [goToCreate, setGoToCreate] = useState("DEFAULT")
  return (
    <CardWhite>
      <div>
        {goToCreate == "DEFAULT" && <OverviewLayout setGoToCreate={setGoToCreate} />}
        {goToCreate == "MANAGE" && <ManageLayout setGoToCreate={setGoToCreate} />}
        {goToCreate == "CREATE" && <FormCreateLayout setGoToCreate={setGoToCreate} />}
      </div>
    </CardWhite>
  )
}

export default InformationCommandPage