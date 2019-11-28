import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=58"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=60"
            },
            content:  ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." )
          }
        ]
      },

      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=58"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=60"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },

      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=58"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=60"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 4,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
    ]
  };

  render(){
    // const { posts } = this.state;
    return(
      <div className="postList">
        {this.state.posts.map(post => ( <PostItem key={post.id} {...post} />))}  
      </div>
    );
  }

}



export default PostList;


// {posts.map( post => (
//   <PostItem key={post.id} {...post} /> 
// ))},