import React, { useState } from 'react';
import './style.css'; 
const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    // Simple name validation (non-empty)
    if (name === 'name') {
      setErrors({
        ...errors,
        name: value.trim() === '' ? 'Name cannot be empty' : '',
      });
    }

    // Simple email validation (using a regular expression)
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: !value.match(emailRegex) ? 'Enter a valid email address' : '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform additional actions if needed before submitting
    // ...

    // Submit the form if no errors
    if (!errors.name && !errors.email) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="error-message">{errors.name}</span>

        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error-message">{errors.email}</span>

        <br />

        <button type="submit" style={{ backgroundColor: '#00D8FF' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
