"use client";

import { useLayoutEffect } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import Link from "next/link";
import lockScroll from "utils/lockScroll";
import useWindowWidth from "utils/useWindowWidth";
import MobileNavToggle from "./MobileNavToggle";

const MobileNav = () => {
  const [open, toggleOpen] = useCycle(false, true);
  const width = useWindowWidth();

  useLayoutEffect(() => {
    if (open && width < 768) lockScroll(true);
    else if (open && width >= 768) lockScroll(false);
    else if (!open) lockScroll(false);
  }, [open, width]);

  return (
    <>
      <MobileNavToggle open={open} toggleOpen={toggleOpen} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed left-0 top-0 z-20 h-screen w-full border-b border-b-yellow bg-black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex h-screen flex-col items-center justify-center gap-8 text-gold">
              <Link
                href="/"
                className="text-yellow text-xl font-display"
                onClick={() => toggleOpen()}
              >
                EV7393
              </Link>
              <Link
                href="outreach"
                className="text-yellow text-xl font-display"
                onClick={() => toggleOpen()}
              >
                OUTREACH
              </Link>
              <Link
                href="tech"
                className="text-yellow text-xl font-display"
                onClick={() => toggleOpen()}
              >
                TECH
              </Link>
              <Link
                href="awards"
                className="text-yellow text-xl font-display"
                onClick={() => toggleOpen()}
              >
                AWARDS
              </Link>
              <Link
                href="team"
                className="text-yellow text-xl font-display"
                onClick={() => toggleOpen()}
              >
                TEAM
              </Link>
              <Link
                href="sponsors"
                className="text-yellow text-xl font-display"
                onClick={() => toggleOpen()}
              >
                SPONSORS
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
