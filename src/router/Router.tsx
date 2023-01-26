import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ValidateMasterPage, VaultPage } from "../pages";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to='validate-master-password' />} />
      
      <Route path="validate-master-password" element={<ValidateMasterPage />} />
      <Route path="vault/*" element={<VaultPage />} />
    </Routes>
  )
}
