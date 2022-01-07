import React from 'react';
import './Login.css';
import { loginUrl } from './spotify'

function Login() {
    return(
        <div className='Login-page'>
            <img className='Login-logo' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png' alt='Spotify Logo' />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
