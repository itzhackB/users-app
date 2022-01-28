import './App.css';
import { getUsers } from './Redux/actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import UserCard from './Components/Pages/UserCard';
import Footer from './Components/Features/Footer';
import Header from '../src/Components/Features/Header'


function App() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div className="user-list-app">
      <Header/>
      <ul className="grid-container fade-in">
        {
          users.length > 0 ? (
            users.map((user) => {
              return <UserCard user={user} key={user.email} />
            })
          )
            : (
              < div className="loading message">
                <div className="spinning-circle"></div>
                Please wait, the page still loading...
              </div>
            )
        }
   
      </ul >

      <Footer />

    </div >
  );
}

export default App;
