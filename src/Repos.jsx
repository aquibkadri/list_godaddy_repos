import React from 'react'
import Repo from './Repo'

export default function Repos({repos}) {
  return (
    <div>{repos.map((repo, i) => (<Repo repo={repo}/>))}</div>
  )
}
