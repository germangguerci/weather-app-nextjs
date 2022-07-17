import { QueryClientProvider, QueryClient } from 'react-query';

import WheaterContextProvider from "../context/WeatherContext";
import GlobalStyles from '../configs/theme';
import Layout from '../components/common/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: (1000 * 60 * 60 * 12),
      cacheTime: (1000 * 60 * 60 * 24)
    },
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WheaterContextProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WheaterContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
