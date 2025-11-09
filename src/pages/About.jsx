import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0d1117, #06141b)",
        color: "#ffffff",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(6,20,27,0.9)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,255,0.22)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, #00ffff, #00ff99)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#cccccc",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Afsar Azam (Stegan)</strong> — an{" "}
          <strong>AI & Data Science Developer</strong> focused on creating intelligent systems that solve real-world problems. My expertise includes data analysis, machine learning, and UI/UX development. I enjoy turning raw data into actionable insights and crafting sleek user experiences.
        </p>

        <p style={{ fontSize: "1.1rem", color: "#b5b5b5" }}>
          Currently pursuing B.Tech in Artificial Intelligence from SAGE University, Indore. I’m passionate about building{" "}
          <strong>innovative solutions</strong> that combine{" "}
          <strong>technical expertise</strong> with{" "}
          <strong>practical applications</strong>. My goal is to develop AI-powered products that make a meaningful impact.
        </p>

        <p style={{ color: "#b5b5b5" }}>
            1st-year B.Tech in Artificial Intelligence student at SAGE University, Indore. Focused on developing expertise in AI, machine learning, and data science. Eager to apply knowledge in real-world projects and contribute to innovative solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, #00ffff, #00ff99)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,255,0.22)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(6,20,27,0.9)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid #00ffff33",
                boxShadow: "0 0 15px rgba(0,255,255,0.22)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="#00ffff" />
              <div>
                <h4
                  style={{
                    color: "#00ffff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Artificial Intelligence
                </h4>
                <p
                  style={{
                    color: "#cccccc",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>SAGE University</strong> — Indore, Madhya Pradesh
                </p>
                <p style={{ color: "#b5b5b5" }}>
                  Institute of Advance Computing | 1st Year (Ongoing)
                </p>
                <p style={{ color: "#b5b5b5" }}>Expected Graduation: 2027</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,255,0.22)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(6,20,27,0.9)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid #00ffff33",
                boxShadow: "0 0 15px rgba(0,255,255,0.22)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="#00ffff" />
              <div>
                <h4
                  style={{
                    color: "#00ffff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "#cccccc",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>School Name</strong> — Indore, Madhya Pradesh
                </p>
                <p style={{ color: "#b5b5b5" }}>
                  CBSE/MP Board | Percentage: XX%
                </p>
                <p style={{ color: "#b5b5b5" }}>Completed in 2023</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,255,0.22)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(6,20,27,0.9)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid #00ffff33",
                boxShadow: "0 0 15px rgba(0,255,255,0.22)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="#00ffff" />
              <div>
                <h4
                  style={{
                    color: "#00ffff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "#cccccc",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>School Name</strong> — Indore, Madhya Pradesh
                </p>
                <p style={{ color: "#b5b5b5" }}>
                  CBSE/MP Board | Percentage: XX%
                </p>
                <p style={{ color: "#b5b5b5" }}>Completed in 2021</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
