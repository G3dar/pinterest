import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Link2, Check, RotateCcw, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import './Phase5Share.css';

const Phase5Share = ({ identityCard, onRestart }) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const cardRef = useRef(null);

  const rarityColors = {
    Common: '#9CA3AF',
    Rare: '#3B82F6',
    Epic: '#A855F7',
    Legendary: '#F59E0B'
  };

  const rarityColor = rarityColors[identityCard.rarity] || rarityColors.Epic;

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: null,
          scale: 2
        });
        const link = document.createElement('a');
        link.download = `pinterest-wrapped-${identityCard.year}.png`;
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleSocialShare = (platform) => {
    const url = window.location.href;
    const text = `I'm a ${identityCard.title}! Check out my PinWrap ${identityCard.year} 📌`;

    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="phase5-share">
      <div className="share-container">
        {/* Header */}
        <motion.div
          className="share-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Your Creative Identity</h1>
          <p>Share your unique aesthetic with the world</p>
        </motion.div>

        {/* Card Preview */}
        <motion.div
          ref={cardRef}
          className="card-preview"
          style={{
            borderColor: rarityColor,
            boxShadow: `
              0 20px 60px rgba(0,0,0,0.5),
              0 0 0 1px rgba(255,255,255,0.1),
              0 0 40px ${rarityColor}66
            `
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="preview-content">
            <div className="preview-avatar">
              <img src={identityCard.avatar} alt="Avatar" style={{ borderColor: rarityColor }} />
            </div>

            <div className="preview-info">
              <div
                className="preview-rarity-badge"
                style={{ background: rarityColor }}
              >
                {identityCard.rarity.toUpperCase()}
              </div>

              <h2 className="preview-title">{identityCard.title}</h2>
              <p className="preview-description">{identityCard.description}</p>

              <div className="preview-colors">
                {identityCard.colorPalette.map((color, index) => (
                  <div
                    key={index}
                    className="preview-color-dot"
                    style={{
                      background: color.hex,
                      boxShadow: `0 2px 8px ${color.hex}66`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="action-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="primary-button" onClick={handleDownload}>
            <Download size={20} />
            <span>Download</span>
          </button>

          <button
            className={`secondary-button ${linkCopied ? 'copied' : ''}`}
            onClick={handleCopyLink}
          >
            {linkCopied ? (
              <>
                <Check size={20} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Link2 size={20} />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social Share */}
        <motion.div
          className="social-share"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="social-label">Share on social media</div>
          <div className="social-buttons">
            <button
              className="social-button twitter"
              onClick={() => handleSocialShare('twitter')}
              aria-label="Share on Twitter"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </button>

            <button
              className="social-button facebook"
              onClick={() => handleSocialShare('facebook')}
              aria-label="Share on Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </button>

            <button
              className="social-button more"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'PinWrap 2024',
                    text: `I'm a ${identityCard.title}! Check out my PinWrap 2024 📌`,
                    url: window.location.href
                  });
                }
              }}
              aria-label="More share options"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* PinWrap Proposal Button */}
        <motion.div
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Link to="/wrapped/concept" className="proposal-button">
            <FileText size={20} />
            <span>Read the PinWrap Proposal</span>
          </Link>
        </motion.div>

        {/* Restart Button */}
        <motion.div
          className="restart-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <button className="restart-button" onClick={onRestart}>
            <RotateCcw size={16} />
            <span>Watch Again</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Phase5Share;
