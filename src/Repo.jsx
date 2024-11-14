import React from 'react'
import { Link } from 'react-router-dom'

export default function Repo({repo}) {
  return (
    <table>
        <tbody>
            <tr> 
                <td>Name</td> 
                <td>{repo.full_name}</td> 
            </tr>
            <tr> 
                <td>Description</td> 
                <td>{repo.description}</td> 
            </tr>
            <tr> 
                <td>Link</td> 
                <td><Link to = {`/repo/${repo.id}`} state={repo}>Link</Link></td> 
            </tr>
            <tr> 
                <td>Watching</td> 
                <td><b>{repo.watchers}</b></td> 
            </tr>
        </tbody>
    </table>
  )
}
