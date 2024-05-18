import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillSetting } from 'react-icons/ai';
import './styles/sidebar.css';

const Sidebar = () => {
  const links = [
    { icon: <AiFillLinkedin size="38" />, href: 'https://www.linkedin.com/in/hisham-haque-794062258/', text: 'LinkedIn' },
    { icon: <AiFillGithub size="38" />, href: 'https://github.com/HishamHXS', text: 'Github' },
    { icon: <AiFillMail size="38" />, href: 'mailto:hishamhaque11@gmail.com', text: 'Email' },
    { icon: <AiFillSetting size="38" />, href: '', text: 'Settings' }, // Update href when CV link is implemented
    //{ icon: <AiFillFilePdf size="38" />, href: CV, target: '_blank', text: 'Cv' }, // Uncomment when CV link is ready
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col">
      {links.map((link) => (
        <a key={link.text} href={link.href} className="sidebar-icon group">
          {link.icon}
          <span className="sidebar-tooltip group-hover:scale-100">
            {link.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;