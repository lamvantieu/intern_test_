"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Form, Input, Button, message } from "antd";
import api from "@/lib/axios";
import type { Course } from "@/types/course";

const EditCoursePage = () => {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const [form] = Form.useForm();

    useEffect(() => {
        api.get<Course>(`/course/${id}`).then((res) => {
            form.setFieldsValue(res.data);
        });
    }, [id, form]);

    const onFinish = async (values: Course) => {
        await api.put(`/course/${id}`, values);
        message.success("Updated successfully");
        router.push("/courses");
    };

    return (
        <div className="mx-auto max-w-xl p-6">
            <h2 className="mb-4 text-xl font-semibold">
                Edit Course
            </h2>

            <Form form={form} layout="vertical" onFinish={onFinish}>
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
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default EditCoursePage;



