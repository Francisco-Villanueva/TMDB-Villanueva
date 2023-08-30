import React, { useEffect, useRef, useState } from "react";

export default function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    setError(null);
  }, [search]);

  return { search, error, setSearch };
}
