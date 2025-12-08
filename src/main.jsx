import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'



const styles = [
 
  'background: linear-gradient(to right, #885CF6, #EC4899)', 
  'color: #ffffff',
  'padding: 10px 20px',
  'border: 2px solid #3882F6',
  'border-radius: 5px',
  'font-size: 1.2em',
  'font-family: Saira, sans-serif',
  'font-weight: bold'
].join(';');

const email ='sivaprasadpv77@gmail.com'; 

console.log("%c👋 If you're here, let's collaborate!", styles);
console.info(`📧 You can reach me at: ${email}`);



createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


