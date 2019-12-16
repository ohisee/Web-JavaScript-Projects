/**
 * @fileoverview Auth index component
 */
import React, { Component } from "react";
import User from "../../components/User";

class AuthIndexPage extends Component {
  /**
   * Life cycle hook, fetch data and pre-populate this component
   */
  static getInitialProps(context) {
    console.log(context);
    // Use async await to reach out to server to get data
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Nextjs App' });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h3>Auth Index Main Page of {this.props.appName}</h3>
        <User name="Person Name" title="doing something"></User>
      </div>
    )
  }
}

// const AuthIndexPage = () => {
//   return (
//     <div>
//       <h3>Auth Index Main Page</h3>
//       <User name="Person Name" title="doing something"></User>
//     </div>
//   )
// };

export default AuthIndexPage;
