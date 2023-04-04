import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Todos } from './components/Todos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Todos />
  </StrictMode>
);
