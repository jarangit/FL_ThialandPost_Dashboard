import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Selector from '../../../components/seletors/selector';
import SwitchInput from '../../../components/inputs/switchInput';

type Props = {
  onSave: any;
  dataForm: any;
  setDataForm: any;
}
const optionsTypeProducts = [
  {
    label: `01-แสตมป์ที่ระลึก`,
    value: `01-แสตมป์ที่ระลึก`
  },
  {
    label: `04-แผ่นแสตมป์ที่ระลึก`,
    value: `04-แผ่นแสตมป์ที่ระลึก`
  },
  {
    label: `05-ซองวันแรกจำหน่าย`,
    value: `05-ซองวันแรกจำหน่าย`
  },
]
const optionsSpecial = [
  {
    label: `VIP`,
    value: `VIP`
  },
  {
    label: `NORMAL`,
    value: `NORMAL`
  },
  {
    label: `GOLD`,
    value: `GOLD`
  },
]
const FormCreate = ({ onSave, setDataForm, dataForm }: Props) => {
  const [status, setStatus] = useState(false)
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const styled = {
    input: `
    border-[1px] border-gray-light p-2 rounded-md drop-shadow-sm w-full mt-1 placeholder:text-gray
    `
  }
  const onChangeDataForm = (e: any) => {
    if (e) {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value,
        status: status,
      })
    }
  }
  useEffect(() => {
    setValue("VIP", "hi")
  }, [status])

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onChange={(e) => onChangeDataForm(e)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className='grid  grid-cols-1 gap-6 p-0 pt-6 lg:p-20 order-1 lg:order-2'>
        <div>
          <div>ประเภทสินค้า</div>
          <Selector name={"typeProduct"} onChangeDataForm={onChangeDataForm} options={optionsTypeProducts} />
        </div>
        <div>
          <div>คำสั่งพิเศษ</div>
          <Selector name={"VIP"} onChangeDataForm={onChangeDataForm} options={optionsSpecial} />
        </div>
        <div>
          <div>หมายเหตุ</div>
          <textarea defaultValue="" {...register("note")} className={`${styled.input}`} rows={4} />
        </div>
        <div className='flex gap-3 items-center'>
          <div>สถานะ</div>
          <SwitchInput name={"status"} onChangeDataForm={setStatus} />
        </div>
      </div>
    </form>
  );
}

export default FormCreate