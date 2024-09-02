import { Component } from 'react';

import './App.css';

import { Posts } from './components/Posts';
import { Button } from './components/Button';
import { loadPosts } from './utils/load-posts'

class App extends Component {

  state = {
    allPosts: [],
    posts: [],
    page: 0,
    postPerPage: 10,
    searchTitle: ''
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const { page, postPerPage } = this.state;
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const { allPosts, posts, page, postPerPage } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({
      posts,
      page: nextPage
    })
  }

  handleSearch = (e) => {
    const {value} = e.target;

    this.setState({searchTitle: value})
  }

  render() {
    const { posts, allPosts, searchTitle } = this.state;
    const noMorePosts = posts.length >= allPosts.length 
    const filteredPosts = !!searchTitle ? 
      posts.filter( post => post.title.toLowerCase().includes(searchTitle.toLowerCase()))
      : posts;

    return (
      <section className='container'>
        <h1>Search</h1>
        <input 
          type="search"
          onChange={this.handleSearch}
        /> <br/> <br/>
        <Posts posts={filteredPosts} />
        <div className="button-container">
          {!searchTitle && (
          <Button
            text={'Load Posts'}
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
        </div>
      </section>
    )
  }
}

export default App;
