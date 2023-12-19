import {createRoot} from 'react-dom/client'
import React from "react";
import {QueryClient, QueryClientProvider} from 'react-query'
import './_metronic/assets/fonticon/fonticon.css'
import './_metronic/assets/keenicons/duotone/style.css'
import './_metronic/assets/keenicons/outline/style.css'
import './_metronic/assets/keenicons/solid/style.css'
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/vr-web-frontend/routing/AppRoutes'
import {AuthenticationContext} from "./app/vr-web-frontend/context/AuthContext";

const container = document.getElementById('root')
const queryClient = new QueryClient()

if (container) {
  createRoot(container).render(
      <QueryClientProvider client={queryClient}>
          <AuthenticationContext>
              <AppRoutes/>
          </AuthenticationContext>
      </QueryClientProvider>
  )
}
