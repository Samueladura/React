import { Component } from 'react';

class UserGreeting extends Component {

constructor(props) {
super(props)

this.state = {
    isLoggedIn: false
}
}

render() {

    return this.state.isLoggedIn && <div>Welcome Samuel</div>

    // return this.state.isLoggedIn ? (
    //     <div>Welcome Samuel</div>
    //     ) : (
    //     <div>Welocme Guest</div>
    //     )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Samuel</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return <div>Welcome Samuel</div>    
    // } else {
    //         <div>Welcome Guest</div>  
    // }

    // return (
//     <div>
//   <div>Welcome Samuel</div>
//   <div>Welcome Guest</div>
//   </div>
// );
    }
}

export default UserGreeting;