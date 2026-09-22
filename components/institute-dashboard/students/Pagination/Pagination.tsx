"use client";

import "./Pagination.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  page,
  totalPages,
  setPage,
}: PaginationProps) {
  return (
    <div className="pagination">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <div className="pageNumber">
        Page {page} of {totalPages}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}