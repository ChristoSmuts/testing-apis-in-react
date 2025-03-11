import { useEffect, useState } from 'react'

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

export default App
