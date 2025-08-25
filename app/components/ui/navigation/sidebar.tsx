"use client";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface SidebarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
    return (
        <>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}

            <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: open ? "0%" : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-20 right-0 h-80 w-64 bg-white shadow-lg z-50 p-6"
            >
                <button
                    onClick={() => setOpen(false)}
                    className="mb-6 p-2 rounded-lg hover:bg-gray-100"
                >
                    <X size={24} />
                </button>

                <nav className="flex flex-col gap-4">
                    <a href="#" className="hover:text-blue-600">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        About
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Services
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Contact
                    </a>
                </nav>
            </motion.aside>
        </>
    );
}
