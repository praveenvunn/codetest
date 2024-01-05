# Prescription Management System

## Overview

This project is a Prescription Management System that allows users to view and manage prescription data. The system displays a list of prescriptions with details and provides functionality for pagination, allowing users to navigate through the prescription data.

## Key Features

- **Prescriptions List**: Display a list of prescriptions with essential details.
- **Prescriber Details**: View detailed information about the prescriber.
- **Pagination**: Navigate through the list of prescriptions using a pagination system.
- **Reusability**: Components and functions are designed for reusability and maintainability.

## Usage

1. **Installation**: Clone the repository and install dependencies using `npm install`.

2. **Run the App**: Start the application using `npm run dev`. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

## Aspects Covered

### 1. Reusability

- **PrescriptionItem Component**: Styled component for displaying prescription details, promoting reusability in the UI.

- **PrescriberDetails Component**: A reusable component to display detailed prescriber information.

- **Pagination Component**: Modular component for handling pagination, facilitating reuse across the application.

### 2. Testing

- **Unit Tests**: Implemented unit tests for Pagination component using Jest and React Testing Library.

- **Test Coverage**: Ensured comprehensive test coverage to maintain code quality and catch potential issues.

### 3. Error Handling

- **Out of Stock Highlighting**: Prescriptions out of stock are visually highlighted with a red background for better user awareness.

- **Graceful Handling**: Gracefully handle scenarios where prescription data is unavailable or empty.

## Technologies Used

- React
- TypeScript
- Styled Components
- Jest
- React Testing Library

## Folder Structure

- **src**: Source code files.
  - **Components**: Reusable React components.
  - **Data**: Prescriptions data.
  - **Styles**: Global styles and styled components.
  - **Tests**: Unit tests for component.
  - **Types**: TypeScript type definitions.
