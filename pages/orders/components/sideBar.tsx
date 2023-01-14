/* eslint-disable react/no-children-prop */
import React from 'react'
import MenuItem from './menuItem'

type Props = {}

const mockData = [
  {
    text: 'หมวดหมู่สินค้า',
    children: [
      {
        text: 'โปรโมชั่น',
        url: '',
      },
      {
        text: 'สินค้าขายดี',
        url: '',
      },
      {
        text: 'สินค้ามาใหม่',
        url: '',
      },
    ]
  },
  {
    text: 'ตราไปรษณียากรทั่วไป',
    children: [
      {
        text: 'แสตมป์พระบรมฉายาลักษณ์',
        url: '',
      },
      {
        text: 'แสตมป์ที่ระลึก',
        url: '',
      },
      {
        text: 'สมุดแสตมป์เล่มเล็ก',
        url: '',
      },
    ]
  },
  {
    text: 'ตราไปรษณียากรเพื่อการสะสม',
    children: [
      {
        text: 'แผ่นแสตมป์ที่ระลึก',
        url: '',
      },
      {
        text: 'ซองวันแรกจำหน่าย',
        url: '',
      },
      {
        text: 'บัตรภาพธรรมดา',
        url: '',
      },
    ]
  },
]
const SideBar = (props: Props) => {
  return (
    <div className='border p-3 pt-0 rounded-lg border-gray-light divide-y divide-gray-light'>
      {mockData.map((item: any, key: any) => (
        <div key={key} className='pt-3'>
          <MenuItem title = {item.text} children = {item?.children} />
        </div>
      ))}
    </div>
  )
}

export default SideBar