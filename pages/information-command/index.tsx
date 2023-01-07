import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'
import ManageLayout from './components/manageLayout'
import OverviewLayout from './components/overviewLayout'

type Props = {}

const InformationCommandPage = (props: Props) => {
  const [goToCreate, setGoToCreate] = useState(false)
  return (
    <CardWhite>
      <div>
        {goToCreate ? (
          <ManageLayout setGoToCreate={setGoToCreate}/>
        ) : (
          <OverviewLayout setGoToCreate={setGoToCreate}/>
        )}
      </div>
    </CardWhite>
  )
}

export default InformationCommandPage