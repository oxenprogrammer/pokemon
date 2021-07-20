import PropTypes from "prop-types";
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

Paginate.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
