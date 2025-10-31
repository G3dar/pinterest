import { motion } from 'framer-motion';
import { Sparkles, Camera, ArrowRight, Users, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ConceptPage.css';

const ConceptPage = () => {
  const navigate = useNavigate();

  return (
    <div className="concept-page">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Sparkles className="hero-icon" size={48} />
        <h1 className="hero-title">PinWrap: A Year in Aesthetics</h1>
        <p className="hero-subtitle">Prototype Concept Document</p>
        <p className="hero-date">1stAve Machine | 2025</p>
      </motion.div>

      <div className="body-content">
        {/* What is PinWrap */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="section-header">
            <Sparkles size={32} className="section-icon" />
            <h2>What is PinWrap?</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              PinWrap is a year-end feature concept that transforms a user's Pinterest activity into a shareable visual experience. Similar to how Spotify Wrapped summarizes listening habits, PinWrap reflects users' aesthetic preferences through their saved pins.
            </p>
            <p className="intro-text">
              This prototype demonstrates how Pinterest could help users visualize their year in pins through a 50-second animated sequence, revealing patterns in their color preferences, seasonal interests, and visual themes—ultimately creating a personalized "identity card" they can share.
            </p>
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="section-header">
            <Users size={32} className="section-icon" />
            <h2>Who Is This For?</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              PinWrap is designed for active Pinterest users who regularly save pins and might enjoy seeing their year's activity summarized in a fun, visual way. It's particularly relevant for users who:
            </p>
            <ul className="features-list">
              <li>Have saved a meaningful number of pins throughout the year</li>
              <li>Are curious about patterns in their visual preferences</li>
              <li>Enjoy shareable year-end summaries (like Spotify Wrapped)</li>
              <li>Appreciate seeing their interests reflected back to them</li>
            </ul>
          </div>
        </motion.section>

        {/* Core Experience */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="section-header">
            <Camera size={32} className="section-icon" />
            <h2>The Experience</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              The prototype presents a 50-second animated sequence divided into five phases:
            </p>

            <div className="phases-timeline">
              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">1</span>
                  <span className="phase-title">Intro</span>
                  <span className="phase-duration">(5 seconds)</span>
                </div>
                <p className="phase-description">
                  Opens with the Pinterest logo and title "2025: A Year in Aesthetics" with particle effects.
                </p>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">2</span>
                  <span className="phase-title">Image Montage</span>
                  <span className="phase-duration">(15 seconds)</span>
                </div>
                <p className="phase-description">
                  The user's saved images appear and organize into different layouts:
                </p>
                <ul className="subphase-list">
                  <li>Images scatter and form into a grid with keyword tags</li>
                  <li>Selected images flow in a horizontal carousel</li>
                  <li>Images group by category with "MOOD MAP" background text</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">3</span>
                  <span className="phase-title">Data Analysis</span>
                  <span className="phase-duration">(18 seconds)</span>
                </div>
                <p className="phase-description">
                  Shows visual breakdowns of the user's pins:
                </p>
                <ul className="subphase-list">
                  <li><strong>Color Palette:</strong> Displays dominant colors as sized circles with percentages</li>
                  <li><strong>Seasonal View:</strong> Arranges pins by season (Spring, Summer, Fall, Winter) as a constellation with connecting lines and seasonal particle effects</li>
                  <li><strong>Keywords:</strong> Descriptive words appear showing themes in the user's pins</li>
                  <li><strong>Top Categories:</strong> Bar chart showing the user's top 5 interest categories</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">4</span>
                  <span className="phase-title">Identity Card</span>
                  <span className="phase-duration">(11 seconds)</span>
                </div>
                <p className="phase-description">
                  A personalized card appears with:
                </p>
                <ul className="subphase-list">
                  <li>An avatar image from the user's pins</li>
                  <li>An identity title (e.g., "The Minimalist Curator")</li>
                  <li>A rarity badge (Common, Rare, Epic, or Legendary)</li>
                  <li>A brief description</li>
                  <li>The user's top 5 colors</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">5</span>
                  <span className="phase-title">Share Screen</span>
                  <span className="phase-duration">(User-controlled)</span>
                </div>
                <p className="phase-description">
                  Offers options to:
                </p>
                <ul className="subphase-list">
                  <li>Download the identity card as an image</li>
                  <li>Copy a shareable link</li>
                  <li>Share to social media platforms</li>
                  <li>Watch the experience again</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Implementation */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="section-header">
            <Code size={32} className="section-icon" />
            <h2>Technical Implementation</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              This prototype is built with:
            </p>
            <ul className="features-list">
              <li><strong>React:</strong> Component-based UI framework</li>
              <li><strong>Framer Motion:</strong> Animation library for smooth transitions</li>
              <li><strong>React Router:</strong> Navigation between screens</li>
              <li><strong>html2canvas:</strong> Converts the identity card to a downloadable image</li>
            </ul>
            <p className="intro-text">
              The prototype uses sample data to demonstrate the concept. A production version would analyze actual user pin data to generate color palettes, seasonal breakdowns, category statistics, and personalized identity titles.
            </p>
          </div>
        </motion.section>

        {/* Closing */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="section-header">
            <Sparkles size={32} className="section-icon" />
            <h2>Concept Goals</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              This prototype demonstrates how a year-end reflection feature could work for Pinterest. The main goals are to:
            </p>
            <ul className="features-list">
              <li>Show users patterns in their visual preferences they might not have noticed</li>
              <li>Create a fun, shareable moment similar to other year-end wrap-up experiences</li>
              <li>Celebrate what makes each user's aesthetic unique</li>
              <li>Provide a memorable snapshot of their year in pins</li>
            </ul>
            <p className="intro-text">
              While this is just a concept prototype using sample data, it explores how Pinterest's rich visual content could be transformed into a personalized, animated story—offering users a new way to reflect on and share their creative journey.</p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            className="cta-button"
            onClick={() => navigate('/wrapped/prototype')}
          >
            <Sparkles size={20} />
            <span>Try the Prototype</span>
            <ArrowRight size={20} />
          </button>
          <p className="cta-subtitle">See the concept in action</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConceptPage;
