import { useState } from "react";
import data from "../Data/Prescriptions.json";
import "../App.css";
import { Prescription } from "../Types/types";
import PrescriberDetails from "../Components/PrescriberDetails";
import styled from "styled-components";
import Pagination from "./Pagination";

// Function to determine the background color based on stock availability
const stockAvailabilityBackgroundColor = (prescription: Prescription) =>
  prescription.article.stockStatus === "OutOfStock" ? "#FF474D" : "#90EE90";

// Styled component for each prescription item
const PrescriptionItem = styled.div<{ prescription: Prescription }>`
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    stockAvailabilityBackgroundColor(props.prescription)};
`;

const PrescriptionsList = () => {
  const itemsPerPage = 14; // Number of items to display per page
  const [prescriptions] = useState<Prescription[]>(data);
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Function to display detailed information for a prescription
  const showDetails = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
  };

  // Function to hide detailed information
  const hideDetails = () => {
    setSelectedPrescription(null);
  };

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPrescriptions = prescriptions?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <h1>Prescriptions List</h1>

      {currentPrescriptions?.map((prescription, index) => (
        <div key={index}>
          {/* Display each prescription item */}
          <PrescriptionItem
            prescription={prescription}
            onClick={() => showDetails(prescription)}
          >
            {prescription.article.productName} - {prescription.preamble}
          </PrescriptionItem>

          {/* Display detailed information if selected */}
          {selectedPrescription === prescription && (
            <>
              <PrescriberDetails prescriber={prescription.prescriber} />
              <button style={{ marginBottom: "15px" }} onClick={hideDetails}>
                Close
              </button>
            </>
          )}
        </div>
      ))}

      <Pagination
        prescriptions={prescriptions}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PrescriptionsList;
