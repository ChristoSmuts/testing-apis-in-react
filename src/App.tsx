import { useEffect, useState } from 'react'
import api from './axios';

// Basic interface for data object (types)
interface DataType {
  name: string;
  date: string;
}

function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {      
      try {
        const response = await api.get("/api/v3/publicholidays/2025/ZA");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Data returned from API:</h1>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        error ? (
          <p><strong>Error:</strong> {error}</p>
        ) : (
          data.map((item, index) => (
            <p key={index}>Public holiday <strong>{item.name}</strong> happens on <strong>{item.date}</strong></p>
          ))
        )
      )}
    </>
  );
}

export default App
