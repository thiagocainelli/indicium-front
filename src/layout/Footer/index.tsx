import { Layout } from "antd";

const FooterLayout = () => {
  const actualYear = new Date().getFullYear();

  return (
    <Layout.Footer className={`text-center p-[16px]`}>
      <p className="font-thin">
        {actualYear} © Todos os direitos reservados a{" "}
        <span className="font-bold">Indicium Healthcare</span>
      </p>
    </Layout.Footer>
  );
};

export default FooterLayout;
