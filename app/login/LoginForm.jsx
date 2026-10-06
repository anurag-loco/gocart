'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./login.css";

const socialOptions = [
    { name: "Google", image: "/figma/social-login-image@3x.png" },
    { name: "Facebook", image: "/figma/social-login-image1@3x.png" },
    { name: "Apple", image: "/figma/social-login-image2@3x.png" },
];

export default function LoginForm() {
    const [notice, setNotice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setNotice("Sign-in is not connected yet.");
    };

    return (
        <div className="auth-form-component">
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-fields">
                    <div className="auth-field">
                        <label className="auth-label" htmlFor="email">Email address</label>
                        <div className="auth-input-wrap">
                            <input
                                className="auth-input"
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                            <Image className="auth-field-icon" src="/figma/icon-account.svg" alt="" width={20} height={20} />
                        </div>
                    </div>

                    <div className="auth-field">
                        <label className="auth-label" htmlFor="password">Password</label>
                        <div className="auth-input-wrap">
                            <input
                                className="auth-input"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                            <Image className="auth-field-icon" src="/figma/icon-password.svg" alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>

                <button className="auth-submit" type="submit">Log in</button>
                <p className="auth-notice" aria-live="polite">{notice}</p>
            </form>

            <div className="auth-divider" aria-hidden="true" />

            <section className="auth-social" aria-labelledby="social-title">
                <h2 className="auth-social-title" id="social-title">Or log in with</h2>
                <div className="auth-social-grid">
                    {socialOptions.map(({ name, image }) => (
                        <button
                            className="auth-social-option"
                            key={name}
                            type="button"
                            onClick={() => setNotice(`${name} sign-in is not connected yet.`)}
                        >
                            <Image className="auth-social-icon" src={image} alt="" width={40} height={40} />
                            <span>{name}</span>
                        </button>
                    ))}
                </div>
            </section>

            <p className="auth-footer-copy">
                Want to sell on GoCart? <Link href="/create-store">Create a store</Link>
            </p>
        </div>
    );
}
