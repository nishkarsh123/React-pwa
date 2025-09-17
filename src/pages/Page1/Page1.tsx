import { Typography } from '@mui/material';

import { FullSizeCentered } from '@/components/styled';

function Page1() {
  return (
    <>
      <meta name="title" content="Page 1" />
      <FullSizeCentered>
        <Typography variant="h3">Page 1</Typography>
        <Typography variant="h3">New update</Typography>
      </FullSizeCentered>
    </>
  );
}

export default Page1;
