import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkdownView from 'react-showdown';

const Works = () => {
  const markdown = `### Au fil des années, nous avons pu accompagner les meilleurs.
  Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
  `;
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:1337/api/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(
          `Error ${response.status}`
          );
        }
        return response.json();
      })
      .then(({data}) => {
        setProjects(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setProjects(null);
      })
      .finally(() => {
        setIsLoading(false);
      })
      
      return () => {
        setIsLoading(true);
      };
    }, []);

  return (
    <>
    {isLoading && <p>Loading, please wait...</p>}
    {error && (<div className='error'>{`There was a problem fetching the data - ${error}`}</div>)}
    <main className='projects-main-container'><MarkdownView className='project-title-container' markdown={markdown} /><div className='projects-wrap'>{projects && projects?.map(({id, attributes}) => <div className='projects' key={id}><Link to={attributes.slug}><MarkdownView markdown={attributes.name} /></Link></div>)}</div></main>
    </>
  )
}

export default Works


