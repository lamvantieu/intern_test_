'use client';
import ProtectedRoute from '../../../../components/ProtectedRoute';
import CourseForm from '../../../../components/CourseForm';
import { courseApi } from '../../../../lib/api';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { useRouter, useParams } from 'next/navigation';

export default function EditPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await courseApi.get(params.id);
      setCourse(res.data);
    })();
  }, [params.id]);

  const handleSubmit = async (values) => {
    await courseApi.update(params.id, values);
    message.success('Updated');
    router.push('/courses');
  };

  if (!course) return <div style={{padding:20}}>Loading...</div>;

  return (
    <ProtectedRoute>
      <div className="container">
        <h2>Edit Course</h2>
        <CourseForm onSubmit={handleSubmit} initialValues={course} />
      </div>
    </ProtectedRoute>
  );
}
