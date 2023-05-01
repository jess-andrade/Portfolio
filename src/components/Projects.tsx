import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id='projects'>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsWrapper}>
          <h1>Projects</h1>

          <div className={styles.ProjectCards}>

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

        </div>
      </div >
    </section>


  )
}