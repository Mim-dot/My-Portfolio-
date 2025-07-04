import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, subject, email, message } = formData;

    if (!name || !subject || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    emailjs
      .send(
        "service_l3ium29", // Replace with your EmailJS Service ID
        "template_flhwjwi", // Replace with your EmailJS Template ID
        {
          from_name: name,
          subject,
          reply_to: email,
          message,
        },
        "SWlV3urXeG_jpZLaO" // Replace with your EmailJS Public Key
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for contacting me 😊",
        });

        setFormData({ name: "", subject: "", email: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Try again!",
        });
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8 md:p-14">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-800">Contact Me</h2>
          <p className="text-gray-700">
            Want to discuss a project or just say hi? Feel free to reach out! 😊
          </p>
          <p>
            <strong>Email:</strong> mimh84297@gamil.com
          </p>
          <p>
            <strong>Phone:</strong> +880 1996 185598
          </p>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-yellow-300 px-4 py-3 rounded-xl focus:outline-yellow-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-yellow-300 px-4 py-3 rounded-xl focus:outline-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-yellow-300 px-4 py-3 rounded-xl focus:outline-yellow-500"
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-yellow-300 px-4 py-3 rounded-xl focus:outline-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition duration-300"
          >
            Send Message to Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
