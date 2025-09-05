"use client";

import { Plus, ChevronsRight, ChevronsLeft } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className="w-full flex justify-center items-center">
            <section
                className={`fixed top-16 left-0 h-full pt-6 gap-6 transition-all duration-300 shadow-md flex flex-col items-start px-6 z-50
    ${isOpen ? " w-52 bg-white" : " w-16 shadow-none"}`}
            >
                {isOpen ? (
                    <>
                        <div className="w-full flex flex-row-reverse">
                            <button
                                className="p-2 hover:bg-primary hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                <ChevronsLeft size={16} />
                            </button>
                        </div>
                        <div className="w-full flex flex-col items-start">
                            <div className="p-1 rounded w-full flex justify-between items-center hover:bg-secondary hover:text-white">
                                <button>New Note</button>
                                <Plus size={16} />
                            </div>
                            <div className="p-1 rounded w-full flex justify-between items-center hover:bg-secondary hover:text-white">
                                <button>New Category</button>
                                <Plus size={16} />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="p-1  font-bold bg-secondary rounded flex items-center justify-between">
                                <h1>General</h1>
                                <i>
                                    <Plus size={16} />
                                </i>
                            </div>

                            <ul className="mt-1 ml-3">
                                <li className="p-1 rounded w-full flex justify-between items-center hover:bg-primary hover:text-white">
                                    Reading
                                </li>
                                <li className="p-1 rounded w-full flex justify-between items-center hover:bg-primary hover:text-white">
                                    Reading
                                </li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="p-1  font-bold bg-secondary rounded flex items-center justify-between">
                                <h1>Private</h1>
                                <i>
                                    <Plus size={16} />
                                </i>
                            </div>
                            <ul className="mt-1 ml-3">
                                <li className="p-1 rounded w-full flex justify-between items-center hover:bg-primary hover:text-white">
                                    Reading
                                </li>
                                <li className="p-1 rounded w-full flex justify-between items-center hover:bg-primary hover:text-white">
                                    Reading
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <div>
                        <button
                            className="p-2 hover:bg-primary hover:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <ChevronsRight size={16} />
                        </button>
                    </div>
                )}
            </section>
            <section
                className={`w-full h-full transition-all duration-300 bg-amber-900  flex-1 flex justify-center items-center  overflow-y-auto min-h-screen text-white
          ${isOpen ? "ml-52" : "ml-16"}`}
            >
                {children}
            </section>
        </div>
    );
}
