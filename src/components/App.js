// dependencies
import React from 'react';
import { Route } from 'react-router-dom';


// user files
import CommentBox from './CommentBox'
import CommentList from './CommentList'

export default () => {
  return(
    <div>
      <Route path="/post" component={CommentBox}/>
      <Route exact path="/" component={CommentList}/>
    </div>
  );
};
