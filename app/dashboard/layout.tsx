import React from "react";

import {
    BarChart3
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const links = [{ id: 'dashboard', href: "/dashboard", label: "Статистика" }, { id: 'homework', href: "/dashboard/homework", label: "Домашка" }]

    return (
        <div className="min-h-screen bg-gray-50">

            <header className="block">
                <div className="container mx-auto p-4 xs:p-6">
                    <div className="bg-white mx-auto flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 rounded-4xl shadow-md gap-8">
                        <div className="flex ">
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
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">

                            <div className="relative group">
                                <div className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white font-medium text-base sm:text-lg cursor-pointer relative border-2 border-white shadow-lg hover:scale-105 transition-transform">
                                    А
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            <>{children}</>
        </div >
    )
}