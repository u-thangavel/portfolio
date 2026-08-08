
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import styles from './Experience.module.css';
//   {"Manage the Journey section content -"Behind the Code","Beyond the Screen","Technical Arsenal","Quotes","Photo" }

const journey = [
  {
    year: '2023',
    role: "QA Automation Engineer",
    company: "The Tuna Group",
    period: "Nov 2023 - Present",
    summary: "Driving quality strategy across mobile, web, and API platforms by building scalable automation frameworks and strengthening release confidence.",
    highlights: [
      "🚀 Led automation of critical user journeys using Appium and Selenium, ensuring cross‑platform stability.",
      "🔗 Expanded API and performance testing coverage with Postman, RestAssured, JMeter, and K6 for high‑traffic features.",
      "🤝 Mentored QA engineers, formalized quality gates, and improved regression efficiency across releases."
    ],
    tags: ["Appium", "Selenium", "API Testing", "Performance"]
  },
  {
    year: '2020',
    role: "QA Engineer",
    company: "Bluefield Technologies",
    period: "Nov 2020 - Oct 2023",
    summary: "Delivered maintainable automation solutions for mobile and web applications, improving regression reliability and accelerating release readiness.",
    highlights: [
      "📱 Contribute to Automated regression suites for multi‑market mobile apps / Website using Selenium and Appium.",
      "⚡ Integrated test execution into CI/CD pipelines, enabling faster feedback loops and reducing release bottlenecks.",
      "🛠️ Improved test maintainability through reusable frameworks, structured reporting, and negative test flows."
    ],
    tags: ["Automation", "Mobile Testing", "Regression"]
  },
  {
    year: '2018',
    role: "Trainer",
    company: "Quess Corp",
    period: "Apr 2018 - Aug 2020",
    summary: "Delivered structured training programs under PMKK & NSDC initiatives, focusing on Java programming, project fundamentals, and employability skills.",
    highlights: [
      "🎓 Delivered hands‑on modules in Java programming and project fundamentals for 300+ college students and 500+ school students under RMSA and NSQF schemes.",
      "📊 Developed structured training plans and assessments to track progress, ensuring measurable skill development aligned with government scheme objectives.",
      "🏆 Contributed to national skill development initiatives (PMKK V2, NSDC, RMSA), enhancing career readiness and supporting the Skill India Mission."
    ],
    tags: ["Mentorship", "Curriculum Development", "Government Scheme Contribution", "Training Delivery"]
  },
{
  year: '2015',
  role: "IT Support Engineer",
  company: "Agni Designer",
  period: "Sep 2015 - Feb 2018",
  summary: "Provided end‑to‑end IT support for client systems, including installation, configuration, and troubleshooting of business software such as label makers, inventory management, and Bill of Materials applications.",
  highlights: [
    "🖥️ Installed and configured business software solutions on client systems, ensuring smooth deployment and usability.",
    "🔧 Troubleshot technical issues related to label maker, inventory, and Bill of Materials applications, minimizing downtime and improving client productivity.",
    "🤝 Delivered responsive client support, addressing queries and providing guidance on software usage, contributing to enhanced customer satisfaction."
  ],
  tags: ["IT Support", "Software Installation", "Troubleshooting", "Client Service"]
}

];


export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>Journey By Year</h2>
          <p className={styles.subheading}>
            A timeline of how my career evolved from hands-on testing to quality engineering leadership and automation strategy.
          </p>
        </motion.div>

        <div className={styles.journeyRail}>
          <motion.span
            className={styles.railProgress}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-140px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {journey.map((item, idx) => (
            <motion.article
              key={`${item.year}-${item.company}`}
              className={styles.yearBlock}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className={styles.yearColumn}>
                <motion.span
                  className={styles.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.24, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  {item.year}
                </motion.span>
                <span className={styles.yearDot} />
              </div>

              <motion.div
                className={styles.storyCard}
                whileHover={{ y: -4, scale: 1.01, rotateX: 0.6, rotateY: idx % 2 === 0 ? -0.8 : 0.8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 25 }}
              >
                <div className={styles.storyHead}>
                  <div className={styles.companyBadge}>
                    <BriefcaseBusiness size={14} />
                  </div>
                  <span className={styles.company}>{item.company}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>

                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.summary}>{item.summary}</p>

                <ul className={styles.highlights}>
                  {item.highlights.map((line) => (
                    <li key={line}>
                      <ArrowUpRight size={14} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
