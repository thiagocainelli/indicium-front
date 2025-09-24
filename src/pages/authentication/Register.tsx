import { motion } from "framer-motion";
import { Typography, Space } from "antd";
import {
  HeartOutlined,
  UserAddOutlined,
  SafetyOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import LayoutBase from "../../layout";
import RegisterForm from "../../components/Forms/RegisterForm";

const { Title, Text } = Typography;

const RegisterPage = () => {
  return (
    <LayoutBase>
      <div className="min-h-screen flex items-center justify-center py-12 px-0 md:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:justify-start gap-3">
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
                    Junte-se à revolução da saúde digital
                  </Title>

                  <Space direction="vertical" size="large" className="w-full">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex md:flex-row flex-col items-center md:items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <UserAddOutlined className="text-teal-600 text-lg" />
                      </div>
                      <div className="w-full flex flex-col md:items-start md:justify-start">
                        <Text className="font-semibold text-gray-800 block">
                          Cadastro Rápido
                        </Text>
                        <Text className="text-gray-600">
                          Crie sua conta em poucos minutos e comece a usar
                          imediatamente
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
                        <BarChartOutlined className="text-blue-600 text-lg" />
                      </div>
                      <div className="w-full flex flex-col md:items-start md:justify-start">
                        <Text className="font-semibold text-gray-800 block">
                          Insights Avançados
                        </Text>
                        <Text className="text-gray-600">
                          Acesse dashboards profissionais com métricas em tempo
                          real
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
                        <SafetyOutlined className="text-teal-600 text-lg" />
                      </div>
                      <div className="w-full flex flex-col md:items-start md:justify-start">
                        <Text className="font-semibold text-gray-800 block">
                          100% Seguro
                        </Text>
                        <Text className="text-gray-600">
                          Seus dados protegidos com as melhores práticas de
                          segurança
                        </Text>
                      </div>
                    </motion.div>
                  </Space>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md">
                <RegisterForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};

export default RegisterPage;
