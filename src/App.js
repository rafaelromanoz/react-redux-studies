import Login from './pages/Login';
import SideBar from './pages/SideBar';
import { connect } from 'react-redux';

function App({ logged }) {
  if (logged) {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
  return <Login />;
}
const mapStateToProps = (state) => ({
  logged: state.loginReducer.email,
});
export default connect(mapStateToProps)(App);
