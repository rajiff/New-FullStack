import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import FriendCards from '../Components/FriendCards';


export default class MainGrid extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 text-center profile-info">
                        <h5>PROFILE INFORMATION</h5>
                        <ProfileCard/>

                    </div>
                    <div class="col-sm-7 text-center friend-list">
                        <h5>FRIENDS</h5>
                        <div class="d-flex">
                        {
                            [1,2,3,4,5,6].map(i=><FriendCards/>)
                        }
                        </div>

                    </div>
                    <div class="col-sm-2 text-center">
                    <h5>RECOMMENDATION</h5>
                    </div>
                </div>
            </div>
        );

    }
}