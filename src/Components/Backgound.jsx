import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Header from "./Header.jsx";
import { Element } from "react-scroll";
import Index from "./Home/index.jsx";
import { useEffect } from "react";

const Background = () => {
    // Use motion values for smooth animation
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Apply spring physics for smoother movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Transform for parallax effects with minimal movement
    const backgroundX = useTransform(smoothX, [-1, 1], ['-2%', '2%']);
    const backgroundY = useTransform(smoothY, [-1, 1], ['-2%', '2%']);
    const contentX = useTransform(smoothX, [-1, 1], ['1%', '-1%']);
    const contentY = useTransform(smoothY, [-1, 1], ['1%', '-1%']);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Convert mouse position to normalized values (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Create floating elements with predictable motion
    const FloatingElement = ({ size, color, x, y, delay, duration }) => (
        <motion.div
            className="absolute rounded-full"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                filter: `blur(${size / 5}px)`,
                x, y
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        />
    );

    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-[#0c1c29]">
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle at 30% 40%, #1a3849 0%, transparent 30%), radial-gradient(circle at 80% 60%, #1f516b 0%, transparent 40%)",
                    x: backgroundX,
                    y: backgroundY
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

            {/* Subtle grid */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                    backgroundSize: "clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)",
                    x: useTransform(smoothX, [-1, 1], ['-1%', '1%']),
                    y: useTransform(smoothY, [-1, 1], ['-1%', '1%'])
                }}
            />

            {/* Floating elements - using fixed positions for stability */}
            <div className="absolute inset-0 overflow-hidden">
                <FloatingElement size="clamp(100px, 15vw, 300px)" color="rgba(29, 78, 216, 0.15)" x="10%" y="20%" delay={0} duration={8} />
                <FloatingElement size="clamp(150px, 20vw, 350px)" color="rgba(20, 184, 166, 0.1)" x="70%" y="65%" delay={2} duration={10} />
                <FloatingElement size="clamp(80px, 10vw, 200px)" color="rgba(217, 119, 6, 0.08)" x="85%" y="30%" delay={1} duration={7} />
                <FloatingElement size="clamp(120px, 12vw, 250px)" color="rgba(79, 70, 229, 0.12)" x="25%" y="70%" delay={3} duration={9} />
            </div>

            {/* Content with subtle parallax */}
            <motion.div
                className="relative z-10 min-h-screen"
                style={{
                    x: contentX,
                    y: contentY
                }}
            >
                <Header />
                <Element name="home">
                    <Index />
                </Element>
            </motion.div>
        </div>
    );
};

export default Background;