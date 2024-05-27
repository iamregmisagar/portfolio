import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[50rem] md:h-[70rem] flex items-center justify-center relative"
      ref={containerRef}
      style={{ background: '#171717' }} 
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #ffffff4d, 0 9px 20px #ffffff4a, 0 37px 37px #ffffff42, 0 84px 50px #ffffff26, 0 149px 60px #ffffff0a, 0 233px 65px #ffffff03",
      }}
      className="max-w-5xl -mt-12 mx-auto min-h-[40rem] md:min-h-[40rem] lg:min-h-[30rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-black text-white rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};



export default ContainerScroll;
