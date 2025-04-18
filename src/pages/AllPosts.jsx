import { useEffect } from 'react';
import { PostCard } from '../components';
import dbService from "../appwrite/db_config";
import { setPosts } from '../features/post/postSlice';
import { useSelector, useDispatch } from 'react-redux';
function AllPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {

    const fetchPosts = async () => {
      const data = await dbService.getAllPosts();
      if (data) dispatch(setPosts(data.documents));
    }
  
    fetchPosts();

  }, [dispatch]);
  return (
  <div className='w-full'>
    <div className='flex flex-wrap justify-center gap-5 sm:gap-20'>
      {posts.map((post) => (
        <div key={post.$id} className='min-w-64 w-64 lg:w-80 min-h-32 rounded-lg hover:shadow-black dark:hover:shadow-white hover:shadow-md transition-all ease-in-out'>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default AllPosts;