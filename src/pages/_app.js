
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from '../../store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from '@/Shared/Loading'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps: { session, ...pageProps },
}) {
  let persistor = persistStore(store)
  const getLayout = Component.getLayout || ((page) => page)
  return ( <div><Provider store={store}>
 {/* <PersistGate  loading={<Loading></Loading>} persistor={persistor}> */}
    {
      <SessionProvider session={session}>
      {  getLayout(<Component {...pageProps} />)}
     </SessionProvider>
    }
    {/* </PersistGate> */}
  </Provider> 
  <ToastContainer></ToastContainer>
  </div>
 

) 


} 
