import React from 'react'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.projects}>

      <h1 className={styles.heading}>My Projects</h1>

      <p className={styles.intro}>
        Here are some of the projects I have built using modern frontend
        technologies.
      </p>

      <div className={styles.projectContainer}>

        <div className={styles.card}>
          <h2>Coffee Shop</h2>

          <p>
            A modern coffee shop that brings together premium coffee,
            delicious flavors, and a cozy atmosphere.
          </p>

          <p className={styles.tech}>
            React.js • CSS • JavaScript
          </p>

          <button
            onClick={() =>
              window.open("https://coffee-website-obaid9.vercel.app", "_blank")
            }
          >
            View Project
          </button>
        </div>
        <div className={styles.card}>
          <h2>AI Interior Design</h2>

          <p>
            An AI-powered interior designing application that helps users
            visualize and customize interior spaces.
          </p>

          <p className={styles.tech}>
            React Native • Python • AI
          </p>

          <button>View Project</button>
        </div>

        <div className={styles.card}>
          <h2>E-Commerce Website</h2>

          <p>
            A responsive e-commerce frontend with modern UI, product
            browsing and interactive components.
          </p>

          <p className={styles.tech}>
            React.js • CSS • JavaScript
          </p>

          <button>View Project</button>
        </div>

        <div className={styles.card}>
          <h2>Online Bookstore</h2>

          <p>
            A React-based online bookstore interface with product listings
            and a clean responsive design.
          </p>

          <p className={styles.tech}>
            React.js • Bootstrap • JavaScript
          </p>

          <button>View Project</button>
        </div>

      </div>

    </div>
  )
}