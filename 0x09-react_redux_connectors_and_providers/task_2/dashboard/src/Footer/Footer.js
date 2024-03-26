import React from 'react'; // Import React library for building UI components
import { StyleSheet, css } from 'aphrodite'; // Import Aphrodite for styling
import { getFullYear, getFooterCopy } from '../utils/utils'; // Import utility functions
import { connect } from 'react-redux'; // Import connect function from React Redux for connecting components to Redux store
import PropTypes from 'prop-types'; // Import PropTypes for type-checking props

// Define CSS styles using Aphrodite
const styles = StyleSheet.create({
  AppFooter: {
    borderTop: "4px solid #E0354B",
    width: '99%',
    '@media (max-width: 900px)': {
      position: "relative",
      width: "100%",
      marginTop: 60
    }
  },
  AppFooter_p: {
    fontStyle: "italic",
    textAlign: "center"
  }
});

// Define the Footer component
export function Footer(props) {
  // Define the content of the footer based on whether the user is logged in
  const footerText = (props.isLoggedIn) ? <a href="#">Contact us</a> : `Copyright ${getFullYear()} - ${getFooterCopy(false)}`;

  return (
    <div className={css(styles.AppFooter)}>
      <p className={css(styles.AppFooter_p)}>{footerText}</p>
    </div>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => {
  const user = state.get("user");
  const isLoggedIn = state.get("isUserLoggedIn");
  return { user, isLoggedIn };
}

// Define prop types for the Footer component
Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  isLoggedIn: PropTypes.bool
}

// Define default prop values for the Footer component
Footer.defaultProps = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
}

// Connect the Footer component to the Redux store
export default connect(mapStateToProps)(Footer);
