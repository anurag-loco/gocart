import LoginForm from "./LoginForm";

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
                </div>
            </section>
        </main>
    );
}
