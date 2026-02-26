import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewsDataFeed from './assets/components/NewsFeed.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsDataFeed />
  </StrictMode>,
)
