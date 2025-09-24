import React from "react";
import { Layout } from "antd";
import HeaderLayout from "./Header";
import FooterLayout from "./Footer";
const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className={`flex flex-1 flex-col overflow-auto min-h-screen`}>
      <HeaderLayout />

      <Layout.Content className={`flex justify-center w-full`}>
        <div className="md:p-5 p-2 md:mt-[60px] mt-[110px] max-w-[1440px] w-full">
          {children}
        </div>
      </Layout.Content>

      <FooterLayout />
    </Layout>
  );
};

export default LayoutBase;
