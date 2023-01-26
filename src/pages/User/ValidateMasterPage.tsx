import { FC, useState } from 'react';
import { CustomInput, Layout } from '../../components';

export const ValidateMasterPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [masterPassword, setMasterPassword] = useState('');
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMasterPassword(e.target.value);
  }

  return (
    <div className="bg-[#282d34] w-[375px] h-[586px] font-inter select-none">
      <div className='flex justify-center items-center'>
        <img 
          src="logo512_white.png" 
          alt="logo"
          className='w-20 h-20'
        />
      </div>
      <div className='flex flex-col justify-center items-center text-white p-8'>
        <h1 className="text-[27.5px] font-semibold">
          Enter Master Password
        </h1>
        <CustomInput
          trailingIcon={showPassword ? 'eye' : 'eye-off'}
          onChange={handlePasswordChange}
        />
        <button 
          onClick={() => setShowPassword(!showPassword)}
          className="bg-[#43a5a1] py-2 px-7 text-base w-full rounded-full"
        > 
          Unlock ReactPass
        </button>
        <a 
          href=""
          className='text-sm text-[#43a5a1]'
        >
          Forgot Master Password?
        </a>
      </div>
    </div>
  )
}
