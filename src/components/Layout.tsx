import { FC } from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#282d34] w-[375px] h-[586px] p-4 font-inter select-none">
      {children}
    </div>
  )
}