'use client';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { setToken } from '../../lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const onFinish = (values) => {
    // hardcoded auth for demo
    if (values.email === 'test@gmail.com' && values.password === '123456') {
      setToken('valid-token');
      router.push('/courses');
    } else {
      message.error('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '80px auto' }}>
      <h2>Login</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="email" rules={[{ required: true, message: 'Please input email' }, { type: 'email', message: 'Invalid email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input password' }, { min: 6, message: 'Minimum 6 chars' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
