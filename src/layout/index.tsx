import React from "react";
import { Layout } from "antd";
import HeaderLayout from "./Header";
import FooterLayout from "./Footer";
const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout
      className={`flex flex-1 flex-col overflow-auto min-h-screen relative`}
    >
      <HeaderLayout />

      <Layout.Content
        className={`relative z-10 flex-1 flex mx-auto md:p-5 p-2 md:mt-[60px] mt-[110px]`}
      >
        {children}
      </Layout.Content>

      <FooterLayout />
    </Layout>
  );
};

export default LayoutBase;
