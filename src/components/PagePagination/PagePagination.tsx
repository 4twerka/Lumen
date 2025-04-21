import { Pagination, PaginationItem } from "@mui/material";
import React from "react";

interface PagePaginationProps<T> {
  currentPage: number;
  paginatedArr: T[][];
  handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}

function PagePagination<T>({
  currentPage,
  paginatedArr,
  handleChangePage,
}: PagePaginationProps<T>) {
  return (
    <Pagination
      sx={{
        "& .MuiPagination-ul": { justifyContent: "center" },
        marginTop: "2.875rem",
      }}
      count={paginatedArr.length}
      page={currentPage}
      onChange={handleChangePage}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          sx={{
            "& .MuiSvgIcon-root": { width: "1.5rem", height: "1.5rem" },
            "&.Mui-selected": { backgroundColor: "transparent" },
            fontSize: "1.125rem",
            width: "2.5rem",
            height: "2.5rem",
            borderColor: item.page === currentPage ? "brown" : "transparent",
            borderRadius: "8px",
          }}
        />
      )}
    />
  );
};

export default PagePagination;
