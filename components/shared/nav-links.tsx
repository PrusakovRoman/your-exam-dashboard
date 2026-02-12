'use client'
import { cn } from "@/lib/utils";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname()

    const links = [{ id: 'dashboard', href: "/dashboard", label: "Статистика" }, { id: 'homework', href: "/dashboard/homework", label: "Домашка" }]

    return (<div className="flex ">
        {links.map(link => {
            return (
                <Link
                    key={link.id}
                    href={link.href}
                    className={cn("flex items-center gap-2 text-accent-foreground bg-accent/10 hover:bg-accent/20 rounded-2xl px-3 sm:px-5", pathname === link.href ? " text-accent-foreground bg-accent/10 hover:bg-accent/20" : "text-gray-600 hover:text-accent-foreground hover:bg-accent/10")}
                >
                    <BarChart3 className="w-4 h-4" />
                    <span>{link.label}</span>
                </Link>
            )
        })}
    </div>)
}