import {
  Button as AntButton,
  ButtonProps,
  Card as AntCard,
  CardProps,
  Typography,
} from "antd";

export function Button(props: ButtonProps) {
  return <AntButton {...props} />;
}

export function Card(props: CardProps) {
  return (
    <AntCard className={`themed-card ${props.className ?? ""}`} {...props} />
  );
}

export const Text = Typography.Text;
export const Title = Typography.Title;
