import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Modal from './Modal';

export default class Jumbotron extends Component{

    render(){
      return(
        <div class="jumbotron">
        <div class="container">
            <h1 class="display-4 text-center">Friend-zone</h1>
        <p class="lead text-center">Connect with people all over the world</p>
        <hr class="my-4"/>
        <p class="text-center">You're ready to go in 2 Simple steps. Enjoy this virtual world we created</p>
        <div class="text-center">
          <a class="btn btn-secondary btn-lg mr-2" href="#" role="button">Sign Up</a>
          <button class="btn btn-info btn-lg" href="/" role="button"><NavLink to="/User">Sign in</NavLink></button>
        </div>
        </div>
        <Modal/>
      </div>
      );
    }
}

