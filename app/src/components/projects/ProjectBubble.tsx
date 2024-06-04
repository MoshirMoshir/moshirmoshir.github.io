import React from 'react';

interface ProjectBubbleProps {
  title: string;
  onClick: () => void;
}

const ProjectBubble: React.FC<ProjectBubbleProps> = ({ title, onClick }) => {
  return (
    <div className="floating-icon" onClick={onClick}>
      <div className="icon-content">{title}</div>
    </div>
  );
};

export default ProjectBubble;
