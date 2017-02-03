import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	
	renderPosts() {
		return this.props.posts.map(post => {
			return ( 
				<Link key={post.id} to={'posts/' + post.id}>
				<li className="list-group-item" key={post.id}>
					<strong>{post.title}</strong>
					<span className="pull-right">{post.categories}</span>
				</li>
				</Link>

			);
		});
	}

	render() {
		if(!this.props.posts) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<div className="text-right">
					<Link to="posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
					<h3>Posts</h3>
					<ul className="list-group">
						{this.renderPosts()}
					</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);