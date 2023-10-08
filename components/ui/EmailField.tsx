import { TextField } from "./TextField";

export const EmailField = (props) => {
  const { id, type, label, placeholder, ...otherProps } = props;

  return (
    <TextField
      type="email"
      id={id}
      placeholder="Email"
      label={label}
      {...otherProps}
    />
  );
};
