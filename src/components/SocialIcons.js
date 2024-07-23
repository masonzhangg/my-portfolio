import React from 'react';


const SocialIcons = () => {

  const containerStyle = {
    marginLeft: '12px',
  };

  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={containerStyle}>
      <a className="icon" style={styles.icon} href="https://github.com/masonzhangg/" target="_blank">
        <i className="fa-brands fa-github" aria-hidden="true" title="Mason Zhang' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/masonzhangg/" target="_blank">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Mason Zhang' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="mailto:masonzhang@berkeley.edu" target="_blank">
        <i className="fa-regular fa-envelope" aria-hidden="true" title="Mason Zhang Email"></i>
      </a>
    </div>
  );
};


export default SocialIcons;
