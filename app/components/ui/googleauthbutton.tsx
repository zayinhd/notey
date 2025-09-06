import { signInWithGoogle } from "@/app/auth/actions";

export default function GoogleAuthButton() {
    return (
        <div className="mb-5 text-center">
            <button
                onClick={signInWithGoogle}
                className="w-42 m-2 p-2 bg-white text-black rounded-4xl hover:bg-secondary hover:text-white"
            >
                Signin with Google
            </button>
        </div>
    );
}
