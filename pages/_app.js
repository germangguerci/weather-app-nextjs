import { QueryClientProvider, QueryClient } from 'react-query';

import WheaterContextProvider from "../context/WeatherContext";
import GlobalStyles from '../configs/theme';

const queryClient = new QueryClient();


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
