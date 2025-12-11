'use client';
import ProtectedRoute from '../../../components/ProtectedRoute';
import CourseForm from '../../../components/CourseForm';
import { courseApi } from '../../../lib/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function AddPage() {
  const router = useRouter();
  const handleSubmit = async (values) => {
    await courseApi.create(values);
    message.success('Created');
    router.push('/courses');
  };

  return (
    <ProtectedRoute>
      <div className="container">
        <h2>Add Course</h2>
        <CourseForm onSubmit={handleSubmit} />
      </div>
    </ProtectedRoute>
  );
}
