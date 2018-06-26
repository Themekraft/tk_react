import React, { Component } from 'react';
import Splash from '../components/Splash';
import PostEntry from '../components/PostEntry';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }
    componentDidMount() {
        const self = this;
        fetch("http://tk-react.local/wp-json/wp/v2/posts")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                self.setState({
                    isLoaded: true,
                    posts: json
                });
            });
    }

    replaceExcerptBrackets(content) {
        return content.replace(/\[&hellip;]/g, '..');
    }

    render() {
        return (
            <div className="tkr-container-fluid nopad">
                <Splash
                    bg_class="tkr-hot"
                    title="Your Blog"
                    text="mmmm fast eh."
                    link_to="/"
                    link_text="Back Home"
                />

                <div className="tkr-container nopad">
                    <h1>Latest Posts</h1>
                    <span className="tkr-title-underline"></span>

                    <div className="tkr-row">
                        {this.state.posts.map((post) =>
                            <PostEntry
                                key={post.id}
                                image={post.featured_media}
                                date={post.date}
                                title={post.title.rendered}
                                content={this.replaceExcerptBrackets(post.excerpt.rendered)}
                                link_to={post.link}
                                link_text="Read Post"
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
