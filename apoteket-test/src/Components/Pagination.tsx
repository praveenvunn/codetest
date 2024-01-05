import { Prescription } from "../Types/types";
import styled from "styled-components";

interface PrescriptionsProps {
  prescriptions: Prescription[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  currentPage: number;
}

// Styled-component for the pagination button
const PaginationButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${(props) => (props.isActive ? "#175d30" : "#fff")};
  color: #333;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  transition: background-color 0.3s;
`;

const Pagination = ({
  prescriptions,
  setCurrentPage,
  itemsPerPage,
  currentPage,
}: PrescriptionsProps) => {
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // If there are no prescriptions, return an empty fragment
  if (prescriptions?.length < 1) {
    return <></>;
  }

  return (
    <div>
      {/* Generate pagination buttons based on the number of pages */}
      {Array.from(
        { length: Math.ceil(prescriptions?.length / itemsPerPage) },
        (_, i) => (
          <PaginationButton
            key={i + 1}
            isActive={currentPage === i + 1}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </PaginationButton>
        )
      )}
    </div>
  );
};

export default Pagination;
