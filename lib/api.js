const BASE_URL = "https://6938e7e24618a71d77d19513.mockapi.io/api/v1/course";

export async function getCourses() {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
}

export async function getCourse(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error('Failed to fetch course');
  return res.json();
}

export async function addCourse(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to add course');
  return res.json();
}

export async function updateCourse(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update course');
  return res.json();
}

export async function deleteCourse(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error('Failed to delete course');
  return res.json();
}
