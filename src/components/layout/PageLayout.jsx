
import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="page-container section-padding min-h-[calc(100vh-10rem-15rem)]"
    >
      {title && (
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h1>
      )}
      {children}
    </motion.div>
  );
};

export default PageLayout;
  