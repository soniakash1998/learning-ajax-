import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to = "/posts">Home</NavLink></li>
                            <li><NavLink to= {{
                                pathname : "/new-post",
                                hash : '#submit',
                                search : "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path = "/new-post" exact component = {NewPost} />
                    <Route path = "/posts" component = {Posts} />
                    <Redirect from = "/" to = "/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;