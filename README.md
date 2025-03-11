# Testing APIs with React

This template provides a minimal setup for testing API endpoints in a React project using Vite. It includes basic `fetch` functionality and environment variable support for configuring the API URL.

## Features

- React setup with Vite
- Fetch API for making API requests
- `.env` file support for managing API URLs
- TypeScript interface for API response data
- Basic error handling and data display

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/react-api-testing-template.git
cd react-api-testing-template
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure API URL

Create a `.env` file in the root of your project and set your API base URL:

```
VITE_API_BASE_URL=https://your-api-url.com
```

### 4. Start the Development Server

```sh
npm run dev
```

## Code Overview

The core logic for fetching data is implemented in `App.tsx`:

```tsx
import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Basic interface for data object (types)
interface DataType {
  name: string;
  date: string;
}

function App() {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v3/publicholidays/2025/ZA`);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Data returned from API:</h1>
      {data.map((item, index) => (
        <p key={index}>Public holiday <strong>{item.name}</strong> happens on <strong>{item.date}</strong></p>
      ))}
    </>
  );
}

export default App;
```

## Customization

To use your own APIs and test it within the application, please do the following:

- Replace `API_BASE_URL` with the endpoint you want to test.
- Modify the API path in `fetchData()` as needed.
- Adjust the `DataType` interface to match the expected API response.