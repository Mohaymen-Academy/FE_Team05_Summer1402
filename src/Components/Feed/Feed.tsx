import {Stack} from '@chakra-ui/react';
import React from 'react';
import Post from './Post/Post';
import {postsDetails} from '../../util/Constants';

function Feed() {
  return (
    <section id="feed" className="grid grid-cols-1 gap-8">
      {postsDetails.map((post) => (
        <Post img={post.img} />
      ))}
    </section>
  );
}

export default Feed;
