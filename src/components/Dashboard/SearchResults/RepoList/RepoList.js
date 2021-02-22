import React from 'react'
import RepositoryIcon from '../../../../assets/icons/RepositoryIcon'
import StarIcon from '../../../../assets/icons/StarIcon'
import formatNumber from '../../../../utilities/formatNumber'
import languageColorCodes from '../../../../utilities/languageColorCodes.json'
import LanguageDist from './LanguageDist/LanguageDist'

const RepoList = ({results}) => {

    return results && results.map((repo,index) =>{
        const {full_name, description, stargazers_count,language,node_id ,license, html_url,languages_url} = repo
        return(
            <div className="repo result" key={node_id+index}>
            <div className="result__info">
                <div className="name-row">
                       <RepositoryIcon/> <a href={html_url} rel="noreferrer" target="_blank" className="reponame">{full_name}</a>
                </div>
                <div className="description">{description}</div>
                <div className="text-small">
                    <p className="stars"><StarIcon/>{stargazers_count && formatNumber(stargazers_count)}</p>
                    <div className="language">
                        <span className="lang-color" style={{background:languageColorCodes[0][language]}}></span>
                        <p>{language}</p>
                    </div>
                    <p> {license && license.name}</p>
                </div>
            </div>
            <LanguageDist languages_url={languages_url}/>
        </div>
        )

    })
}

export default RepoList
