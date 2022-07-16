import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  useQuery,
  useQueryClient,
} from 'react-query';
import axios from 'axios';

export default function Home() {

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(['oneCall', 'test'],
    async () => axios.get('/api/openweathermap/one-call/?lat=-22.908333&lon=-43.196388'));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="home" style={{ width: '100%' }}>
      <Head>
        <title>Small weather app</title>
      </Head>
      <div>
        <h1>This will be a great weather app!</h1>
      </div>
    </motion.div>
  );
}
