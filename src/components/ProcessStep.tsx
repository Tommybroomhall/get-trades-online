import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast }) => {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fd8f01] text-white font-bold text-xl">
            {number}
          </div>
          {!isLast && (
            <div className="absolute top-12 bottom-0 left-6 w-0.5 bg-[#fd8f01] opacity-30"></div>
          )}
        </div>
        <div className="ml-6 pb-16">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep; 