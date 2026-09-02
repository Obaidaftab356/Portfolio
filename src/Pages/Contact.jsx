import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className={styles.contact}>

      <h1 className={styles.heading}>Contact Me</h1>

      <p className={styles.intro}>
        Have a project in mind or want to work together?
        Feel free to get in touch with me.
      </p>

      <div className={styles.container}>

        <div className={styles.info}>

          <h2>Let's Talk</h2>

          <p>
            I'm always open to discussing new projects,
            opportunities and ideas.
          </p>

          <div className={styles.details}>
            <p><strong>Email:</strong> obaidaftab1234@gmail.com</p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
          </div>

        </div>


        <form className={styles.form} onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}