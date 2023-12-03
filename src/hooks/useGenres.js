import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, isLoading, error };
};

export default useGenres;
