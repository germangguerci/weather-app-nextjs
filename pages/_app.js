import { QueryClientProvider, QueryClient } from 'react-query';

import WheaterContextProvider from "../context/WeatherContext";
import GlobalStyles from '../configs/theme';

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
        <Component {...pageProps} />
      </WheaterContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
