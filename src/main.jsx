import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
const App = lazy(() => import("./App"))
import { Provider } from "react-redux"; // ✅ REQUIRED
import { BrowserRouter } from 'react-router-dom'
import store from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
          <Toaster 
          toastOptions={{
            style: {
              position:'top-right',
              background: '#283046',
              color: '#fff',
            },
          }}
          />
        </Suspense>
      </BrowserRouter>
    </Provider>s
  </StrictMode>,
)
