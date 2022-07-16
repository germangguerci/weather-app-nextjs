import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="home" style={{ width: '100%' }}>
      <Head>
        <title>B21 | Te ayudamos a financiar lo que tanto necesitas</title>
      </Head>
      <div>
        <h1>This will be a great weather app!</h1>
      </div>
    </motion.div>
  );
}
