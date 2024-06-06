import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaBehance } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/tirthankar-saha-dibbya-774685234' },
  { icon: <FaGithub />, path: 'https://github.com/tirthansaha' },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/saha.Dibbo' },
  { icon: <FaBehance />, path: 'https://www.behance.net/tirthansaha' },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles = '', iconStyles = '' }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
