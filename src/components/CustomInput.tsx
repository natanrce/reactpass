import { FC, InputHTMLAttributes } from 'react';

interface ICustomInputProps {
  trailingIcon?: React.ReactNode;
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const CustomInput: FC<ICustomInputProps & InputProps> = 
  ({ trailingIcon, ...props }) => {
    return (
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="password"
          name="account-number"
          id="account-number"
          className="text-white bg-[#151922] focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          {...props}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {trailingIcon}
        </div>
      </div>
  )
}
