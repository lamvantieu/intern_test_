"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Table, Button } from "antd";
import type { Course } from "@/types/course";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const CoursePage = () => {
    const [data, setData] = useState<Course[]>([]);
    const router = useRouter();

    useEffect(() => {
        api.get("/course").then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);


    const logout = () => {
        Cookies.remove("token");
        router.push("/login");
    };

  
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (img: string) => (
                <img src={img} width={60} style={{ borderRadius: 6 }} />
            ),
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) =>
                new Date(date).toLocaleDateString("vi-VN"),
        },
    ];

    return (
        <div className="p-6">
            <div className="mb-4 flex justify-between">
                <Button type="primary" onClick={() => router.push("/courses/add")}>
                    Add Course
                </Button>
                <Button danger onClick={logout}>
                    Logout
                </Button>
            </div>

            {/* ✅ JSX CHỈ DÙNG, KHÔNG KHAI BÁO */}
            <Table
                dataSource={data}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default CoursePage;
