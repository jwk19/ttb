const users = [
  { id: 1, name: 'Student User', email: 'student@example.com', password: 'password123', role: 'student' },
  { id: 2, name: 'Instructor User', email: 'instructor@example.com', password: 'password123', role: 'instructor' },
];

export const mockLogin = async (email, password) => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token: 'mock-jwt-token',
    };
  }
  throw new Error('Invalid credentials');
};