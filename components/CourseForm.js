'use client';
import { Form, Input, Button } from 'antd';

export default function CourseForm({ onSubmit, initialValues }) {
  return (
    <Form layout="vertical" onFinish={onSubmit} initialValues={initialValues}>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter title' }]}>
        <Input placeholder="Course title" />
      </Form.Item>

      <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please enter category' }]}>
        <Input placeholder="Category" />
      </Form.Item>

      <Form.Item label="Level" name="level" rules={[{ required: true, message: 'Please enter level' }]}>
        <Input placeholder="Level" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} placeholder="Description" />
      </Form.Item>

      <Form.Item label="Thumbnail URL" name="thumbnail">
        <Input placeholder="https://..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  );
}
