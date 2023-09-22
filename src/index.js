import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import { ChakraProvider } from '@chakra-ui/react';
import Admin from './admin/admin';
import Header from './admin/header_admin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Header/>
    <Admin/>
  </ChakraProvider>
)