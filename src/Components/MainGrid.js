import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import FriendCards from '../Components/FriendCards';
import RecommendationCard from './RecommendationCard';


export default class MainGrid extends Component {
    render() {
        if (this.props.friendList) {

            return (
                <div className="container-fluid d-flex main-grid">
                    <div className="row d-flex">
                        <div className="col-sm-3 text-center profile-info">
                            <h5 class="info-heading text-info">PROFILE INFORMATION</h5>
                            <ProfileCard userInfo={this.props.userInfo} userId={this.props.userId} />
                        </div>

                        <div className="col-sm-6 text-center friend-list">
                            {
                                this.props.dispChange === false ?
                                    <h5 class="info-heading text-info">FRIENDS</h5>
                                    : <h5 class="info-heading text-info">RESULTS</h5>
                            }
                            <div className="d-flex flex-row">

                                {
                                    this.props.dispChange === false ?
                                        this.props.friendList.map(friend => <FriendCards friendName={friend.name} changeUserPage={this.props.changeUserPage} friendId={friend.id} display="none" removeFriend={this.props.removeFriend} />)
                                        : this.props.friendList.map(searched => <FriendCards friendName={searched.name} friendId={searched.id} addFriend={this.props.addFriend} display="block" />)
                                }
                            </div>

                        </div>
                        <div className="col-sm-3 text-center recommendation-list">
                            {
                                this.props.recommendationDisp === false ?
                                    <h5 class="info-heading text-info">RECOMMENDATION 1</h5>
                                    : <h5 class="info-heading text-info">RECOMMENDATION 2</h5>
                            }
                            <div className="d-flex flex-column">
                                {
                                    this.props.recommendationDisp === false ?
                                    this.props.friendList.map(friend => <RecommendationCard friendName={friend.name} friendId={friend.id} addFriend={this.props.addFriend}/>)
                                    :this.props.friendList.map(friend => <RecommendationCard friendName={friend.name} friendId={friend.id} addFriend={this.props.addFriend}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );

        } else {

            return (
                <div className="container-fluid main-grid">
                    <div className="row">
                        <div className="col-sm-3 text-center profile-info">
                            <h5 class="info-heading text-info">PROFILE INFORMATION</h5>
                            <ProfileCard userInfo={this.props.userInfo} userId={this.props.userId} />
                        </div>

                        <div className="col-sm-6 text-center friend-list">
                            {
                                this.props.dispChange === false ?
                                    <h5 class="info-heading text-info">FRIENDS</h5>
                                    : <h5 class="info-heading text-info">RESULTS</h5>
                            }
                            <div className="d-flex flex-row">

                                {
                                    this.props.dispChange === true ?[1,2,3,4].map(searched => <FriendCards friendName={searched.name} friendId={searched.id} addFriend={this.props.addFriend} display="block" />)
                                    :null
                                }
                            </div>

                        </div>
                        <div className="col-sm-3 text-center recommendation-list">
                            {
                                this.props.recommendationDisp === false ?
                                    <h5 class="info-heading text-info">RECOMMENDATION 1</h5>
                                    : <h5 class="info-heading text-info">RECOMMENDATION 2</h5>
                            }
                            <div className="d-flex flex-column">
                                {
                                    this.props.recommendationDisp === false ?
                                    [1,2,3,4,5,6].map(friend => <RecommendationCard friendName={friend.name} friendId={friend.id} addFriend={this.props.addFriend} />)
                                    :[1,2,3,4,5,6].map(friend => <RecommendationCard friendName={friend.name} friendId={friend.id} addFriend={this.props.addFriend}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


    }
}