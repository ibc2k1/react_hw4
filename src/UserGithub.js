import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const Users=()=>{
class UserGithub extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            avatarUrl: '', 
            login: '',
            followers: '',
            following: '',
            publicrepos: '',
            githubtUrl: ''

        } 
    } 
        componentDidMount() { 
            $.get(this.props.source, (result) => { 
                console.log(result); 
                const data = result; 
                if (data) { 
                    this.setState({ 
                        avatarUrl: data.avatar_url,
                        login: data.login,
                        followers: data.followers,
                        following: data.following,
                        publicrepos: data.public_repos,
                        githubtUrl: data.html_url, 
                    }); 
                } 
            }); 
        } 
        render() { 
            return ( 
            <div> 
            <img src={this.state.avatarUrl} /> 
            <h3>Login:{this.state.login}</h3>
            <h3>follower:{this.state.followers}</h3> 
            <h3>following:{this.state.following}</h3> 
            <h3>Public repos:{this.state.publicrepos}</h3> 
            <a href={this.state.githubtUrl}>Github Link</a>
            </div> 
            ); 
        } 
    } 
   ReactDOM.render( 
    <UserGithub source="https://api.github.com/users/ibc2k1" />, 
    document.getElementById('root')
    );
    var output=[];
    output.push(<UserGithub/>)
    return output

}

export default Users;