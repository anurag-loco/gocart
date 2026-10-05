import Link from "next/link";
import LoginForm from "./LoginForm";
import "./login.css";

export const metadata = {
    title: "Login | GoCart",
};

export default function LoginPage() {
    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="login-title">
                <div className="auth-content">
                    <h1 className="auth-title" id="login-title">Login</h1>

                    <LoginForm />

                    <p className="auth-footer-copy">
                        Want to sell on GoCart? <Link href="/create-store">Create a store</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
