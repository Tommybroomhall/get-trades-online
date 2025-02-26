import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  bio,
  linkedin,
  twitter,
  email
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={18} />
            </a>
          )}
          
          {email && (
            <a 
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-blue-600"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;