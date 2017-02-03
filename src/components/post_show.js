import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostShow extends Component {
	static contextTypes = {
		router : PropTypes.object
	}

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}
	
	onDeleteClick() {
		this.props.deletePost(this.props.post.id, this.context.router);
	}

	render() {
		const {post} = this.props;

		if(!this.props.post) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<Link to="/">Back to Index</Link>
				<h3>{post.title}</h3>
				<h6>{post.categories}</h6>
				<p>{post.content}</p>
				<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-right">
					Delete
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);