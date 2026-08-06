"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Clapperboard,
  Megaphone,
  CalendarCheck,
  BarChart3,
  Settings
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Cinema AI",
    icon: Clapperboard,
    href: "/cinema",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    href: "/marketing",
  },
  {
    title: "Booking",
    icon: CalendarCheck,
    href: "/booking",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          StudioOS
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Powered by MangoOps
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-cyan-500 hover:text-white transition"
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}