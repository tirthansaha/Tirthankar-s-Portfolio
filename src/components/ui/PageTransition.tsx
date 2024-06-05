"use client";
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  return (
  <AnimatePresence>    
    <div key={pathname}>
      <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 1, duration: 1, ease:"easeInOut"},
      }}
      className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </div>
    
    </AnimatePresence>
  );
};

export default PageTransition;

















/* "user client";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({children}) => {
  const pathname = usePathname();
  return <AnimatePresence> {children} </AnimatePresence>;
};

export default PageTransition;} */



/* 
"use client";
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      <div key={`page-${pathname}`}>{children}</div>
    </AnimatePresence>
  );
};

export default PageTransition;
*/