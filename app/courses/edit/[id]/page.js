"use client";
import { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { getCourse, updateCourse } from "../../../../lib/api";   // <-- FIXED
import { useRouter } from "next/navigation";

export default function EditCourse({ params }) {
  const { id } = params;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const data = await getCourse(id);
        form.setFieldsValue(data);
      } catch {
        message.error("Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onFinish = async (values) => {
    try {
      await updateCourse(id, values);
      message.success("Updated!");
      router.push("/courses");
    } catch {
      message.error("Update failed");
    }
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="p-4 max-w-lg mx-auto">
      <h2>Edit Course</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
