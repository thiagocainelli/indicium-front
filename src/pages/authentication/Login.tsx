import { motion } from "framer-motion";
import { Typography, Space } from "antd";
import {
  HeartOutlined,
  SafetyOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import LayoutBase from "../../layout";
import LoginForm from "../../components/Forms/LoginForm";
import { useEffect } from "react";
import { parseCookies } from "nookies";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const LoginPage = () => {
  const { getUserInfos, user } = useAuth();
  const navigate = useNavigate();

  const { "auth.token.indicium": token } = parseCookies();

  useEffect(() => {
    if (
      token &&
      token !== "" &&
      token !== undefined &&
      token !== null &&
      token !== "undefined" &&
      !user
    ) {
      getUserInfos();

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  }, [token, user]);

  return (
    <LayoutBase>
      <div className="min-h-screen flex items-center justify-center py-12 px-0 md:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center flex-col md:flex-row gap-3">
                    <div className="flex items-center justify-center min-w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl shadow-xl">
                      <HeartOutlined className="text-3xl text-white" />
                    </div>
                    <div>
                      <Title
                        level={1}
                        className="!text-4xl !font-bold !mb-0 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                      >
                        Indicium Healthcare
                      </Title>
                      <Text className="text-lg text-gray-600">
                        Monitoramento Inteligente de Saúde
                      </Text>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-6"
                >
                  <Title
                    level={3}
                    className="!text-2xl !font-semibold !text-gray-800"
                  >
                    Transforme dados em insights de saúde
                  </Title>

                  <Space direction="vertical" size="large" className="w-full">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex md:flex-row flex-col items-center md:items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <BarChartOutlined className="text-teal-600 text-lg" />
                      </div>
                      <div className="w-full flex flex-col md:items-start md:justify-start">
                        <Text className="font-semibold text-gray-800 block">
                          Dashboard Inteligente
                        </Text>
                        <Text className="text-gray-600">
                          Visualize métricas de saúde em tempo real com gráficos
                          interativos
                        </Text>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="flex md:flex-row flex-col items-center md:items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <SafetyOutlined className="text-blue-600 text-lg" />
                      </div>
                      <div className="w-full flex flex-col md:items-start md:justify-start">
                        <Text className="font-semibold text-gray-800 block">
                          Dados Seguros
                        </Text>
                        <Text className="text-gray-600">
                          Proteção total dos dados com criptografia de ponta a
                          ponta
                        </Text>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="flex md:flex-row flex-col items-center md:items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <HeartOutlined className="text-teal-600 text-lg" />
                      </div>
                      <div className="w-full flex flex-col md:items-start md:justify-start">
                        <Text className="font-semibold text-gray-800 block">
                          Foco na Saúde
                        </Text>
                        <Text className="text-gray-600">
                          Ferramentas especializadas para monitoramento de SRAG
                          e doenças respiratórias
                        </Text>
                      </div>
                    </motion.div>
                  </Space>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md">
                <LoginForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};

export default LoginPage;
