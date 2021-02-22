import React from 'react'
import RepositoryIcon from '../../../../assets/icons/RepositoryIcon'
import StarIcon from '../../../../assets/icons/StarIcon'
import formatNumber from '../../../../utilities/formatNumber'

const RepoList = ({results}) => {
    return results && results.map(repo =>{
        const { full_name, description, stargazers_count , language,node_id ,license,html_url} = repo
        return(
            <div className="repo result" key={node_id}>
            <div className="result__info">
                <div className="name-row">
                       <RepositoryIcon/> <a href={html_url} rel="noreferrer" target="_blank" className="reponame">{full_name}</a>
                </div>
                <div className="description">{description}</div>
                <div className="text-small">
                <StarIcon/><p>{stargazers_count && formatNumber(stargazers_count)}</p>
                    <p>{language}</p>
                    <p> {license && license.name}</p>
                </div>
            </div>
            

        </div>
        )

    })
}

export default RepoList
