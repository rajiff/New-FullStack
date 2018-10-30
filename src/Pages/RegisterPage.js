import React,{Fragment} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
let responseString;
export default class RegisterPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            id:"",
            description:"",
            age:"",
            name:""
        }
    }
    handleChangeUsernameEntry(e) {
        this.setState({ id: e.target.value });
    }
    handleChangeNameEntry(e) {
        this.setState({ name: e.target.value });
    }
    handleChangeDescriptionEntry(e) {
        this.setState({ description: e.target.value }); 
    }
    handleChangeAgeEntry(e) {
        this.setState({ age: e.target.value }); 
    }

    showAlert(){
        alert(responseString);
    }
    addNewUser(e) {
        e.preventDefault();
        console.log("Entering Add User");
        const newUser = {
            id: this.state.id,
            description:this.state.description,
            age:this.state.age,
            name:this.state.name
        };

        axios.post('http://localhost:3001/users', newUser)
            .then(res => {
                console.log("User is created")
                responseString="User is created";
            }).catch(err => {
                console.log("Error Creating a User, May already exist");
                responseString="Error Creating a User, May already exist";
            });

    }
    render(){
        return(
            <Fragment>
                <div className="bg-image">
                    <h1 className="text-center register-logo text-light">Friend-Zone</h1>
                    <div className="register-form">
                        <h3 className="text-center register-head">Register</h3>
                        <form className="text-center" onSubmit={this.addNewUser.bind(this)}>
                            <input type="text" placeholder="Enter Username" className="form-control" onChange={this.handleChangeUsernameEntry.bind(this)} />
                            <input type="text" placeholder="Name" className="form-control" onChange={this.handleChangeNameEntry.bind(this)} />
                            <input type="text" placeholder="Enter Description" className="form-control" onChange={this.handleChangeDescriptionEntry.bind(this)} />
                            <input type="text" placeholder="Enter Age" className="form-control" onChange={this.handleChangeAgeEntry.bind(this)}/>
                            <button type="submit" className="btn btn-info" ><NavLink to="/loginPage">Register</NavLink></button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}