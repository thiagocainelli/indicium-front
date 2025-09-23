import LayoutBase from "../../layout";
import RegisterForm from "../../components/Forms/RegisterForm";

const RegisterPage = () => {
  return (
    <LayoutBase>
      <div className="flex items-center justify-center flex-1">
        <RegisterForm />
      </div>
    </LayoutBase>
  );
};

export default RegisterPage;
