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
  if (email === "test@test.com" && password === "123456") {
    const fakeToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fake.payload";

    Cookies.set("token", fakeToken);
    router.push("/detail");
    return;
  }

  alert("Sai tài khoản hoặc mật khẩu");
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
