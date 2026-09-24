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
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        ← Previous
      </button>

      <div className="pageNumber">
        Page {page} of {totalPages}
      </div>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next →
      </button>

    </div>
  );
}