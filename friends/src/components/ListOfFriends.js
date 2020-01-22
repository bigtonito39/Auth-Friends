import React from "react";
import {GetTheToken} from "../components/GetTheToken";

class ListOfFriends extends React.Component {
    state= {
        FriendList:[]
    };

    componentDidMount (){
        this.getData();
    }

    getData = () =>{
        GetTheToken()
        .get("/friends")
        .then(response => {
            console.log(response.data)
            this.setState({...this.state, FriendList:response.data})
        })
        .catch(err => {console.log("error", err)})
    }
    
    render(){
        return (
            <div className="friendList">
                <h1>All The Friends are here!</h1>

                {this.state.FriendList.map( friend =>
                <div className="friendsdetailsDiv" key={friend.id}>
    <p>name:{friend.name}</p>
    <p>name:{friend.age}</p>
    <p>name:{friend.email}</p>
                    </div>
            
                )}
            </div>
        )
    }
}
export default ListOfFriends;