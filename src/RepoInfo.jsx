import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { callAPIandSetState } from './Helper';
import Repos from './Repos';

function RepoInfo() {
    const location = useLocation();
    const [languages, setLanguages] = useState([]);
    const [forks, setForks] = useState([]);
    const [issue, setIssue] = useState([]);
    const {state: repo} = location;

    

    const fetchLanguages = () => {
        const URL = repo.languages_url;
        callAPIandSetState(URL, setLanguages)
    }

    const fetchForks = () => {
        if(repo.forks > 0) {
            const URL = repo.forks_url;
            callAPIandSetState(URL, setForks)
        } else { 
            setForks([])
        }
    }

    const fetchIssues = async () => {
        let issues = repo.open_issues_count;
        if(issues >  0) {
            const URL = repo.issues_url.slice(0, repo.issues_url.indexOf('{'));
            let issueURL = []
            for(let i = 1; i <=issues; i++) {
                issueURL.push(`${URL}/${i}`)
            }
            issueURL = issueURL.map(i => fetch(i))
            try {
                let issueList= await Promise.all(issueURL);
                issueList = issueList.map(i => i.json());
                issueList = await Promise.all(issueList);
                setIssue(issueList.map(i => i.title))
                
            } catch (error) {
                console.log('Error', error)
            }
            
        } else {
            setIssue([])
        }
    }
   

    useEffect(() =>{
        fetchForks();
        fetchIssues();
        fetchLanguages();
    }, [repo])
 
  return (
    <div>
        <Link to={-1}> {`< Back to Prevoios`}</Link>
        <h1>{repo.full_name}</h1>
        <ul>
            <li><h2>Languages:</h2>{!languages.some(l => l === 'message') ? languages.join(', '): <span>No data found</span>}</li>
            <li><h2>Issues:</h2>{issue.length === 0 ? <span>No issues present!</span> : <ol>{issue.map((i, idx) => <li key={idx}>{i}</li>)}</ol>}</li>
            <li><h2>Forks:</h2>{forks.length === 0 ? <span>No forks present!</span> : <Repos repos={forks}/>}</li>
        </ul>
    </div>
  )
}

export default RepoInfo