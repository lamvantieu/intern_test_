"use client";
import { Form, Input, Button, message } from "antd";
import { addCourse } from "../../../lib/api";
import { useRouter } from "next/navigation";

export default function AddCourse() {
    const router = useRouter();

    const onFinish = async (values) => {
        try {
            await addCourse(values);
            message.success("Course added successfully!");
            router.push("/courses");
        } catch (err) {
            console.error(err);
            message.error("Failed to add course");
        }
    };

    return (
        <div style={{ padding: 20, maxWidth: 720, margin: "0 auto" }}>
            <h2>Add Course</h2>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                    <Input placeholder="Title..." />
                </Form.Item>

                <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Input placeholder="Category..." />
                </Form.Item>

                <Form.Item name="level" label="Level">
                    <Input placeholder="Beginner / Intermediate / Advanced..." />
                </Form.Item>

                <Form.Item name="numberOfLesson" label="Number of Lessons">
                    <Input placeholder="Ex: 12" />
                </Form.Item>

                <Form.Item name="description" label="Description">
                    <Input.TextArea placeholder="Description..." rows={4} />
                </Form.Item>

                <Form.Item name="thumbnail" label="Thumbnail URL">
                    <Input placeholder="https://..." />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
}
