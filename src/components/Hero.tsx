'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Wifi, Battery, Signal, Globe, Cpu, Server, Smartphone, CheckCircle, Search } from 'lucide-react';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import styles from './Hero.module.css';

const roles = [
  'Mobile & Web QA Expert',
  'Manual & Automation Tester',
  'Regression & Release Guardian',
  'Cross‑Platform QA Specialist',
];

const views = [
  {
    id: 'web',
    title: 'Web Automation',
    icon: Globe,
  },
  {
    id: 'mobile',
    title: 'Mobile App Testing',
    icon: Smartphone,
  },
  {
    id: 'api',
    title: 'API Testing (Postman)',
    icon: Server,
  },
  {
    id: 'performance',
    title: 'Performance Report',
    icon: Cpu,
  },
];

function useTypewriter(words: string[], typingSpeed = 50, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Hero() {
  const typedRole = useTypewriter(roles);
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  // Automatically cycle views every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentViewIndex((prev) => (prev + 1) % views.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeView = views[currentViewIndex];

  return (
    <section id="home" className={styles.heroSection}>
      <div className={`${styles.heroGrid} container`}>
        {/* Left Column: Personal Details & Text */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeBorder} />
            <Code2 size={16} className={styles.badgeIcon} />
            <span className={styles.badgeText}>
              {typedRole}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <h1 className={styles.title}>
            Hi, I&apos;m <span className="text-gradient">Thangavel U</span><br />
          </h1>
          
          <p className={styles.subtitle}>
             <span className="text-gradient">QA Automation & Performance Expert</span><br />
           Ensuring peak performance and reliability for Mobile, Web, and API systems.<br />
           <br />
           Specialized in scalable test frameworks,{' '}
            <span className="text-gradient-android" style={{ fontWeight: 600 }}>Mobile Apps</span>,{' '}
            <span className="text-gradient" style={{ fontWeight: 600 }}>Web Automation</span>, and{' '}
            <span className="text-gradient" style={{ fontWeight: 600 }}>API Performance Testing</span>.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Interactive Showcase Area */}
        <div className={styles.phoneContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          
          {/* Circular / Pill Navigation Bar on Top */}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '8px 16px', 
            borderRadius: '30px', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            {views.map((view, idx) => {
              const IconComp = view.icon;
              const isActive = idx === currentViewIndex;
              return (
                <button
                  key={view.id}
                  onClick={() => setCurrentViewIndex(idx)}
                  style={{
                    background: isActive ? 'var(--color-primary, #6366f1)' : 'transparent',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                    fontSize: '12px',
                    fontWeight: 500,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <IconComp size={14} />
                  <span style={{ display: isActive ? 'inline' : 'none' }}>{view.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Mockup Container Swapping Based on Active View */}
          <div style={{ width: '100%', maxWidth: '440px', minHeight: '480px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              
              {/* 1. WEB AUTOMATION VIEW (Chrome Browser Tab with Google Search Simulation) */}
              {activeView.id === 'web' && (
                <motion.div
                  key="web"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#1e1e2e', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', height: '100%', minHeight: '460px', display: 'flex', flexDirection: 'column' }}
                >
                  {/* Browser Top Bar */}
                  <div style={{ background: '#181825', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <div style={{ background: '#11111b', padding: '4px 12px', borderRadius: '6px', flex: 1, fontSize: '11px', color: '#cdd6f4', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Globe size={12} style={{ color: '#a6e3a1' }} /> https://www.google.com/search?q=automated+testing+frameworks
                    </div>
                  </div>

                  {/* Browser Content - Google Search Page UI */}
                  <div style={{ padding: '24px 20px', flex: 1, background: '#11111b', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* Google Logo */}
                    <div style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '16px', color: '#fff' }}>
                      <span style={{ color: '#4285F4' }}>G</span>
                      <span style={{ color: '#EA4335' }}>o</span>
                      <span style={{ color: '#FBBC05' }}>o</span>
                      <span style={{ color: '#4285F4' }}>g</span>
                      <span style={{ color: '#34A853' }}>l</span>
                      <span style={{ color: '#EA4335' }}>e</span>
                    </div>

                    {/* Search Bar with typing effect */}
                    <div style={{ 
                      width: '100%', 
                      background: '#1e1e2e', 
                      border: '1px solid #313244', 
                      borderRadius: '24px', 
                      padding: '8px 16px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px',
                      marginBottom: '20px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}>
                      <Search size={16} style={{ color: '#94a3b8' }} />
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: '#cdd6f4', fontSize: '13px', fontFamily: 'monospace' }}
                      >
                        automated testing frameworks
                      </motion.span>
                    </div>

                    {/* Search Result Mockups */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ background: '#1e1e2e', padding: '10px 14px', borderRadius: '8px', border: '1px solid #313244' }}
                      >
                        <div style={{ fontSize: '10px', color: '#6c7086' }}>https://github.com/u-thangavel</div>
                        <div style={{ fontSize: '13px', color: '#89b4fa', fontWeight: 600, marginTop: '2px' }}>Scalable TestNG & Selenium Framework</div>
                        <div style={{ fontSize: '11px', color: '#a6e3a1', marginTop: '2px' }}>✓ Parallel execution, Page Object Model implemented.</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ background: '#1e1e2e', padding: '10px 14px', borderRadius: '8px', border: '1px solid #313244' }}
                      >
                        <div style={{ fontSize: '10px', color: '#6c7086' }}>https://selenium.dev</div>
                        <div style={{ fontSize: '13px', color: '#89b4fa', fontWeight: 600, marginTop: '2px' }}>Selenium Browser Automation</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Browser automation tools built for web applications...</div>
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* 2. MOBILE TESTING VIEW */}
              {activeView.id === 'mobile' && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={styles.phoneMockup}
                  style={{ margin: '0 auto', position: 'relative' }}
                >
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneStatusBar}>
                    <span className={styles.statusTime}>9:41</span>
                    <div className={styles.statusIcons}>
                      <Signal size={12} />
                      <Wifi size={12} />
                      <Battery size={12} />
                    </div>
                  </div>
                  <div className={styles.phoneScreen} style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#0f172a' }}>
                    <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '16px', borderRadius: '50%', marginBottom: '16px', color: '#818cf8' }}>
                      <Smartphone size={36} />
                    </div>
                    <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>Appium Mobile Testing</h3>
                    <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '20px' }}>Automating native interactions across Android & iOS real devices.</p>
                    <div style={{ background: '#1e293b', padding: '10px 16px', borderRadius: '8px', width: '100%', border: '1px solid #334155', textAlign: 'left', fontSize: '12px', color: '#e2e8f0' }}>
                      <code>[Appium] Session initialized successfully<br/>[Android] Clicked 'Shop' button (Pass)</code>
                    </div>
                  </div>
                  <div className={styles.phoneHomeBar} />
                </motion.div>
              )}

              {/* 3. API TESTING VIEW (Postman Style) */}
              {activeView.id === 'api' && (
                <motion.div
                  key="api"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#1e1e2e', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', height: '100%', minHeight: '460px', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ background: '#181825', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fab387', fontWeight: 600, fontSize: '13px' }}>
                      <SiPostman size={16} /> API Automation & Validation
                    </div>
                    <span style={{ background: 'rgba(166, 227, 161, 0.1)', color: '#a6e3a1', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>GET 200 OK</span>
                  </div>
                  <div style={{ padding: '20px', flex: 1, background: '#11111b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#1e1e2e', padding: '10px 14px', borderRadius: '6px', fontSize: '12px', color: '#89b4fa', fontFamily: 'monospace' }}>
                      GET /api/v1/metrics/system-health
                    </div>
                    <div style={{ background: '#181825', padding: '14px', borderRadius: '8px', border: '1px solid #313244', fontSize: '12px', fontFamily: 'monospace', color: '#a6e3a1' }}>
                      {`{\n  "status": "success",\n  "code": 200,\n  "responseTime": "42ms",\n  "payload": {\n    "activeNodes": 12,\n    "latencySpike": false\n  }\n}`}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 4. PERFORMANCE TESTING VIEW (100k User Report) */}
              {activeView.id === 'performance' && (
                <motion.div
                  key="performance"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#1e1e2e', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', height: '100%', minHeight: '460px', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ background: '#181825', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cba6f7', fontWeight: 600, fontSize: '13px' }}>
                      <Cpu size={16} /> Load & Stress Report
                    </div>
                    <span style={{ background: 'rgba(243, 139, 168, 0.1)', color: '#f38ba8', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>100K Users</span>
                  </div>
                  <div style={{ padding: '20px', flex: 1, background: '#11111b', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div style={{ background: '#1e1e2e', padding: '12px', borderRadius: '8px', border: '1px solid #313244' }}>
                        <span style={{ fontSize: '11px', color: '#6c7086' }}>Peak Throughput</span>
                        <h4 style={{ color: '#a6e3a1', fontSize: '18px', marginTop: '4px' }}>4,850 req/s</h4>
                      </div>
                      <div style={{ background: '#1e1e2e', padding: '12px', borderRadius: '8px', border: '1px solid #313244' }}>
                        <span style={{ fontSize: '11px', color: '#6c7086' }}>Error Rate</span>
                        <h4 style={{ color: '#89b4fa', fontSize: '18px', marginTop: '4px' }}>0.01%</h4>
                      </div>
                    </div>
                    <div style={{ background: '#1e1e2e', padding: '14px', borderRadius: '8px', border: '1px solid #313244' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px', color: '#cdd6f4' }}>
                        <span>Virtual Users Ramp-up</span>
                        <span style={{ color: '#a6e3a1' }}>100,000 / 100,000</span>
                      </div>
                      <div style={{ width: '100%', background: '#313244', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '100%', background: 'linear-gradient(90deg, #6366f1, #a6e3a1)', height: '100%' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}