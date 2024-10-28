import { http, HttpResponse } from 'msw';

const users = [
  { id: 1, name: 'Student User', email: 'student@example.com', password: 'password123', role: 'student' },
  { id: 2, name: 'Instructor User', email: 'instructor@example.com', password: 'password123', role: 'instructor' },
];

export const handlers = [
  // Auth endpoints
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      return HttpResponse.json({
        user: userWithoutPassword,
        token: 'mock-jwt-token'
      });
    }

    return new HttpResponse(
      JSON.stringify({ message: 'Invalid credentials' }),
      { status: 401 }
    );
  }),

  // User endpoints
  http.get('/api/user/profile', ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.includes('Bearer')) {
      return new HttpResponse(
        JSON.stringify({ message: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const user = users[0]; // Mock current user
    const { password: _, ...userWithoutPassword } = user;
    
    return HttpResponse.json(userWithoutPassword);
  }),

  // Courses endpoints
  http.get('/api/courses', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Introduction to React',
        description: 'Learn the basics of React',
        instructor: 'John Doe'
      },
      {
        id: 2,
        title: 'Advanced JavaScript',
        description: 'Master JavaScript concepts',
        instructor: 'Jane Smith'
      }
    ]);
  }),

  // Students endpoints
  http.get('/api/students', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        course: 'Introduction to React'
      },
      {
        id: 2,
        name: 'Bob Smith',
        email: 'bob@example.com',
        course: 'Advanced JavaScript'
      }
    ]);
  }),

  // Assignments endpoints
  http.get('/api/assignments', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'React Components Quiz',
        course: 'Introduction to React',
        dueDate: '2024-03-15'
      },
      {
        id: 2,
        title: 'JavaScript Algorithms',
        course: 'Advanced JavaScript',
        dueDate: '2024-03-20'
      }
    ]);
  })
];