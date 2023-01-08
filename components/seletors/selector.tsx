import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// eslint-disable-next-line react/display-name
const Selector = ({ onChangeDataForm, name, options }: any) => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value)
    // setValue('typeProduct', 'value');
  };
  return (
    <div className='relative w-full'>
      {/* <label htmlFor={"selected"} className='absolute top-3 right-2'>
        <MdOutlineKeyboardArrowDown size={20} />
      </label> */}
      {/* <label>{label}</label> */}
      <select name={name} onChange={(e) => onChangeDataForm(e)} className={' border w-full p-2 rounded-md border-gray-light cursor-pointer minimal'}>
        {options.map((item: any, key: any) => (
          <React.Fragment key={key}>
            <option value={item.value}>{item.label}</option>
          </React.Fragment>
        ))}
      </select>

    </div>

  )
};

export default Selector