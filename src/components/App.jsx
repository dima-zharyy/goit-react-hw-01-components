import Profile from './Profile';
import user from './user.json';

// const {
//   username,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = user;

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={10}
        views={15}
        likes={30}
      />
    </div>
  );
};
