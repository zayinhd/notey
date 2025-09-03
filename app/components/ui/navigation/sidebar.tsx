"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="user-sidebar"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-32 mr-1 fixed top-16  h-80 rounded bg-white shadow-lg z-50 p-2`}
                >
                    <div className="mt-6 flex  flex-col ">
                        <div className="flex flex-row-reverse ">
                            <button
                                onClick={() => setOpen(!open)}
                                className="p-2 rounded hover:bg-secondary hover:text-white"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <ul className=" mx-auto pt-6 flex flex-col items-center gap-4">
                            <li className="w-full p-1  rounded hover:text-white hover:bg-secondary">
                                <Link href="#">Profile</Link>
                            </li>
                            <li className="w-full p-1  rounded hover:text-white hover:bg-secondary">
                                <Link href="#">Progress</Link>
                            </li>
                            <li className="w-full p-1  rounded hover:text-white hover:bg-secondary">
                                <Link href="#">History</Link>
                            </li>
                            <li className="w-full p-1  rounded hover:text-white hover:bg-secondary">
                                <Link href="#">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
