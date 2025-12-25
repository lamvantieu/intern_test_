"use client";

import { useRouter } from "next/navigation";
import { Form, Input, Button, message } from "antd";
import api from "@/lib/axios";

const AddCoursePage = () => {
    const router = useRouter();

    const onFinish = async (values: {
        name: string;
        description: string;
    }) => {
        await api.post("/course", values);
        message.success("Added successfully");
        router.push("/courses");
    };

    return (
        <div className="mx-auto max-w-xl p-6">
            <h2 className="mb-4 text-xl font-semibold">
                Add Course
            </h2>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label="Course Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddCoursePage;
