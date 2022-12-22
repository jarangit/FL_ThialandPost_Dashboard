import React from 'react'

type Props = {
  totalItem: number;
  currentPage: number;
  onChangePage:any;
}

const Pagination = ({totalItem, currentPage, onChangePage}: Props) => {
  return (
    <div>Pagination</div>
  )
}

export default Pagination