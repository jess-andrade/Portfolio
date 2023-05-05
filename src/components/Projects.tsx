import styles from '../styles/Projects.module.css'
import Card from './Card'
import DownButton from './DownButton'

import pokedex from '../../public/projects/pokedex.png'
import costs from '../../public/projects/costs2.png'
import catcinema from '../../public/projects/catcinema.png'



export default function Projects() {

  return (
    <section id='projects'>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsWrapper}>
          <h1>Projects</h1>

          <div className={styles.ProjectCards}>

            <Card
              title='Pokedex'
              src={pokedex}
              alt='- -pokedex'
              description='I made this Pokedex using Next.js and PokeAPI ~ for the Drawer and Cards I used MUI'
              href='https://github.com/jess-andrade/Pokedex'
              view='https://pokedex-jade-rho.vercel.app/'
            />
            <Card
              title='Costs'
              src={costs}
              alt='- -costs '
              description='With this application you can manage the costs of your project'
              href='https://github.com/jess-andrade/costs'
              view='https://costs-self.vercel.app/'
            />
            <Card
              title='CatCinema'
              src={catcinema}
              alt='- -CatCinema '
              description='With this app you can search informations about your favorite movies'
              href='https://github.com/jess-andrade/CatCinema'
              view='https://cat-cinema.vercel.app/'
            />
            <Card
              title='Please wait'
              src={catcinema}
              alt='- -CatCinema '
              description='With this app you can search informations about your favorite movies'
              href='https://github.com/jess-andrade/CatCinema'
              view='https://cat-cinema.vercel.app/'
            />
            <Card
              title='Please wait'
              src={catcinema}
              alt='- -CatCinema '
              description='With this app you can search informations about your favorite movies'
              href='https://github.com/jess-andrade/CatCinema'
              view='https://cat-cinema.vercel.app/'
            />
            <Card
              title='Please wait'
              src={catcinema}
              alt='- -CatCinema '
              description='With this app you can search informations about your favorite movies'
              href='https://github.com/jess-andrade/CatCinema'
              view='https://cat-cinema.vercel.app/'
            />



          </div>

        </div>
      </div >

      <div className={styles.downButton}>
        <DownButton href='#contact' />
      </div>
    </section>


  )
}