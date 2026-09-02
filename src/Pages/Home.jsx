import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.home}>

      <div className={styles.hero}>

        <h1 className={styles.heading}>
          Hi, <br />
          I'm Obaid Aftab
        </h1>

        <h3 className={styles.subheading}>
          Frontend Developer
        </h3>

        <p className={styles.paragraph}>
          I build modern, responsive, and user-friendly web applications
          using React and modern frontend technologies.
        </p>

      </div>

      <div className={styles.btn}>

        <Link to="/projects">
          <button className={styles.button}>
            View My Projects
          </button>
        </Link>

        <Link to="/resume">
          <button className={styles.button}>
            Download Resume
          </button>
        </Link>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={35} />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={35} />
        </a>

      </div>

    </div>
  )
}