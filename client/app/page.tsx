"use client"; // Client Component

import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the shape of the data you expect (Type Safety!)
interface ServerResponse {
  message: string;
}

export default function Home() {
  // Use the Generic <ServerResponse> to tell TS what "data" looks like
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    axios.get<ServerResponse>('http://localhost:8000/')
      .then((response) => {
        // TypeScript knows "response.data" has a ".message" property
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error connecting to server");
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Lectura AI</h1>
      <p className="mt-4 text-xl">Backend Status: {message}</p>
    </main>
  );
}