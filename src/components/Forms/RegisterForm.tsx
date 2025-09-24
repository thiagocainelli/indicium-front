import { useState } from "react";
import { motion } from "framer-motion";
import {
  Form as AntForm,
  Button,
  Input,
  message,
  Typography,
  Card,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../services/auth.service";

const { Title, Text } = Typography;

interface RegisterFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

const RegisterForm = ({ onSuccess, redirectTo = "/" }: RegisterFormProps) => {
  const [form] = AntForm.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    try {
      setLoading(true);

      const name = form.getFieldValue("name");
      const email = form.getFieldValue("email");
      const password = form.getFieldValue("password");

      if (!name || !email || !password) {
        message.error("Por favor, preencha todos os campos.");
        return;
      }

      const registerData = {
        name,
        email: email.toLowerCase().trim(),
        password,
      };

      const response = await register(registerData);

      if (response) {
        message.success("Conta criada com sucesso!");

        onSuccess?.();
        navigate(redirectTo);
      }
    } catch (error) {
      console.error(error);
      message.error("Falha ao criar conta. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="themed-card shadow-xl border-0">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mb-4"
          >
            <UserAddOutlined className="text-2xl text-white" />
          </motion.div>
          <Title level={2} className="!text-2xl !font-bold !mb-2">
            Criar Conta
          </Title>
          <Text className="text-gray-600">
            Preencha as informações abaixo para criar sua conta
          </Text>
        </div>

        <AntForm
          form={form}
          onFinish={handleRegister}
          layout="vertical"
          size="large"
          className="space-y-6"
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AntForm.Item
              label="Nome Completo"
              name="name"
              rules={[{ required: true, message: "Nome é obrigatório" }]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Digite seu nome completo"
                className="h-12"
              />
            </AntForm.Item>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <AntForm.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: "E-mail é obrigatório" },
                { type: "email", message: "E-mail inválido" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Digite seu e-mail"
                className="h-12"
              />
            </AntForm.Item>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <AntForm.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: "Senha é obrigatória" },
                { min: 6, message: "Senha deve ter pelo menos 6 caracteres" },
                {
                  max: 128,
                  message: "Senha deve ter no máximo 128 caracteres",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Digite sua senha"
                className="h-12"
              />
            </AntForm.Item>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <AntForm.Item
              label="Confirmação de Senha"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Confirmação de senha é obrigatória",
                },
                {
                  min: 6,
                  message:
                    "Confirmação de senha deve ter pelo menos 6 caracteres",
                },
                {
                  max: 128,
                  message:
                    "Confirmação de senha deve ter no máximo 128 caracteres",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("As senhas não coincidem"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Digite sua senha novamente"
                className="h-12"
              />
            </AntForm.Item>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="pt-4"
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 text-lg font-semibold"
              icon={<UserAddOutlined />}
            >
              {loading ? "Criando conta..." : "Criar Conta"}
            </Button>
          </motion.div>
        </AntForm>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8 pt-6 border-t border-gray-100"
        >
          <Text className="text-gray-600">
            Já tem uma conta?{" "}
            <Link
              to="/"
              className="text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              Faça login aqui
            </Link>
          </Text>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default RegisterForm;
