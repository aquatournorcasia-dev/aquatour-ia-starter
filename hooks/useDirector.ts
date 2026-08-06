"use client";

import { useState } from "react";
import { Campaign } from "@/components/cinema/BriefForm";
import { DirectorResponse } from "@/types/director";

export function useDirector() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DirectorResponse | null>(null);

  async function generate(
    campaign: Campaign,
    image: string | null
  ) {
    setLoading(true);

    try {
      const response = await fetch("/api/director", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...campaign,
          image,
        }),
      });

      if (!response.ok) {
        throw new Error("No fue posible generar el proyecto.");
      }

      const api = await response.json();

      if (!api.success) {
        throw new Error(api.message);
      }

      setResult(api.project);
    } catch (error) {
      console.error(error);
      alert("No fue posible conectar con Director IA.");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    result,
    generate,
  };
}