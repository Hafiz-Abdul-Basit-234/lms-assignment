import "./Pagination.css";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export default function Pagination({
  page,
  setPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className="pagination">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        ← Prev
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>

    </div>
  );
}