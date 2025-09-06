"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";

export default function NavbarClient({ user }: { user: User | null }) {
    const [open, setOpen] = useState(false);

    const fullName =
        user?.user_metadata?.full_name ||
        user?.user_metadata?.name ||
        user?.email ||
        "";

    const initials = fullName
        ? fullName
              .split(" ")
              .map((n: string) => n.charAt(0))
              .join(".")
              .toUpperCase()
        : "?";

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
                <h1 className="text-xl font-bold">Notey</h1>

                <div>
                    {user ? (
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-2 rounded-full hover:bg-secondary"
                        >
                            {user.user_metadata?.avatar_url ? (
                                <Image
                                    src={user.user_metadata.avatar_url}
                                    alt="User profile"
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-sm text-white font-semibold">
                                    {initials}
                                </div>
                            )}
                        </button>
                    ) : (
                        <div className="md:hidden p-2 rounded-lg hover:bg-primary hover:text-white">
                            <Link href="/auth/login">Login</Link>
                        </div>
                    )}
                </div>
            </nav>

            {open && <Sidebar open={open} setOpen={setOpen} />}
        </>
    );
}
