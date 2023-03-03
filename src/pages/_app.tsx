import { Notifications } from '@mantine/notifications';
import type { CustomAppPage } from 'next/app';
import { AppMantineProvider, GlobalStyleProvider } from '@/lib/mantine';

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <GlobalStyleProvider>
      <AppMantineProvider>
        <Notifications />
        {getLayout(<Component {...pageProps} />)}
      </AppMantineProvider>
    </GlobalStyleProvider>
  );
};

export default App;
