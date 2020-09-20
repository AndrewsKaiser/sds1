import React from "react";
import "./styles.css";

type Props = {
  totalPages?: number;
  goTopPage: Function;
  activePage: number;
};

const Pagination = ({ totalPages = 0, goTopPage, activePage }: Props) => {
  const paginationItems = Array.from(Array(totalPages).keys());

  return (
    <div className="pagination-container">
      {paginationItems.map((item) => (
        <button
          key={item}
          className={`pagination-item ${
            activePage === item ? "active" : "inactive"
          }`}
          onClick={() => goTopPage(item)}
        >
          {item + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
