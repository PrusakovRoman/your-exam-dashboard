import React from "react";

import NavLinks from "@/components/shared/nav-links";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">

            <header className="block">
                <div className="container mx-auto p-4 xs:p-6">
                    <div className="bg-white mx-auto flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 rounded-4xl shadow-md gap-8">
                        <NavLinks />
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