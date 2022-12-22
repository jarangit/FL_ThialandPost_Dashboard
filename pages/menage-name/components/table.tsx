import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { ImBin2 } from 'react-icons/im'
import { useRowSelect, useTable } from 'react-table'
import Button from '../../../components/buttons/button'
import { Pagination } from '@mui/material'

type Props = {
  onChangeMode: any;
  setShowModalDelete: any;
  dataTable: any;
  setActionID: any;
  onDeleteTitleName: any;
}

const Table = ({ onChangeMode, setShowModalDelete, dataTable, setActionID, onDeleteTitleName }: Props) => {
  // state zone
  const [data, setData] = useState([])
  const [id, setTd] = useState("")

  const RenderIcon = useCallback(() => {
    return (
      <div className='flex gap-3  justify-center items-center text-gray-dark'>
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
      const date = new Date(item.UpdatedDate)
      const updatedAt = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
      return {
        id: item.titleId,
        rank: key + 1,
        name: item.titleName,
        date: updatedAt,
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
  }, [dataTable])

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
      <div className='  my-6 overflow-hidden text-sm border-x border-gray-light'>
        <table {...getTableProps()} className="w-full text-center">
          <thead>
            {headerGroups.map(headerGroup => (
              // eslint-disable-next-line react/jsx-key
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, key) => (
                  <React.Fragment key={key}
                  >
                    <th
                      {...column.getHeaderProps()}
                      className={`p-2 border-y border-gray-light bg-gray-supperLight font-medium`}
                    >
                      {column.render('Header')}
                    </th>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                // eslint-disable-next-line react/jsx-key
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <td
                        onClick={() => onSetID({ row })}
                        {...cell.getCellProps()}
                        className={`border-y border-gray-light p-2`}
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
