import React from 'react';
import { ShowPropertyProps } from 'adminjs';
import { Box } from '@adminjs/design-system';

const RandomPicture: React.FC<ShowPropertyProps> = () => {
  // Picsum generates a random 200x200 photo
  const url = 'https://picsum.dev/800/600';

  return (
    <Box>
      <img src={url} />
    </Box>
  );
};

export default RandomPicture;
