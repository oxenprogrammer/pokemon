import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    padding: "1rem",
    listStyle: "none",
    backgroundColor: "#BD3736",
    color: "#ffffff",
    fontWeight: "bold",
    cursor: "pointer",
    "@media(max-width: 1024px)": {
      width: "60%",
    },
    "@media(max-width: 600px)": {
      width: "70%",
    },
  },
}));

export const Paginate = (props) => {
  const { pageCount, pageRangeDisplayed, marginPagesDisplayed, onPageChange } =
    props;
  const classes = useStyles();
  return (
    <ReactPaginate
      containerClassName={classes.root}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
    />
  );
};
