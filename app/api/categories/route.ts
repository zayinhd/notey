import { NextResponse } from "next/server";
import { createClient } from "../../utils/supabase/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
        return NextResponse.json(
            { error: "User ID required" },
            { status: 400 }
        );
    }

    const supabase = await createClient();
    const { data: categories, error: Error } = await supabase
        .from("categories")
        .select("*")
        .eq("user_id", userId);

    if (Error) {
        return NextResponse.json({ error: Error }, { status: 500 });
    }

    const allCategories = [...(categories || [])];

    return NextResponse.json(allCategories);
}
