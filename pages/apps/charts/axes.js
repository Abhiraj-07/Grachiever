import Head from 'next/head';

import Axes from '../../../demos/vis/showcase-sections/axes-showcase';

const AxesPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/react-vis.css" />
    </Head>
    <Axes />
  </>
);

export default AxesPage;
