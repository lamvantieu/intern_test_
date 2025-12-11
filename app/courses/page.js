"use client";
import { Table, Button, Popconfirm, message, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function CourseList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const loadData = async () => {
        try {
            setLoading(true);
            const res = await getCourses();
            setData(res);
        } catch (err) {
            message.error("Failed to load courses");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteCourse(id);
            message.success("Deleted");
            loadData();
        } catch (err) {
            message.error("Delete failed");
        }
    };

    const columns = [
        { title: "Title", dataIndex: "title", key: "title" },

        { title: "Category", dataIndex: "category", key: "category" },

        { title: "Level", dataIndex: "level", key: "level" },

        { title: "NumberOfLesson", dataIndex: "numberOfLesson", key: "numberOfLesson" },

        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            render: (d) => d ? (d.length > 80 ? d.slice(0, 80) + "..." : d) : "-",
        },

        {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (t) => t ? <img src={t} style={{ width: 90, borderRadius: 6 }} /> : "-",
        },

        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button
                        type="link"
                        onClick={() => router.push(`/courses/edit/${record.id}`)}
                    >
                        Edit
                    </Button>

                    <Popconfirm
                        title="Delete?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <Button danger type="link">
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: 20 }}>
            <Button
                type="primary"
                onClick={() => router.push("/courses/add")}
                style={{ marginBottom: 16 }}
            >
                Add Course
            </Button>

            <Table
                dataSource={data}
                columns={columns}
                rowKey="id"
                loading={loading}
            />
        </div>
    );
}
