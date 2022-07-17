import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  useQuery,
} from 'react-query';

import getCityWeather from '../utils/getCityWeather';

export default function Home() {

  //Lat and lon from Rio De Janeiro.
  const lat = "-22.908333";
  const lon = "-43.196388";

  const { isLoading, error, data } = useQuery(['getCityWeather', { lat, lon }], async () => getCityWeather(lat, lon));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="home" style={{ width: '100%' }}>
      <Head>
        <title>Small weather app</title>
      </Head>
      <div>
        <h1>This will be a great weather app!</h1>
        {isLoading && "loading"}
        {error && "error"}
        {data && "data loaded"}
      </div>
    </motion.div>
  );
}
