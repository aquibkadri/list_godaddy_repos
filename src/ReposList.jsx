import { useEffect, useState } from 'react'
import './App.css'
import Repos from './Repos.jsx';
import { callAPIandSetState } from './Helper.js';

function ReposList() {
  const [repoList, setRepoList] = useState([]);

  const fetchList = async () => {
    callAPIandSetState('https://api.github.com/orgs/godaddy/repos', setRepoList)
  }

  useEffect(()=> {
    fetchList();
  }, [])  

  return (
    <>
      <h1>GoDaddy Git Repos</h1>
      <Repos repos={repoList}/>
    </>
  )
}

export default ReposList
