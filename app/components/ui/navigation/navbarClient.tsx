"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";

export default function NavbarClient({ user }: { user: any }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
                <h1 className="text-xl font-bold">Notey</h1>

                <div>
                    {user?.user_metadata?.avatar_url ? (
                        <button
                            onClick={() => setOpen(!open)}
                            className=" p-2 rounded-full hover:bg-secondary"
                        >
                            <Image
                                src={user.user_metadata.avatar_url}
                                alt="User profile"
                                width={32}
                                height={32}
                                className="rounded-full "
                            />
                        </button>
                    ) : (
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>

            {open && <Sidebar open={open} setOpen={setOpen} />}
        </>
    );
}
