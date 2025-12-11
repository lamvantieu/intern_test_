'use client';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useEffect, useState } from 'react';
import { Table, Button, Space, Popconfirm, Input } from 'antd';
import Link from 'next/link';
import { courseApi } from '../../lib/api';
import { logout } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function CoursesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const load = async (p = 1, q='') => {
    try {
      setLoading(true);
      const res = await courseApi.list(p, 10, q);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    await courseApi.remove(id);
    load(page, search);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Level', dataIndex: 'level', key: 'level' },
    { title: 'Description', dataIndex: 'description', key: 'description', render: text => text?.slice(0,60) + (text && text.length>60? '...' : '') },
    { title: 'Thumbnail', dataIndex: 'thumbnail', key: 'thumbnail', render: (t) => t ? <img src={t} alt="thumb" style={{width:60}} /> : '-' },
    {
      title: 'Actions', key: 'actions', render: (_, record) => (
        <Space>
          <Link href={`/courses/edit/${record.id}`}><Button type="link">Edit</Button></Link>
          <Popconfirm title="Delete?" onConfirm={() => handleDelete(record.id)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <ProtectedRoute>
      <div className="container">
        <Space style={{justifyContent:'space-between', width:'100%'}}>
          <h2>Courses</h2>
          <Space>
            <Input.Search placeholder="Search" onSearch={(v)=>{ setSearch(v); load(1, v); }} style={{width:240}} />
            <Button onClick={handleLogout}>Logout</Button>
          </Space>
        </Space>

        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <Link href="/courses/add"><Button type="primary">Add Course</Button></Link>
        </div>

        <Table dataSource={data} columns={columns} rowKey="id" loading={loading} />
      </div>
    </ProtectedRoute>
  );
}
