import React, { useState } from 'react'

type Props = {
  onChangeDataForm: any;
  name: string;
}

const SwitchInput = ({ onChangeDataForm, name }: Props) => {
  const [toggle, setToggle] = useState(false)
  const onChange = (e: any) => {
    setToggle(!toggle)
    onChangeDataForm(toggle)
  }
  return (
    <div className={`w-10 h-5  rounded-2xl p-1 relative transition-all cursor-pointer ${toggle ? "bg-red " : "bg-gray-light"}`} >
      <div className={`w-4 h-4 bg-white rounded-full absolute  top-[2px] transition-all cursor-pointer ${toggle ? "left-5 " : "left-1 "}`}></div>
      <input type="checkbox" className=" h-5 w-10 absolute top-0 left-0 cursor-pointer" name={name} onChange={(e) => onChange(e)} />
    </div>
  )
}

export default SwitchInput