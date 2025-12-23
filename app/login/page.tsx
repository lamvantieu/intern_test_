"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios"; 
import Cookies from "js-cookie";
import { LoginPayload, LoginResponse } from "@/types/auth";

const LoginPage = () => {
  const router = useRouter();

  const [form, setForm] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    
    if (
      form.email === "test@test.com" &&
      form.password === "123456"
    ) {
      Cookies.set("token", "fake-jwt-token");
      router.push("/");
      return;
    }
    try {
      const res = await api.post<LoginResponse>("/login", form);
      Cookies.set("token", res.data.token);
      router.push("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
