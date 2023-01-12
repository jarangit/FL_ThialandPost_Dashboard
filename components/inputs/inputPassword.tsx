import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function InputPassword() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt: any) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = (e: any) => {
    e.preventDefault()

    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  return (
    <div className="relative">
      <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className='border rounded-lg p-2 border-gray-light w-full' />
      <div className="absolute top-3 right-3">
        <button className="" onClick={(e) => togglePassword(e)}>
          {passwordType === "password" ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
        </button>
      </div>
    </div>

  )
}
export default InputPassword;