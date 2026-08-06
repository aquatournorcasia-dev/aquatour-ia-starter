"use client";

import { ImagePlus } from "lucide-react";
import { RefObject } from "react";

interface ImageUploaderProps {
  image: string | null;
  inputRef: RefObject<HTMLInputElement | null>;
  onOpen: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUploader({
  image,
  inputRef,
  onOpen,
  onChange,
}: ImageUploaderProps) {
  return (
    <div
      onClick={onOpen}
      className="
        h-[520px]
        rounded-3xl
        border-2
        border-dashed
        border-cyan-500
        bg-slate-900
        cursor-pointer
        overflow-hidden
        flex
        items-center
        justify-center
        hover:border-cyan-400
        transition
      "
    >
      {image ? (
        <img
          src={image}
          alt="Vista previa"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="text-center">
          <ImagePlus
            size={70}
            className="mx-auto text-cyan-400"
          />

          <h2 className="mt-5 text-2xl font-bold">
            Subir Fotografía
          </h2>

          <p className="mt-2 text-slate-400">
            Haz clic para seleccionar una imagen
          </p>
        </div>
      )}

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
}