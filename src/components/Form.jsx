import { useState } from "react";
import "./form.css";
import eyeball from "../assets/eyeball.gif";
import Vision from "./Vision";
export default function Form() {
  const [formData, setFormData] = useState({
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    for (const field in formData) {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <h2>Reveal a vision of your future</h2>
      <div className="form-card">
        {" "}
        <form onSubmit={handleSubmit}>
          <div className="form-body">
            <img src={eyeball} alt="eyeball" />
            <br />
            <label htmlFor="question">Enter a question: </label>
            <br />
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
            />
            <div className="error">{errors.question}</div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="results form-card">
          <h3>A vision of your future</h3>
          <p className="hide">You asked: {formData.question}</p>
          <Vision />
        </div>
      )}
    </div>
  );
}
