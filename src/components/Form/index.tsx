import React from "react";
import { Form as AntForm, FormInstance, FormProps as AntFormProps } from "antd";

interface FormProps extends AntFormProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  form?: FormInstance;
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  children,
  form,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`md:w-[400px] min-w-[300px] w-full p-[16px] rounded-[4px]  ${className}`}
    >
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && <h1 className={`text-2xl font-bold mb-2`}>{title}</h1>}
          {subtitle && <p className={`text-sm`}>{subtitle}</p>}
        </div>
      )}
      <AntForm form={form} autoComplete="off" layout="vertical" {...props}>
        {children}
      </AntForm>
    </div>
  );
};

export default Form;
