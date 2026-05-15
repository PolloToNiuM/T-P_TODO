import Link from "next/link";

const folders = [
  { href: "/today", label: "Aujourd'hui" },
  { href: "/inbox", label: "Inbox" },
  { href: "/history", label: "Historique" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white p-4 md:block">
      <Link href="/" className="block px-3 py-2 text-lg font-semibold">
        Top Do
      </Link>
      <nav className="mt-6 space-y-1">
        {folders.map((folder) => (
          <Link
            key={folder.href}
            href={folder.href}
            className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
          >
            {folder.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
