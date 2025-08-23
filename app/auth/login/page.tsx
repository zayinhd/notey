import { login } from "../actions";
import AuthForm from "../../components/ui/authform";

export default function LoginPage() {
    return (
        <>
            <AuthForm onSubmit={login} type="login" />
        </>
    );
}
