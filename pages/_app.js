import Navbar from '@/components/Navbar';
import About from './about.js'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />

  
  </> 
  );
}
