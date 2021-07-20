import { TextField } from "@material-ui/core";

export const Search = (props) => {
  const { name, id, label, onChange, ...others } = props;
  return (
    <TextField
      variant="standard"
      name={name}
      label={label}
      id={id}
      onChange={onChange}
      {...others}
    />
  );
};
