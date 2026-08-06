"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400 text-sm">
          Bienvenido a StudioOS
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative">
          <Bell
            className="text-slate-300"
            size={24}
          />

          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400"></span>
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-2">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Buscar..."
            className="bg-transparent outline-none text-sm text-white placeholder:text-slate-500"
          />

        </div>

        <UserCircle2
          size={38}
          className="text-cyan-400"
        />

      </div>

    </header>
  );
}