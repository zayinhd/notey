"use server";

import { getUser } from "@/app/utils/supabase/getUser";
import NavbarClient from "./navbarClient";

export default async function Navbar() {
    const user = await getUser();

    return <NavbarClient user={user} />;
}
