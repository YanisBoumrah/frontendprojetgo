// components/ProblemsList.tsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const ProblemsList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/problems/");
        setProblems(response.data);
      } catch (error) {
        console.error("There was an error fetching the problems!", error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-5">Problems List</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id} className="mb-5 p-5 border rounded">
            <h3 className="text-xl font-bold">{problem.title}</h3>
            <p>{problem.description}</p>
            <a href={`/problems/${problem.id}`} className="text-blue-500">
              View Solution
            </a>
          </li>
        ))}
      </ul>

    </div>   
  );
};

export default ProblemsList;
