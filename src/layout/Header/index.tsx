import { motion } from "framer-motion";
import { Button, Typography } from "antd";
import { LogoutOutlined, UserOutlined, HeartOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts/AuthContext";

const { Text } = Typography;

const HeaderLayout = () => {
  const { user, signOutData } = useAuth();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="header-gradient fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-2 gap-3 md:flex-row flex-col">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg">
              <HeartOutlined className="text-xl text-teal-600" />
            </div>
            <div>
              <Text className="text-xl font-bold text-white">
                Indicium Healthcare
              </Text>
              <div className="text-xs text-white/80 font-medium">
                Monitoramento de Saúde
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            {user && (
              <>
                <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <UserOutlined className="text-white" />
                  <Text className="text-white font-medium">
                    {user.name || user.email}
                  </Text>
                </div>
                <Button
                  type="text"
                  icon={<LogoutOutlined />}
                  onClick={() => signOutData()}
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50"
                  ghost
                >
                  Sair
                </Button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderLayout;
