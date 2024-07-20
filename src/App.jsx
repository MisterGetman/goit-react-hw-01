import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

import userData from "./components/Profile/data.json";
import friends from "./components/FriendList/data.json";
import transactions from "./components/TransactionHistory/data.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
