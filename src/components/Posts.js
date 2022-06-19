const Posts = () => {
    const posts = [
        {id: 1,
          content: ['Coding Temple Rules!', '1+1 = 2', 'JSON Derulo'],
          timestamp: 'yesterday',
          author: {
            username: 'Nate'
          }},
          {id: 2,
            content: ['Coding Temple Rules!', '1+1 = 2', 'JSON Derulo'],
            timestamp: 'yesterday',
            author: {
              username: 'Nate'
            }}
        ];
        return(
            <>
                <h1>Here are some blog posts:</h1>
                    {posts.length == 0 ?
                    <p>Fake API call failed! Nothing to see here!</p>
                    :
                    posts.map(post => {
                    return (
                        <p key={post.id}>
                        <b>{post.author.username} &mdash; {post.timestamp}</b>
                        <br />
                        {post.content}
                        </p>
                    )
                    })
                }
            </>
        )
}

export default Posts;