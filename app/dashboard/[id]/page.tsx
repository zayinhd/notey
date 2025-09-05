import NoteCard from "@/app/components/ui/notecard";

export default function Note({ params }: { params: { id: string } }) {
    return (
        <div className="w-full h-full text-center flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold mb-4">Note 2</h1>
            <div>
                <NoteCard />
            </div>
        </div>
    );
}
