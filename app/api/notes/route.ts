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
    const { data: ownNotes, error: ownError } = await supabase
        .from("notes")
        .select("*")
        .eq("user_id", userId);

    const { data: sharedNotes, error: sharedError } = await supabase
        .from("shared_notes")
        .select("note_id, notes(*)")
        .eq("shared_with", userId);

    if (ownError || sharedError) {
        return NextResponse.json(
            { error: ownError || sharedError },
            { status: 500 }
        );
    }

    const allNotes = [
        ...(ownNotes || []),
        ...(sharedNotes || []).map((s: any) => s.notes),
    ];

    return NextResponse.json(allNotes);
}

export async function POST(req: Request) {
    const body = await req.json();
    const { userId, title, content } = body;

    if (!userId || !title) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabase = await createClient();
    const { data, error } = await supabase
        .from("notes")
        .insert({ user_id: userId, title, content })
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
}
