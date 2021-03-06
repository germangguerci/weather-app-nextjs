import Head from 'next/head';
import { motion } from 'framer-motion';

import CityWeather from '../components/public/CityWeather';
import SectionContainer from '../components/common/SectionContainer';

export default function Home() {

  //Lat and lon from Rio De Janeiro.
  const lat = "-22.908333";
  const lon = "-43.196388";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="home" style={{ width: '100%' }}>
      <Head>
        <title>Small weather app</title>
      </Head>
      <SectionContainer >
        <CityWeather lat={lat} lon={lon} />
      </SectionContainer>
    </motion.div>
  );
}
