import React from 'react'
import FollowersIcon from '../../../../assets/icons/FollowersIcon'
import RepositoryIcon from '../../../../assets/icons/RepositoryIcon'

const UserList = ({results}) => {
   return results && results.map(user =>{
    const {node_id,avatar_url,html_url,login,name,bio,public_repos,followers,location} = user
    return(<div className="user result" key={node_id}>
                <img src={avatar_url} className="avatar" alt=""/>
                <div className="result__info">
                    <div className="name-row">
                        <h4 className="full-name">{name}</h4>
                        <a href={html_url} rel="noreferrer" target="_blank" className="username">{login}</a>
                    </div>
                    <div className="bio">{bio}</div>
                    <div className="location">
                        {location}
                    </div>
                </div>
                <div className="user__repos">
                    <p><RepositoryIcon/> Repositories :{public_repos}</p>
                    <p><FollowersIcon/> Followers : {followers}</p>
                </div>

            </div>)
})
}

export default UserList
