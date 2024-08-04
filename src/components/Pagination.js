import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PaginationContainer = styled.div`
  width: fit-content;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 20px;
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  vertical-align: middle;
  line-height: 5px;
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .pagination li {
    margin: 0 5px;
    cursor: pointer;
  }

  .pagination li a {
    padding: 8px 16px;
    border: 1px solid #ddd;
    color: #007bff;
    text-decoration: none;
  }

  .pagination li a:hover {
    background-color: #ddd;
  }

  .pagination .active a {
    background-color: #007bff;
    color: white;
    border: 1px solid #007bff;
  }

  .pagination .disabled a {
    color: #6c757d;
    cursor: not-allowed;
  }
`;

export const Pagination = ({ pageCount }) => {
  const navigate = useNavigate();

  const handlePageChange = (event) => {
    const newPage = event.selected + 1;
    navigate(`/columns?page=${newPage}`);
  };
  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={"הקודם"}
        nextLabel={"הבא"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        disabledClassName={"disabled"}
      />
    </PaginationContainer>
  );
};
