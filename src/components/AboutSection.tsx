import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../services/translations';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Vision & Mission
          </h2>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-xl text-gray-600 mb-4">
            A world where technology makes every day a little brighter
          </p>
          <p className="text-gray-600">
            We envision a future where interacting with technology feels as natural and enjoyable as having a conversation with your best friend—where AI assistants have personality, where websites anticipate your needs, and where managing your business brings genuine satisfaction instead of stress.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-xl text-gray-600 mb-4">
            To transform mundane moments into meaningful experiences
          </p>
          <p className="text-gray-600">
            We create AI assistants and digital solutions that don't just solve problems—they make the solving enjoyable. Every product we build is designed to bring more joy, efficiency, and humanity to your daily work.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            How We Fell in Love with Making Work Fun
          </h3>
          <div className="space-y-6 text-gray-600">
            <p>
              It started with a simple question: "Why does business software have to be so... boring?"
            </p>
            <p>
              Our founder was sitting in yet another mind-numbing meeting about process optimization when it hit them—what if technology could actually make work enjoyable? What if AI assistants had personality? What if websites made people smile?
            </p>
            <p>
              That spark of curiosity became an obsession. We spent months talking to business owners, employees, and customers, asking them about their most frustrating daily tasks. The stories we heard were heartbreaking: talented people spending hours on mindless work, creative minds trapped in administrative hell, passionate entrepreneurs drowning in operational chaos.
            </p>
            <p>
              So we made a promise: every product we create must pass the "Would my mom actually enjoy using this?" test. If it's not intuitive enough for her, not delightful enough to make her smile, not useful enough to genuinely improve her day—we redesign it.
            </p>
            <p>
              Today, we've helped thousands of businesses transform their most tedious tasks into something they actually look forward to. We've seen stressed-out teams become energized, frustrated customers become loyal fans, and overwhelming workloads become manageable adventures.
            </p>
            <p>
              The best part? We're just getting started.
            </p>
            <p>
              Every new client teaches us something new about what makes technology truly human. Every AI assistant we create gets a little more personality. Every website we design brings a little more joy to the world.
            </p>
            <p>
              Because at the end of the day, technology isn't about the latest features or the fanciest algorithms—it's about making real people's lives genuinely better.
            </p>
            <p className="font-semibold">
              And that's a mission we wake up excited about every single day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 