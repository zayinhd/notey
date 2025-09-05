import { NextResponse } from "next/server";
import { createClient } from "../../utils/supabase/server";

export async function POST(req: Request) {
    const { noteId, recipientId } = await req.json();

    if (!noteId || !recipientId) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("shared_notes")
        .insert({ note_id: noteId, shared_with: recipientId });

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Note shared", data });
}
