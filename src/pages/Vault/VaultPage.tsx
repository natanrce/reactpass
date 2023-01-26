import { FC } from "react";
import { Layout, SearchBar } from "../../components";

export const VaultPage: FC = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-white text-xl font-bold">
          ReactPass
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-3">
        <SearchBar />
        <h1 className="text-white text-xl font-semibold">
          Let’s get started
        </h1>
      </div>
    </Layout>
  );
};
