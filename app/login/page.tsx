"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button, Input, Form } from "antd";
import type { LoginPayload } from "@/types/auth";

const LoginPage = () => {
    const router = useRouter();
    const [form, setForm] = useState<LoginPayload>({
        email: "",
        password: "",
    });

    const handleLogin = () => {
        if (
            form.email === "admin@gmail.com" &&
            form.password.length >= 6
        ) {
            Cookies.set("token", "fake-jwt-token");
            router.push("/courses");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Form className="w-80 space-y-4">
                <Input
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />
                <Input.Password
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />
                <Button
                    type="primary"
                    block
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginPage;
