import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/hbnblogo.jpg'; // Importing logo asset
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators'; // Importing logout action creator


// Styles for the Header component
const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid #E0354B",
    marginBottom: 60
  },
  img: {
    width: 160,
    height: 160
  },
  heading: {
    color: "#E0354B"
  },
  logOut: {
    fontStyle: "italic",
    textDecoration: "underline",
    cursor: "pointer"
  }
});

// Header component definition
export class Header extends React.Component {
  render() {
    // Destructuring props
    const { user, isLoggedIn } = this.props;

    // Function to display welcome message and logout link if user is logged in
    const displayText = () => {
      if (isLoggedIn) {
        return (
          <section id="logoutSection">Welcome {user.email} 
            <a className={css(styles.logOut)} onClick={this.props.logOut}> (logout)</a>
          </section>
        );
      }
    }

    return (
      <>
        <div className={css(styles.header)}>
          <img className={css(styles.img)} src={logo} alt="logo" /> {/* Rendering logo */}
          <h1 className={css(styles.heading)}>School dashboard</h1> {/* Rendering heading */}
        </div>
        {displayText()} {/* Rendering welcome message and logout link */}
      </>
    );
  }
}

// Mapping state to props for the Header component
const mapStateToProps = (state) => {
  const user = state.get("user"); // Getting user data from Redux state
  const isLoggedIn = state.get("isUserLoggedIn"); // Checking if user is logged in
  return { user, isLoggedIn };
}

// Mapping dispatch to props for the Header component
const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(logout()) }; // Dispatching logout action
}

// PropTypes for type-checking
Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  isLoggedIn: PropTypes.bool
}

// Default props for the Header component
Header.defaultProps = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
}

// Connecting Header component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);
