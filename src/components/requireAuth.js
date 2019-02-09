// NOTE: this HOC wraps a child Component passed in as an arguement (like CommentBox) just like the 'connect' function
// And it provides that child Component with a bunch of added functionality

// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component{
    // component just got rendered
    componentDidMount() {
      this.shouldNav();
    }

    // our component just got updated
    componentDidUpdate(prevProps, prevState) {
      this.shouldNav();
    }

    // auth helper method
    shouldNav = () => {
      if(!this.props.auth){
        this.props.history.push('/') // .props.history available to any Route Component
      }
    }

    render(){
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.auth
  })

  return connect(mapStateToProps)(ComposedComponent);
};
