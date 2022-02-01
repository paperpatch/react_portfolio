import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'HTML',
      category: 'frontend'
    },
    {
      name: 'CSS',
      category: 'frontend'
    },
    {
      name: 'JavaScript',
      category: 'frontend'
    },
    {
      name: 'Bootstrap',
      category: 'frontend'
    },
    {
      name: 'Handlebars',
      category: 'frontend'
    },
    {
      name: 'React',
      category: 'frontend'
    },
    {
      name: 'NodeJS',
      category: 'frontend'
    },
    {
      name: 'Jest',
      category: 'backend'
    },
    {
      name: 'MySQL',
      category: 'backend'
    },
    {
      name: 'MongoDB',
      category: 'backend'
    },
    {
      name: 'Heroku',
      category: 'backend'
    },
    {
      name: 'Git Bash',
      category: 'tools'
    },
    {
      name: 'GitHub',
      category: 'tools'
    },
    {
      name: 'npm',
      category: 'tools'
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/icons/${category}/${i}.svg`)}
            alt={image.name}
            className="col code-icon"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
