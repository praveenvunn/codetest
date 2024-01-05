import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Components/Pagination";
import { Prescription } from "../Types/types";
import data from "../Data/Prescriptions.json";

const mockSetCurrentPage = jest.fn();

const mockPrescriptions: Prescription[] = data;

describe("Pagination component", () => {
  it("renders pagination buttons", () => {
    render(
      <Pagination
        prescriptions={mockPrescriptions}
        setCurrentPage={mockSetCurrentPage}
        itemsPerPage={10}
        currentPage={1}
      />
    );

    const totalPages = Math.ceil(mockPrescriptions?.length / 10);

    // Expect to render buttons for each page
    for (let i = 1; i <= totalPages; i++) {
      const button = screen.getByText(i.toString());
      expect(button).toBeInTheDocument();
    }
  });

  it("calls setCurrentPage when a button is clicked", () => {
    render(
      <Pagination
        prescriptions={mockPrescriptions}
        setCurrentPage={mockSetCurrentPage}
        itemsPerPage={10}
        currentPage={1}
      />
    );

    const totalPages = Math.ceil(mockPrescriptions?.length / 10);

    // Click each button and expect setCurrentPage to be called with the correct page number
    for (let i = 1; i <= totalPages; i++) {
      const button = screen.getByText(i.toString());
      fireEvent.click(button);
      expect(mockSetCurrentPage).toHaveBeenCalledWith(i);
    }
  });

  it("does not render pagination when there are no prescriptions", () => {
    render(
      <Pagination
        prescriptions={[]}
        setCurrentPage={mockSetCurrentPage}
        itemsPerPage={10}
        currentPage={1}
      />
    );

    // Expect no buttons to be rendered
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBe(0);
  });
});
