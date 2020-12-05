import React from "react";

class App extends React.Component {
  state = { posts: [], users: [] };

  fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts });

        this.fetchUsers();
      });
  }

  fetchUsers() {
    const userIds = [...new Set(this.state.posts.map((post) => post.userId))];

    userIds.forEach((userId) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => {
          this.setState({ users: [...this.state.users, user] });
        });
    });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
