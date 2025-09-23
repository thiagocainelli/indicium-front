import { useState } from "react";
import { Form as AntForm, Button, Input, message } from "antd";

import { useAuth } from "../../contexts/AuthContext";
import Form from "../Form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [form] = AntForm.useForm();

  const { signInByEmail } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const email = form.getFieldValue("email");
      const password = form.getFieldValue("password");

      if (!email || !password) {
        message.error("Por favor, preencha todos os campos.");
        return;
      }

      const response = await signInByEmail(email, password);

      if (response) {
        message.success("Login realizado com sucesso!");

        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Error during login:", error);
      message.error(
        "Erro ao realizar login. Por favor, verifique suas credenciais e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleLogin}
      title="Entrar"
      subtitle="Faça login para acessar sua conta"
    >
      <AntForm.Item
        label="Nome/E-mail"
        name="email"
        rules={[
          { required: true, message: "E-mail é obrigatório" },
          { type: "email", message: "E-mail inválido" },
        ]}
      >
        <Input placeholder="Digite seu nome/E-mail" size="small" />
      </AntForm.Item>

      <AntForm.Item
        label="Senha"
        name="password"
        rules={[
          { required: true, message: "Senha é obrigatória" },
          { min: 6, message: "Senha deve ter pelo menos 6 caracteres" },
          { max: 128, message: "Senha deve ter no máximo 128 caracteres" },
        ]}
      >
        <Input type="password" placeholder="Digite sua senha" size="small" />
      </AntForm.Item>

      <div className="flex justify-end mt-6">
        <Button type="primary" htmlType="submit" loading={loading}>
          Entrar
        </Button>
      </div>

      <div className="text-center mt-6">
        <span className="text-mauve-6 dark:text-mauve-4">
          Não tem uma conta?{" "}
        </span>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
