const { createEnrollment, getEnrollments, updateEnrollment, deleteEnrollment } = require('./enrollments');
const { ObjectId } = require('mongodb');

// Example usage
const newEnrollment = {
  name: "John Doe",
  course: "Web Development",
  date: new Date()
};

// Create a new enrollment
createEnrollment(newEnrollment);

// Fetch all enrollments
getEnrollments();

// Update an enrollment (replace 'id' with actual ObjectId)
const updatedInfo = { course: "Advanced Web Development" };
updateEnrollment('id', updatedInfo);

// Delete an enrollment (replace 'id' with actual ObjectId)
deleteEnrollment('id');
