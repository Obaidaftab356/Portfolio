
import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.about}>

      <div className={styles.aboutContainer}>

        {/* Left Side */}

        <div className={styles.aboutText}>

          <span className={styles.label}>
            ABOUT ME
          </span>

          <h1>
            I don't just write code.
            <span> I build experiences.</span>
          </h1>

          <p>
            I'm Obaid Aftab, a Software Engineering graduate and
            Frontend Developer who enjoys turning ideas into clean,
            responsive and engaging web experiences.
          </p>

          <p>
            My main focus is React.js and modern frontend development.
            I care about writing clean code, creating intuitive interfaces
            and making sure websites work smoothly across different devices.
          </p>

          <div className={styles.stats}>

            <div className={styles.stat}>
              <h2>10+</h2>
              <p>Projects</p>
            </div>

            <div className={styles.stat}>
              <h2>8+</h2>
              <p>Technologies</p>
            </div>

            <div className={styles.stat}>
              <h2>2026</h2>
              <p>Graduate</p>
            </div>

          </div>

        </div>


        {/* Right Side */}

        <div className={styles.visual}>

          <div className={styles.card}>

            <div className={styles.cardTop}>
              <span>OB</span>

              <div>
                <small>AVAILABLE FOR</small>
                <strong>WORK</strong>
              </div>
            </div>

            <div className={styles.cardMain}>

              <p>Hello, I'm</p>

              <h2>Obaid<br />Aftab</h2>

              <span>Frontend Developer</span>

            </div>

            <div className={styles.tech}>
              <span>React</span>
              <span>JavaScript</span>
              <span>UI</span>
            </div>

          </div>

          <div className={styles.circle}></div>

        </div>

      </div>

    </div>
  )
}
