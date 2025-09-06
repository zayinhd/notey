import type { User } from "@supabase/supabase-js";
import { createClient } from "./server";

export async function getUser(): Promise<User | null> {
    const supabase = await createClient();

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error && error.message !== "Auth session missing!") {
        console.error("getUser error:", error.message);
    }

    return user ? (JSON.parse(JSON.stringify(user)) as User) : null;
}
