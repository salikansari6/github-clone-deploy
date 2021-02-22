import React from 'react'
import formatNumber from '../../../../utilities/formatNumber';
const UserList = ({results}) => {
   return results && results.map((user,index) =>{
    const {node_id,avatar_url,html_url,login,name,bio,followers,location} = user
    return(<div className="user result" key={node_id+index}>
                <div className="result__info">
                    <div className="name-row">
                        <img src={avatar_url} className="avatar" alt=""/>
                        <a href={html_url} rel="noreferrer" target="_blank" className="username">
                            <h5 className="full-name">{name}</h5>
                        </a>    
                        <p className="login">{login}</p>
                    </div>
                    <div className="bio">{bio}</div>
                    <div className="location">
                        {location}
                    </div>
                </div>
                <div className="followers">
                    <b>Followers</b>
                    <span className="followers__number">{followers && formatNumber(followers)}</span>
                </div>

            </div>)
})
}

export default UserList
