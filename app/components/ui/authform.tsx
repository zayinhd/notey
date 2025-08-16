"use client";

import { signInWithGoogle } from "../../auth/actions";

type AuthFormProps = {
    onSubmit: (formData: FormData) => void | Promise<void>;
    type: "login" | "signup";
};

export default function AuthForm({ onSubmit, type }: AuthFormProps) {
    return (
        <>
            <div className="w-[50%] h-[50%] rounded-3xl bg-blue-800 flex flex-col justify-center items-center">
                <div className="my-5 text-center text-4xl">
                    <h1>{type === "login" ? "Login" : "Sign Up"}</h1>
                </div>
                <form>
                    <div className=" flex flex-col justify-center items-center">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="mb-4 p-2 border-2 rounded-2xl"
                            placeholder="Email"
                            required
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="p-2 border-2 rounded-2xl"
                            placeholder="Password"
                            required
                        />
                        <button
                            formAction={onSubmit}
                            className="w-42 m-2 p-2 bg-green-600 rounded-4xl"
                        >
                            {type === "login" ? "Log in" : "Sign up"}
                        </button>

                        <div className=" text-center text-2xl">
                            <h1>Or</h1>
                        </div>
                        <div className="mb-5 text-center">
                            <button
                                formAction={signInWithGoogle}
                                className="w-42 m-2 p-2 bg-white text-black rounded-4xl"
                            >
                                Signin with Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
