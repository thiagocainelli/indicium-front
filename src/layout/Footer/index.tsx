import { motion } from "framer-motion";
import { Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Text } = Typography;

const FooterLayout = () => {
  const actualYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="footer-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <HeartOutlined className="text-2xl text-teal-400" />
            <Text className="text-xl font-bold text-white">
              Indicium Healthcare
            </Text>
          </div>
          <Text className="text-gray-300 text-sm">
            Monitoramento inteligente de saúde para profissionais e gestores.
          </Text>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-gray-600 mt-8 pt-6 text-center"
        >
          <Text className="text-gray-300 text-sm">
            {actualYear} © Todos os direitos reservados a{" "}
            <span className="font-semibold text-teal-400">
              Indicium Healthcare
            </span>
          </Text>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterLayout;
