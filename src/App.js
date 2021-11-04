import UserHeader from './components/UserHeader'
import { User } from './dummyData/User'

function App() {

  const user = User

  return (
    <div className="App">
      <UserHeader user={user} />
    </div>
  );
}

export default App;
