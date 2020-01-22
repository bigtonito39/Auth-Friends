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
            this.setState({...this.state, FriendList:response.data})
        })
        .catch(err => {console.log("error", err)})
    }
    
    render(){
        return (
            <div>
                <h1>All The Friends are here!</h1>

                {this.state.FriendList.map( friend =>
                <div>
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