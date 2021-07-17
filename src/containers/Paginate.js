import ReactPaginate from "react-paginate";

export const Paginate = (props) => {
  const { pageCount, pageRangeDisplayed, marginPagesDisplayed, onPageChange } =
    props;
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
    />
  );
};
