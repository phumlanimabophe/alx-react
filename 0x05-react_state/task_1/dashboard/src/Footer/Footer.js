import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

/**
 * Footer Component:
 * This functional component represents the footer section of the application.
 * It displays copyright information along with the current year and footer text.
 *
 * @returns {JSX.Element} - React component
 */
function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  );
}

export default Footer;
