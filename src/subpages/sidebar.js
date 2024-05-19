import React from 'react';
// import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillSetting,AiFillFilePdf  } from 'react-icons/ai';
import '../styles/sidebar.css';

const Sidebar = () => {
  const links = [
    { icon: <AiFillLinkedin size="38" />, href: 'https://www.linkedin.com/in/hisham-haque-794062258/', text: 'LinkedIn' },
    { icon: <AiFillGithub size="38" />, href: 'https://github.com/HishamHXS', text: 'Github' },
    { icon: <AiFillMail size="38" />, href: 'mailto:hishamhaque11@gmail.com', text: 'Email' },
    { icon: <AiFillFilePdf size="38" />, href: '', target: '_blank', text: 'Cv' }, 
    { icon: <AiFillSetting size="38" />, href: '', text: 'Settings' }, 
  ];

  return (
    <div className="sidebar">
      {links.map((link) => (
        <a key={link.text} href={link.href} className="sidebar-icon group">
          {link.icon}
          <span className="sidebar-tooltip">
            {link.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;