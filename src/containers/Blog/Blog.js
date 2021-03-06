import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state ={
        posts:[],
        selectedPostId: null,
        error:false
    };
componentDidMount(){
  

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        const posts = response.data.slice(0,4);

        const updatePosts = posts.map(
            post =>{
                return {
                    ...post,
                    author:'subbu'
                }
            }
        )
        this.setState({posts:updatePosts});
        console.log(response);
    })
    .catch(error =>{
        this.setState({error:true});
    })
    ;
}

postSelectedJandler =(id) =>{

    this.setState({selectedPostId:id})
}

    render () {
        let posts =<p>error</p>;

        if(!this.state.error){
             posts = this.state.posts.map(
                post => {
                    return  <Post
                    clicked ={() =>{
                
                        this.postSelectedJandler(post.id)
                    }}
                     author={post.author} 
                    title={post.title} key={post.id} />;
                }
                );
        }


        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;