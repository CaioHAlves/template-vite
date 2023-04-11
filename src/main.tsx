import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback={(<div></div>)}>
        <App />
    </Suspense>,
)
