import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy( () => import('./containers/Posts'));

class App extends Component {
  //2
  // state = {showPosts:false};

  // modeHandler = () => {
  //   this.setState(prevState => {
  //     return { showPosts: !prevState.showPosts}
  //   });
  // };
  render() {
    return (

      //2
      // <React.Fragment>
      //   <button onClick={this.modeHandler}>Toggle Mode</button>
      //   {this.state.showPosts ? (
      //     <Suspense fallback={<div>Loading....</div>}>
      //             <Posts />
      //       </Suspense>
      //     ) : (
      //       <User />
      //     )}
      // </React.Fragment>
      
      //1
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          {/* <Route path="/posts" component={Posts} /> */}
          <Route path="/posts" render={() => 
            <Suspense fallback={<div>Loading....</div>}>
              <Posts />
            </Suspense>}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
