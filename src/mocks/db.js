import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(String),
    name: String,
    email: String,
    role: String,
    password: String,
  },
  course: {
    id: primaryKey(String),
    title: String,
    description: String,
    instructorId: String,
    students: Array,
    modules: Array,
  },
  assignment: {
    id: primaryKey(String),
    title: String,
    courseId: String,
    dueDate: String,
    description: String,
    submissions: Array,
  },
  submission: {
    id: primaryKey(String),
    assignmentId: String,
    studentId: String,
    submissionUrl: String,
    grade: Number,
    feedback: String,
    status: String,
  }
});

// Seed initial data
export const seedDb = () => {
  // Users
  const instructor = db.user.create({
    id: '1',
    name: 'John Doe',
    email: 'instructor@example.com',
    role: 'instructor',
    password: 'password123'
  });

  db.user.create({
    id: '2',
    name: 'Jane Smith',
    email: 'student@example.com',
    role: 'student',
    password: 'password123'
  });

  // Course
  const course = db.course.create({
    id: '1',
    title: 'Introduction to React',
    description: 'Learn React fundamentals',
    instructorId: instructor.id,
    students: ['2'],
    modules: [
      {
        id: '1',
        title: 'React Basics',
        content: 'Introduction to React concepts'
      }
    ]
  });

  // Assignment
  const assignment = db.assignment.create({
    id: '1',
    title: 'React Components',
    courseId: course.id,
    dueDate: '2024-03-20',
    description: 'Create a reusable component'
  });

  // Submission
  db.submission.create({
    id: '1',
    assignmentId: assignment.id,
    studentId: '2',
    submissionUrl: 'https://github.com/example/submission',
    grade: null,
    feedback: '',
    status: 'submitted'
  });
};