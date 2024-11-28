import Layout from '../components/layouts/layout';
import 'react-calendar/dist/Calendar.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}