import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import  MarkdownView  from 'react-showdown'

const StudyCase = () => {
  const navigate = useNavigate();
  const { projectSlug } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/projects?filters[slug]=${projectSlug}`, {
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
        setProject(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setProject(null);
      })
      .finally(() => {
        setIsLoading(false);
      })
      
      return () => {
        setIsLoading(true);
      };
    }, []);

    const handleClick = () => {
      navigate('/works', {replace: true});
    };

  return (
    <>
    {isLoading && <p>Loading, please wait...</p>}
    {error && (<div className='error'>{`There was a problem fetching the data - ${error}`}</div>)}
    <main className='project-main-container'>{project && project?.map(({id, attributes}) => <div className='project' key={id}><MarkdownView markdown={attributes.name} /><MarkdownView markdown={attributes.title} /><MarkdownView markdown={attributes.description} /></div>)}<button className='studycase-button' onClick={handleClick}>Back</button></main>

    </>
  )
}

export default StudyCase