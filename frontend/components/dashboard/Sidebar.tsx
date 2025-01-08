'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: "�" },
  { name: "Features", href: "/dashboard/features", icon: "⚡" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
  { name: "Documentation", href: "/dashboard/docs", icon: "📚" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-foreground/10 bg-background">
      <nav className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-foreground/10 px-4">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            NextFast
          </span>
        </div>
        <div className="flex-1 space-y-1 p-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                pathname === item.href
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
} 