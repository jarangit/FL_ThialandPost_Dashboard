import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { ImBin2 } from 'react-icons/im'
import { useRowSelect, useTable } from 'react-table'
import Button from '../../../components/buttons/button'
import { mockDataProductDayOneTable } from '../../../constants/mockDataProductDayOneTable'
type Props = {
  onChangeMode: any;
  setShowModalDelete: any;
  dataTable: any;
  setActionID: any;
  onDeleteTitleName: any;
  currentPage: any;
}

const TableProduct = ({ onChangeMode, setShowModalDelete, dataTable, setActionID, onDeleteTitleName, currentPage }: Props) => {
  // state zone
  const [data, setData] = useState([])
  const [id, setTd] = useState()
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
    const res:any = await mockDataProductDayOneTable?.map((item: any, key: any) => {
      return {
        id:item.id,
        round:item.round,
        slug:item.slug,
        productName:item.productName,
        qty:item.qty,
        totalPrice:item.totalPrice,
      }
    })
    if (res) {
      setData(res)
    }
  }

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'รอบ',
        accessor: 'round', // accessor is the "key" in the data
      },
      {
        Header: 'รหัสสินค้า ',
        accessor: 'slug',
      },
      {
        Header: 'ชื่อสินค้า  ',
        accessor: 'productName',
      },
      {
        Header: 'จำนวนสินค้า  ',
        accessor: 'qty',
      },
      {
        Header: 'จำนวนเงิน    ',
        accessor: 'totalPrice',
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
          <label className="container bottom-2 left-2">
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
      setTd(id)
    }
  }
  useEffect(() => {
    mapDataTable()
  }, [dataTable,])

  return (
    <>
      <div className='overflow-hidden text-sm border-x border-gray-light overflow-x-scroll lg:overflow-auto border-b'>
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
      {!data.length ? (
        <div className='w-full text-red flex justify-center p-3'>ไม่พบข้อมูล</div>
      ) : ""}
    </>
  )
}

export default TableProduct
