"use client";

import { useState } from "react";
import api from "../../lib/axios";
import Cookies from "js-cookie";
import { LoginPayload, LoginResponse } from "@/types/auth";

const LoginPage = () => {
    const [form, setForm] = useState < LoginPayload > ({
        email: "test@gmail.com",
        password: "123456",
    });

    const handleLogin = async () => {
        try {
            const res = await api.post < LoginResponse > ("/login", form);
            Cookies.set("token", res.data.token);
            window.location.href = "/";
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <div>
            <input
                placeholder="Email"
                onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
