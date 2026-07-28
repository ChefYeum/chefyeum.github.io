import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexPage from './pages/index';
import ResumePage from './pages/cv';
import CVPrintPage from './pages/cv-print';
import BlogPage from './pages/blog';
import NotFoundPage from './pages/404';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cv" element={<ResumePage />} />
        <Route path="/cv-print" element={<CVPrintPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
