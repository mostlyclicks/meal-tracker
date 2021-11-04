import UserHeader from './components/UserHeader'
import Days from './components/Days'
import { User } from './dummyData/User'


function App() {

  const user = User

  return (
    <div className="App">
      <UserHeader user={user} />
      <Days />
    </div>
  );
}

export default App;
