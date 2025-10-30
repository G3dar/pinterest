import { motion } from 'framer-motion';
import { Sparkles, Camera, Palette, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ConceptPage.css';

const ConceptPage = () => {
  const navigate = useNavigate();

  const phases = [
    { title: 'Intro', duration: '5s', description: 'Dramatic opening with Pinterest logo' },
    { title: 'Montage', duration: '15s', description: 'Your saved images transform into grid, carousel, and category clusters' },
    { title: 'Analysis', duration: '10s', description: 'Visualization of your color palette, keywords, and dominant categories' },
    { title: 'Reveal', duration: '10s', description: 'Your unique identity card with title, description, and characteristics' }
  ];

  const features = [
    'Cinematic montage of your saved pins with dynamic animations',
    'Color analysis revealing your dominant aesthetic palette',
    'Category breakdown showing your top visual interests',
    'Personalized identity card that captures your creative essence',
    'Share & download your card to social media'
  ];

  return (
    <div className="concept-page">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Sparkles className="hero-icon" size={48} />
        <h1 className="hero-title">Pinterest Wrapped</h1>
        <p className="hero-subtitle">Your Year in Aesthetics</p>
      </motion.div>

      <div className="body-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="intro-text">
            Imagine seeing your entire Pinterest year condensed into a 45-second cinematic visual experience that reveals your unique creative identity.
          </p>
          <p className="intro-text">
            <strong>Pinterest Wrapped</strong> is an experience similar to Spotify Wrapped, but for your visual world. It analyzes everything you've saved during the year and transforms it into a cohesive narrative that culminates in a personalized, shareable "identity card."
          </p>
        </motion.div>

        <motion.section
          className="how-it-works"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="section-header">
            <Camera size={32} className="section-icon" />
            <h2>How it works</h2>
          </div>

          <div className="phases-timeline">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="phase-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
              >
                <div className="phase-header">
                  <span className="phase-number">{index + 1}</span>
                  <span className="phase-title">{phase.title}</span>
                  <span className="phase-duration">({phase.duration})</span>
                </div>
                <p className="phase-description">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="key-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="section-header">
            <Palette size={28} className="section-icon" />
            <h2>Key features</h2>
          </div>

          <ul className="features-list">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + (index * 0.1), duration: 0.4 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <button
            className="cta-button"
            onClick={() => navigate('/wrapped/prototype')}
          >
            <Sparkles size={20} />
            <span>View Prototype</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConceptPage;
