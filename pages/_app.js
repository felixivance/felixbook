import { Provider } from 'next-auth/client';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
