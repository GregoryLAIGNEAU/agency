import MarkdownView from 'react-showdown';
import AboutUs from '../../assets/about.jpg'

const About = () => {
  const markdown = `### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.
  De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs. Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
  `;
  return (
    <main className="about-main-container">
      <MarkdownView markdown={markdown} />
      <div>
        <img src={AboutUs} alt="A desk with a laptop on it" />
      </div>
    </main>
  )
}

export default About