"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // "use client" ile kullanmazsak hata verir.

  return (
    <Button onClick={() => setCount(count + 1)} variant="contained">
      {count}
    </Button>
  );
}
