import Post from './Post';
import './styles/styles.css'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo.png';

const post = new Post('webpack post title', webpackLogo);
console.log('post to string', post.toString());

console.log('json', json);
