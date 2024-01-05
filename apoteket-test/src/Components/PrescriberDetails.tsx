import { Prescriber } from "../Types/types";

interface PrescriberDetailsProps {
  prescriber: Prescriber;
}

const PrescriberDetails = ({ prescriber }: PrescriberDetailsProps) => {
  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h2>Prescriber Details</h2>
      {/* Render prescriber details using Object.entries */}
      {Object.entries(prescriber)?.map(([key, value]) => (
        <p key={key}>
          <strong>{capitalizeFirstLetter(key)}:</strong>
          {value ? value : `Prescriber ${key} not available`}
        </p>
      ))}
    </div>
  );
};

export default PrescriberDetails;
