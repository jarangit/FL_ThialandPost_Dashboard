import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { ImBin2 } from 'react-icons/im'
import { useRowSelect, useTable } from 'react-table'
import Button from '../../../components/buttons/button'
import { Pagination } from '@mui/material'
import { padNumber } from '../../../utils/padNumber'

type Props = {
  onChangeMode: any;
  setShowModalDelete: any;
  dataTable: any;
  setActionID: any;
  onDeleteTitleName: any;
  currentPage: any;
}

const Table = ({ onChangeMode, setShowModalDelete, dataTable, setActionID, onDeleteTitleName, currentPage }: Props) => {
  // state zone
  const [data, setData] = useState([])
  const [id, setTd] = useState("")
  const [updateDateState, setUpdateDateState] = useState('-')

  const RenderIcon = useCallback(() => {
    return (
      <div className='flex gap-3  justify-center items-center text-gray'>
        <div className={`cursor-pointer`} onClick={() => onChangeMode("UPDATE")}>
          <FaPen size={20} />
        </div>
        <div className={`cursor-pointer`}>
          <ImBin2 size={20} onClick={setShowModalDelete} />
        </div>
      </div>
    )
  }, [])

  const mapDataTable = async () => {
    const res = await dataTable?.list.map((item: any, key: any) => {
      const dateUpdate = new Date(item.UpdatedDate)
      const dateCreate = new Date(item.CreatedDate)
      const updatedAt = `${item.UpdatedDate ? `${dateUpdate.getDate()}/${dateUpdate.getMonth() + 1}/${dateUpdate.getFullYear()}` : "-"}`
      const createdAt = `${item.CreatedDate ? `${dateCreate.getDate()}/${dateCreate.getMonth() + 1}/${dateCreate.getFullYear()}` : "-"}`
      return {
        id: item.titleId,
        rank: key + 1 + (currentPage * 10),
        name: item.titleName,
        date: item.UpdatedDate ? updatedAt : createdAt,
        icon: <RenderIcon />
      }
    })
    if (res) {
      setData(res)
    }
  }

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'ลำดับ',
        accessor: 'rank', // accessor is the "key" in the data
      },
      {
        Header: 'คำนำหน้าชื่อ',
        accessor: 'name',
      },
      {
        Header: 'วันที่แก้ไข',
        accessor: 'date',
      },
      {
        Header: 'จัดการ',
        accessor: 'icon',
      },
    ],
    []
  )
  // eslint-disable-next-line react/display-name
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }: any, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef: any = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return (
        <>
          <label className="container bottom-2 left-5">
            <input type="checkbox" ref={resolvedRef} {...rest} />
            <span className="checkmark"  ></span>
          </label>
        </>
      )
    }
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    selectedFlatRows,
    // @ts-ignore
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const onSetID = (row: any) => {
    const { id } = row.row.original
    if (row) {
      setActionID(id)
    }
  }
  useEffect(() => {
    mapDataTable()
  }, [dataTable,])

  return (
    <>
      <div className={`w-full flex justify-end gap-3`}>
        <Button onClick={() => onChangeMode("CREATE")}>
          เพิ่ม
        </Button>
        <Button
          disabled
        >
          ลบทั้งหมด
        </Button>
      </div>
      <div className='  my-6 overflow-hidden text-sm border-x border-gray-light overflow-x-scroll lg:overflow-auto '>
        <table {...getTableProps()} className="w-full text-center min-w-[700px] lg:min-w-full">
          <thead>
            {headerGroups.map(headerGroup => (
              // eslint-disable-next-line react/jsx-key
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, key) => {
                  const { props }: any = column.render('Cell')
                  return (
                    <React.Fragment key={key}
                    >
                      <th
                        {...column.getHeaderProps()}
                        className={`p-2 border-y border-gray-light bg-gray-light font-medium ${props.column.id == "name" ? "text-left" : ""}`}
                      >
                        {column.render('Header')}
                      </th>
                    </React.Fragment>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, key) => {
              prepareRow(row)
              return (
                // eslint-disable-next-line react/jsx-key
                <tr {...row.getRowProps()} className={`${key % 2 ? "bg-gray-supperLight" : ""} hover:bg-pink transition-all`}>
                  {row.cells.map((cell, key) => {
                    const { props }: any = cell.render('Cell')
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <td
                        onClick={() => onSetID({ row })}
                        {...cell.getCellProps()}
                        className={` p-2 font-thin py-3 ${props.column.id == "name" ? "text-left " : ""}`}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
