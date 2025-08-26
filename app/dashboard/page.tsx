"use client";

import { Plus, ChevronsRight, ChevronsLeft } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className="flex justify-center items-center">
            <aside className="w-52 h-full pt-6 gap-6  fixed top-20 left-0 right-0  bg-white shadow-md flex flex-col justify-items-center items-start px-6 z-50">
                {isOpen ? (
                    <>
                        <div className="w-full  flex flex-row-reverse">
                            <button className="p-2 hover:bg-primary hover:text-white">
                                <ChevronsLeft size={16} />
                            </button>
                        </div>
                        <div className="w-full">
                            <div className=" bg-amber-500 flex items-center justify-between">
                                <h1>General</h1>
                                <i>
                                    <Plus size={16} />
                                </i>
                            </div>

                            <ul className="ml-3">
                                <li className="p-2 hover:bg-primary hover:text-white">
                                    Reading
                                </li>
                                <li>Watching</li>
                                <li>Filming</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className=" bg-amber-500 flex items-center justify-between">
                                <h1>Private</h1>
                                <i>
                                    <Plus size={16} />
                                </i>
                            </div>
                            <ul className="ml-3">
                                <li>Business</li>
                                <li>Monthly Payment</li>
                                <li>Food expenses</li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <div>
                        <button onClick={() => setIsOpen(false)}>
                            <ChevronsRight size={16} />
                        </button>
                    </div>
                )}
            </aside>
            <section></section>
        </div>
    );
}
