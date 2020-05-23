import React from "react";
import axios from "axios";

class AddAfriend extends React.Component {
    state = {
        newFriends:{
            name:"",
            age:"",
            email:""

        }
        }

        handleChanges =event =>{
            this.setState({
                newFriends: {
               ...this.state.newFriends,[event.target.name]:event.target.value
                }
            })
            
        }

        addnewFriend = event => {
            axios.post("http://localhost:5000/api/friends", this.state.newFriends, {
                headers:{Authorization:localStorage.getItem("token")}
            })
            .then(response => {console.log("response from adding a friend", response)})
            .catch(err => {console.log("error from adding a friend", err)})
            event.preventDefault()
        }

        render() {
            console.log(this.state.newFriends)
            return (
                <div className="AddDiv">
                    <h1>Add your new friend</h1>
                    <form onSubmit ={this.addnewFriend}>
                        <input 
                        type="text"
                        name="name"
                        value={this.state.newFriends.name}
                        onChange={this.handleChanges}
                        placeholder="Full name"
                        
                        />
                          <input 
                        type="text"
                        name="age"
                        value={this.state.newFriends.age}
                        onChange={this.handleChanges}
                        placeholder="Age"
                        
                        />
                         <input 
                        type="text"
                        name="email"
                        value={this.state.newFriends.email}
                        onChange={this.handleChanges}
                        placeholder="Email"
                        
                        />

                        <button>Add your friend Now!</button>

                        
                    </form>
                </div>
            )
        }
}

export default AddAfriend;