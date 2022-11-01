import Heros from '../../assets/hero.jpg'
import MarkdownView from 'react-showdown';

const Hero = () => {
  const markdown = `### Confiez vos rêves à des experts du Web
  Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO. Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
  `;
  
  return (
    <>
    <main className='hero-main-container'>
        <MarkdownView markdown={markdown} />
      <div>
        <img src={Heros} alt="A desk with a laptop on it" />
      </div>
    </main>
    </>
  )
}

export default Hero