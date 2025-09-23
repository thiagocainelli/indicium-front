import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 max-w-2xl mx-auto">
        <Text className={`mb-4 text-gray-100 text-4xl font-bold`}>
          Página não encontrada!
        </Text>

        <Text className={`text-lg mb-8 block text-gray-100`}>
          Desculpe, a página que você está procurando não existe ou foi movida.
          <br />
          Verifique o endereço ou navegue pelas opções abaixo.
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button
            onClick={handleGoHome}
            type="primary"
            size="large"
            icon={<HomeOutlined />}
            className="flex-1 h-12 text-base font-medium"
          >
            Ir para o Início
          </Button>
        </div>
      </div>

      <div className="absolute top-20 left-10 opacity-20">
        <img src="/images/square.png" alt="" className="w-16 h-16 rotate-45" />
      </div>

      <div className="absolute bottom-20 right-10 opacity-20">
        <img src="/images/square.png" alt="" className="w-12 h-12 -rotate-12" />
      </div>
    </main>
  );
};

export default NotFoundPage;
