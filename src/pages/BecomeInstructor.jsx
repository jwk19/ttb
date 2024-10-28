import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User, Mail, Briefcase, GraduationCap } from 'lucide-react';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  expertise: Yup.string().required('Area of expertise is required'),
  experience: Yup.number().positive('Experience must be a positive number').integer('Experience must be a whole number').required('Years of experience is required'),
  qualifications: Yup.string().required('Qualifications are required'),
  motivation: Yup.string().required('Motivation is required'),
});

const BecomeInstructor = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would typically send the form data to your backend
    console.log(values);
    alert('Form submitted successfully!');
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Become an Instructor</h1>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          expertise: '',
          experience: '',
          qualifications: '',
          motivation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">Area of Expertise</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  type="text"
                  name="expertise"
                  id="expertise"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g., Web Development, Data Science"
                />
              </div>
              <ErrorMessage name="expertise" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  type="number"
                  name="experience"
                  id="experience"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="5"
                />
              </div>
              <ErrorMessage name="experience" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">Qualifications</label>
              <Field
                as="textarea"
                name="qualifications"
                id="qualifications"
                rows="3"
                className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="List your relevant qualifications, certifications, or degrees"
              />
              <ErrorMessage name="qualifications" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">Why do you want to become an instructor?</label>
              <Field
                as="textarea"
                name="motivation"
                id="motivation"
                rows="4"
                className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Tell us about your motivation to teach and what you hope to achieve as an instructor"
              />
              <ErrorMessage name="motivation" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BecomeInstructor;