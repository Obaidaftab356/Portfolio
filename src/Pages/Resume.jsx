import React from 'react'
import styles from './Resume.module.css'

export default function Resume() {
  return (
    <div className={styles.resume}>

      <h1 className={styles.heading}>My Resume</h1>

      <p className={styles.intro}>
        I'm a Software Engineering graduate and Frontend Developer
        passionate about building modern and responsive web applications.
      </p>

      <div className={styles.container}>

        <div className={styles.section}>
          <h2>Education</h2>

          <div className={styles.item}>
            <h3>BS Software Engineering</h3>
            <p>Sir Syed University of Engineering and Technology</p>
            <span>2022 - 2026</span>
          </div>
        </div>


        <div className={styles.section}>
          <h2>Skills</h2>

          <div className={styles.skills}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Bootstrap</span>
            <span>React Native</span>
            <span>Vite</span>
            <span>Python</span>
            <span>Java</span>
          </div>
        </div>


        <div className={styles.section}>
          <h2>Experience</h2>

          <div className={styles.item}>
            <h3>Frontend Developer</h3>
            <p>
              Developed responsive and user-friendly web interfaces
              using React.js and modern frontend technologies.
            </p>
          </div>
        </div>


        <div className={styles.section}>
          <h2>Projects</h2>

          <div className={styles.item}>
            <h3>AI Interior Designing App</h3>
            <p>
              AI-powered application for designing and customizing
              interior spaces.
            </p>
          </div>

          <div className={styles.item}>
            <h3>E-Commerce Website</h3>
            <p>
              Responsive e-commerce frontend built with React.js.
            </p>
          </div>
        </div>

      </div>

      <button className={styles.downloadBtn}>
        Download CV
      </button>

    </div>
  )
}