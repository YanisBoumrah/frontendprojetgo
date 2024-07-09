"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const ProblemDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProblem = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/problems/${id}/`
          );
          setProblem(response.data);
        } catch (error) {
          console.error("There was an error fetching the problem!", error);
        }
      };
      fetchProblem();
    }
  }, [id]);

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto my-10 p-5 border rounded">
      <h2 className="text-2xl font-bold mb-5">{problem.title}</h2>
      <p>{problem.description}</p>
      <h3 className="text-xl font-bold mt-5">Solution</h3>
      <p>{problem.winning_move}</p>
    </div>
  );
};

export default ProblemDetail;
