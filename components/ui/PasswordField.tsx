import { TextField } from "./TextField";

export const PasswordField = (props) => {
  const { id, type, label, placeholder, ...otherProps } = props;

  return <TextField type="password" id={id} label={label} {...otherProps} />;
};
