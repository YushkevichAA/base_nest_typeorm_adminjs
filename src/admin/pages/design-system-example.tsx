import { Box, H4 } from '@adminjs/design-system';
import React, { FC, useEffect, useState } from 'react';
import ModalExample from '../components/design-system-examples';
import { ApiClient } from 'adminjs';

const DesignSystemExample: FC = () => {
  const [data, setData] = useState<string | null>(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        const data = response?.data as { message: string } | null;
        if (!data) return;

        setData(data.message || 'данные не пришли'); // { message: 'Hello World' }
      })
      .catch((error) => {
        if (error instanceof Error) {
          // console.log(error.message);
        }
        // console.log(error);
        // handle any errors
      });
  }, []);

  return (
    <Box m="xl" variant="white">
      <Box>
        <H4>Modal example</H4>
        {data}
        <ModalExample />
      </Box>
    </Box>
  );
};

export default DesignSystemExample;
