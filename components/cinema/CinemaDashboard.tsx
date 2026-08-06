"use client";

import { useRef, useState } from "react";

import ImageUploader from "./ImageUploader";
import BriefForm, { Campaign } from "./BriefForm";
import DirectorPanel from "../director/DirectorPanel";

import { useDirector } from "@/hooks/useDirector";

export default function CinemaDashboard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);

  const [campaign, setCampaign] = useState<Campaign>({
    title: "",
    objective: "",
    audience: "",
    platform: "Instagram",
    style: "Cinematográfico",
    duration: "30 segundos",
  });

  const { loading, result, generate } = useDirector();

  function openExplorer() {
    inputRef.current?.click();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="grid grid-cols-3 gap-8">

      <ImageUploader
        image={image}
        inputRef={inputRef}
        onOpen={openExplorer}
        onChange={onChange}
      />

      <BriefForm
        campaign={campaign}
        loading={loading}
        onChange={setCampaign}
        onGenerate={() => generate(campaign, image)}
      />

      <DirectorPanel
        loading={loading}
        result={result}
      />

    </div>
  );
}