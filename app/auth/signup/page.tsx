import AuthForm from "../../components/ui/authform";
import { signup } from "../actions";

export default function SignupPage() {
    return <AuthForm type="signup" onSubmit={signup} />;
}
