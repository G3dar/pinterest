import { motion } from 'framer-motion';
import { Sparkles, Camera, Palette, ArrowRight, Users, TrendingUp, Target, Zap, Heart, Share2, Code, Award, BarChart3, Lightbulb, Shield, Rocket, CheckCircle2 } from 'lucide-react';
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
        <p className="hero-subtitle">Product Proposal & Concept Document</p>
        <p className="hero-date">Prepared by 1stAve Machine | 2025</p>
      </motion.div>

      <div className="body-content">
        {/* Executive Summary */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="section-header">
            <Sparkles size={32} className="section-icon" />
            <h2>Executive Summary</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              <strong>PinWrap</strong> is a revolutionary year-end experience that transforms users' Pinterest activity into a personalized, cinematic visual journey. Much like Spotify Wrapped has become a cultural phenomenon for music lovers, PinWrap aims to create the definitive year-in-review experience for Pinterest's visual discovery platform.
            </p>
            <p className="intro-text">
              In an era where users save, pin, and curate thousands of images annually, PinWrap offers something unique: <strong>a mirror to their aesthetic soul</strong>. Through advanced data visualization, AI-driven analysis, and emotionally resonant storytelling, PinWrap doesn't just show users what they saved—it reveals who they are through their visual choices.
            </p>
            <p className="intro-text">
              This proposal outlines a comprehensive vision for PinWrap, including product strategy, technical architecture, user experience design, business model, and growth projections. Our analysis indicates that PinWrap could drive <strong>40-60% year-end engagement increases</strong>, generate substantial social media virality, and position Pinterest as the platform that truly understands visual identity.
            </p>
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="section-header">
            <Lightbulb size={32} className="section-icon" />
            <h2>Product Vision & Mission</h2>
          </div>
          <div className="section-content">
            <h3>Vision</h3>
            <p className="intro-text">
              To become the world's most beloved year-end reflection experience, transforming Pinterest from a discovery platform into a <strong>identity-defining creative companion</strong> that helps users understand and celebrate their evolving aesthetic journey.
            </p>

            <h3>Mission</h3>
            <p className="intro-text">
              Create an emotionally resonant, shareable, and technically sophisticated experience that:
            </p>
            <ul className="features-list">
              <li>Celebrates users' unique visual taste and creative evolution</li>
              <li>Makes complex data analysis feel magical and personal</li>
              <li>Drives unprecedented social sharing and platform advocacy</li>
              <li>Reinforces Pinterest's position as the authority on visual discovery</li>
              <li>Creates an annual tradition users anticipate and cherish</li>
            </ul>
          </div>
        </motion.section>

        {/* Problem & Opportunity */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="section-header">
            <Target size={32} className="section-icon" />
            <h2>User Problem & Opportunity</h2>
          </div>
          <div className="section-content">
            <h3>The Problem</h3>
            <p className="intro-text">
              Pinterest users engage with hundreds or thousands of pins annually, building vast collections that represent their aspirations, interests, and aesthetic evolution. However, several key challenges emerge:
            </p>
            <ul className="features-list">
              <li><strong>Invisible Patterns:</strong> Users rarely reflect on the totality of their saving behavior or recognize patterns in their visual preferences</li>
              <li><strong>Forgotten Moments:</strong> Pins from earlier in the year become buried and forgotten, losing their emotional context</li>
              <li><strong>Lack of Identity Articulation:</strong> Users struggle to articulate their aesthetic identity, even though it's clearly expressed through their pins</li>
              <li><strong>No Sharing Mechanism:</strong> There's no compelling way to share one's Pinterest personality with friends and social networks</li>
              <li><strong>Passive Engagement:</strong> Year-end periods see declining engagement as users shift focus to holiday activities and other platforms' year-end features</li>
            </ul>

            <h3>The Opportunity</h3>
            <p className="intro-text">
              The success of Spotify Wrapped, which drives <strong>billions of social shares annually</strong> and has become a cultural phenomenon, proves that users crave personalized year-end reflections. Pinterest is uniquely positioned to create an even more powerful version for visual content because:
            </p>
            <ul className="features-list">
              <li><strong>Visual Impact:</strong> Images are inherently more shareable and emotionally resonant than listening statistics</li>
              <li><strong>Identity Expression:</strong> Visual taste is deeply personal and reveals more about identity than music preferences</li>
              <li><strong>Untapped Territory:</strong> No competitor has successfully created a year-end visual review experience</li>
              <li><strong>Rich Data:</strong> Pinterest's unique dataset of saves, boards, and engagement provides unparalleled insight into aesthetic preferences</li>
              <li><strong>Social Currency:</strong> Aesthetic identity is highly shareable social currency, especially among Pinterest's target demographic</li>
              <li><strong>Platform Differentiation:</strong> Reinforces Pinterest's unique value proposition in an increasingly crowded social media landscape</li>
            </ul>
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="section-header">
            <Users size={32} className="section-icon" />
            <h2>Target Audience</h2>
          </div>
          <div className="section-content">
            <h3>Primary Audience</h3>
            <p className="intro-text">
              <strong>Active Pinterest Users (25-45 years old)</strong>
            </p>
            <ul className="features-list">
              <li>Save 50+ pins per year across multiple boards</li>
              <li>Use Pinterest for life planning (weddings, home decor, fashion)</li>
              <li>Highly engaged with visual platforms (Instagram, TikTok)</li>
              <li>Eager to share personal insights and achievements on social media</li>
              <li>Value self-expression and identity articulation</li>
            </ul>

            <h3>Secondary Audiences</h3>
            <p className="intro-text">
              <strong>1. Casual Pinterest Users</strong> - Opportunity to demonstrate value and drive deeper engagement
            </p>
            <p className="intro-text">
              <strong>2. Lapsed Users</strong> - Re-engagement tool showcasing their historical connection to the platform
            </p>
            <p className="intro-text">
              <strong>3. Non-Users</strong> - Viral social sharing creates FOMO and drives acquisition
            </p>

            <h3>User Personas</h3>
            <div className="persona-grid">
              <div className="persona-card">
                <h4>Sarah, the Style Curator</h4>
                <p>34, Fashion Designer</p>
                <ul>
                  <li>Saves 200+ pins monthly across fashion, interior design, and art boards</li>
                  <li>Uses Pinterest professionally for mood boards and client presentations</li>
                  <li>Highly active on Instagram, values aesthetic cohesion</li>
                  <li>Would love to showcase her refined taste to followers</li>
                </ul>
              </div>
              <div className="persona-card">
                <h4>Marcus, the Weekend Planner</h4>
                <p>28, Software Engineer</p>
                <ul>
                  <li>Saves recipes, home improvement projects, and travel destinations</li>
                  <li>Uses Pinterest intermittently but intensely around specific projects</li>
                  <li>Surprised by his own patterns when reflected back</li>
                  <li>Enjoys data-driven insights about himself (Fitbit, budgeting apps)</li>
                </ul>
              </div>
              <div className="persona-card">
                <h4>Elena, the Wedding Planner</h4>
                <p>31, Marketing Manager</p>
                <ul>
                  <li>Currently planning her wedding with 15+ boards</li>
                  <li>Obsessively curating every visual detail</li>
                  <li>Would treasure a keepsake of this special planning year</li>
                  <li>Excited to share her journey with friends and family</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Experience */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="section-header">
            <Camera size={32} className="section-icon" />
            <h2>The PinWrap Experience: A Cinematic Journey</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              PinWrap is a <strong>50-second immersive experience</strong> that transforms a user's year of Pinterest activity into a visually stunning narrative. Each phase is carefully choreographed to build emotional resonance and culminate in a shareable identity revelation.
            </p>

            <div className="phases-timeline">
              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">1</span>
                  <span className="phase-title">Intro: "Your Year Awaits"</span>
                  <span className="phase-duration">(5 seconds)</span>
                </div>
                <p className="phase-description">
                  Dramatic opening with Pinterest logo morphing into a glowing portal. Deep purple gradient background creates anticipation. Text reveals: "2025: A Year in Aesthetics" followed by subtle sparkling particle effects.
                </p>
                <div className="phase-details">
                  <strong>Emotional Goal:</strong> Anticipation and curiosity<br/>
                  <strong>Technical Elements:</strong> CSS gradients, particle animations, brand reinforcement
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">2</span>
                  <span className="phase-title">Montage: "The Journey Begins"</span>
                  <span className="phase-duration">(15 seconds)</span>
                </div>
                <p className="phase-description">
                  User's saved images burst onto screen in chaotic scatter, then elegantly organize into a perfect grid. Images transition through three sub-phases:
                </p>
                <ul className="subphase-list">
                  <li><strong>Grid Formation (8s):</strong> Images organize from chaos to order, with keyword tags appearing on select pins</li>
                  <li><strong>Carousel Flow (5s):</strong> Selected images flow horizontally in infinite carousel, creating hypnotic rhythm</li>
                  <li><strong>Category Clusters (2s):</strong> Images magnetically group by category, foreshadowing analysis phase</li>
                </ul>
                <div className="phase-details">
                  <strong>Emotional Goal:</strong> Recognition and delight - "That's ME!"<br/>
                  <strong>Technical Elements:</strong> Framer Motion spring animations, staggered delays, dynamic positioning
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">3</span>
                  <span className="phase-title">Analysis: "Decoding Your Aesthetic"</span>
                  <span className="phase-duration">(18 seconds)</span>
                </div>
                <p className="phase-description">
                  Deep dive into the user's visual DNA through three analytical lenses:
                </p>
                <ul className="subphase-list">
                  <li><strong>Color Palette (3s):</strong> Dominant colors emerge as glowing orbs of varying sizes, with percentage weights. Creates "this is my color story" moment.</li>
                  <li><strong>Seasonal Constellation (8s):</strong> Pins transform into star constellations organized by season (Spring, Summer, Fall, Winter). Images float in space connected by glowing lines, with seasonal particles (cherry blossoms, sun rays, falling leaves, snowflakes) creating environmental atmosphere.</li>
                  <li><strong>Keywords Overlay (during constellation):</strong> At 6.2s mark, descriptive keywords appear as floating pills in center: "minimalist," "dreamy," "elegant," etc. Font size indicates prominence.</li>
                  <li><strong>Top Categories (7s):</strong> Final reveal shows top 5 categories with animated progress bars, thumbnails, and percentages. Creates "Aha!" moment of self-understanding.</li>
                </ul>
                <div className="phase-details">
                  <strong>Emotional Goal:</strong> Self-discovery and validation<br/>
                  <strong>Technical Elements:</strong> SVG constellation lines, weighted keyword visualization, animated progress bars, seasonal theming
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">4</span>
                  <span className="phase-title">Identity Reveal: "You Are..."</span>
                  <span className="phase-duration">(11 seconds)</span>
                </div>
                <p className="phase-description">
                  The climactic moment: all analysis converges into a beautifully designed identity card. The card materializes with:
                </p>
                <ul className="subphase-list">
                  <li><strong>Profile Avatar:</strong> Representative image from most-saved category</li>
                  <li><strong>Identity Title:</strong> AI-generated archetype (e.g., "The Minimalist Curator," "The Cozy Dreamer," "The Bold Maximalist")</li>
                  <li><strong>Rarity Badge:</strong> Gamified element (Common, Rare, Epic, Legendary) based on uniqueness of taste combination</li>
                  <li><strong>Description:</strong> Two-sentence poetic summary of aesthetic identity</li>
                  <li><strong>Color Palette:</strong> Top 5 colors displayed as harmonious dots</li>
                  <li><strong>2025 Timestamp:</strong> Year reinforcement for shareability</li>
                </ul>
                <div className="phase-details">
                  <strong>Emotional Goal:</strong> Pride and desire to share<br/>
                  <strong>Technical Elements:</strong> Dynamic card generation, rarity color theming, elegant typography
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <span className="phase-number">5</span>
                  <span className="phase-title">Share & Celebrate</span>
                  <span className="phase-duration">(User-controlled)</span>
                </div>
                <p className="phase-description">
                  Experience concludes with sharing options:
                </p>
                <ul className="subphase-list">
                  <li><strong>Download:</strong> High-resolution PNG of identity card</li>
                  <li><strong>Copy Link:</strong> Shareable URL to replay experience</li>
                  <li><strong>Social Share:</strong> One-click sharing to Instagram, Twitter/X, Facebook with pre-populated text</li>
                  <li><strong>Watch Again:</strong> Instant replay option</li>
                  <li><strong>Read Full Proposal:</strong> Link to this comprehensive document</li>
                </ul>
                <div className="phase-details">
                  <strong>Emotional Goal:</strong> Social validation through sharing<br/>
                  <strong>Technical Elements:</strong> html2canvas for image export, Web Share API, deep linking
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Architecture */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="section-header">
            <Code size={32} className="section-icon" />
            <h2>Technical Architecture</h2>
          </div>
          <div className="section-content">
            <h3>Frontend Stack</h3>
            <ul className="features-list">
              <li><strong>React 18:</strong> Component-based architecture with hooks for state management</li>
              <li><strong>Framer Motion:</strong> Production-ready animation library for smooth, GPU-accelerated transitions</li>
              <li><strong>React Router:</strong> Client-side routing for seamless navigation</li>
              <li><strong>html2canvas:</strong> DOM-to-image conversion for card downloads</li>
              <li><strong>Lucide React:</strong> Consistent icon system</li>
            </ul>

            <h3>Data Pipeline</h3>
            <p className="intro-text"><strong>Phase 1: Data Collection (Year-Round)</strong></p>
            <ul className="features-list">
              <li>Track all pin saves with timestamps, board assignments, and engagement metrics</li>
              <li>Extract image metadata: dominant colors (via color quantization), categories, associated keywords</li>
              <li>Store aggregated data in user profile for instant retrieval in December</li>
            </ul>

            <p className="intro-text"><strong>Phase 2: Analysis Engine (Pre-computed)</strong></p>
            <ul className="features-list">
              <li><strong>Color Analysis:</strong> K-means clustering on RGB values to identify 8-12 dominant colors, weighted by frequency</li>
              <li><strong>Category Analysis:</strong> Aggregate saves by Pinterest's native category taxonomy</li>
              <li><strong>Keyword Extraction:</strong> NLP on pin descriptions and board titles to extract descriptive adjectives (minimalist, vintage, modern, etc.)</li>
              <li><strong>Seasonality Detection:</strong> Map save timestamps to seasons for constellation visualization</li>
              <li><strong>Identity Archetype Generation:</strong> Rules-based or ML model to assign identity titles based on category + keyword combinations</li>
              <li><strong>Rarity Calculation:</strong> Compare user's category distribution against global dataset to determine uniqueness percentile</li>
            </ul>

            <p className="intro-text"><strong>Phase 3: Real-Time Rendering</strong></p>
            <ul className="features-list">
              <li>Fetch pre-computed analytics when user initiates PinWrap</li>
              <li>Dynamically generate animations using user's actual saved images</li>
              <li>Render identity card with personalized data</li>
              <li>Total load time target: &lt;2 seconds from click to first frame</li>
            </ul>

            <h3>Performance Optimization</h3>
            <ul className="features-list">
              <li><strong>Image Optimization:</strong> Serve low-resolution thumbnails (max 300x300px) for animations to minimize bandwidth</li>
              <li><strong>Lazy Loading:</strong> Load phases sequentially, prefetch next phase during current animation</li>
              <li><strong>GPU Acceleration:</strong> Use CSS transforms and Framer Motion's layout animations for 60fps performance</li>
              <li><strong>Caching:</strong> Cache user data locally to enable instant replays</li>
              <li><strong>Progressive Enhancement:</strong> Graceful degradation for older browsers (fall back to simpler animations)</li>
            </ul>

            <h3>Scalability Considerations</h3>
            <ul className="features-list">
              <li><strong>CDN Distribution:</strong> Host static assets (images, fonts) on CDN for global low-latency access</li>
              <li><strong>Analytics Pre-computation:</strong> Run batch processing in November to generate all user reports, avoiding December server load spike</li>
              <li><strong>Horizontal Scaling:</strong> Containerized microservices for API layer to handle traffic surges</li>
              <li><strong>Rate Limiting:</strong> Implement queue system to manage simultaneous users during peak (Dec 1-15)</li>
            </ul>
          </div>
        </motion.section>

        {/* Personalization Algorithm */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="section-header">
            <Zap size={32} className="section-icon" />
            <h2>Personalization Algorithm: The Magic Behind the Mirror</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              The emotional power of PinWrap lies in its ability to feel deeply personal while being algorithmically generated. Our personalization engine ensures every user receives a unique, accurate reflection of their aesthetic identity.
            </p>

            <h3>Identity Archetype System</h3>
            <p className="intro-text">
              We've developed a matrix of <strong>45 distinct identity archetypes</strong> based on the combination of:
            </p>
            <ul className="features-list">
              <li><strong>Primary Category:</strong> Dominant interest area (e.g., Fashion, Home Decor, Art)</li>
              <li><strong>Aesthetic Descriptors:</strong> Extracted keywords (minimalist, vintage, bold, cozy)</li>
              <li><strong>Color Palette:</strong> Warm vs. cool, monochrome vs. vibrant</li>
              <li><strong>Engagement Pattern:</strong> Steady curator vs. project-based bursts</li>
            </ul>

            <p className="intro-text">Example Archetypes:</p>
            <div className="archetype-examples">
              <div className="archetype-card">
                <h4>The Minimalist Curator</h4>
                <p><strong>Criteria:</strong> 60%+ Art & Design, keywords "minimal" "clean" "simple", monochrome palette, steady engagement</p>
                <p><strong>Description:</strong> "Your aesthetic blends minimalist spaces with intentional design, creating a serene visual world where less is always more."</p>
              </div>
              <div className="archetype-card">
                <h4>The Cozy Dreamer</h4>
                <p><strong>Criteria:</strong> 50%+ Home Decor, keywords "cozy" "warm" "hygge", warm earth tones, seasonal engagement spikes</p>
                <p><strong>Description:</strong> "You craft sanctuaries of comfort and warmth, finding beauty in soft textures, ambient lighting, and spaces that feel like home."</p>
              </div>
              <div className="archetype-card">
                <h4>The Bold Maximalist</h4>
                <p><strong>Criteria:</strong> Mixed categories, keywords "bold" "vibrant" "eclectic", rainbow palette, high volume saves</p>
                <p><strong>Description:</strong> "More is more in your world! You fearlessly mix patterns, colors, and styles to create visual feasts that celebrate abundance."</p>
              </div>
            </div>

            <h3>Rarity System</h3>
            <p className="intro-text">
              Gamification element that makes users feel special:
            </p>
            <ul className="features-list">
              <li><strong>Common (60% of users):</strong> Category distribution matches global trends</li>
              <li><strong>Rare (25% of users):</strong> Unique combination of 2+ niche categories</li>
              <li><strong>Epic (12% of users):</strong> Highly concentrated interest in single niche area OR unusual keyword combinations</li>
              <li><strong>Legendary (3% of users):</strong> Statistical outlier in category diversity, color uniqueness, or engagement patterns</li>
            </ul>
            <p className="intro-text">
              Rarity creates <strong>social currency</strong> and drives sharing ("Look, I'm Epic!"). It also encourages users to diversify their saves to unlock rarer statuses in future years.
            </p>

            <h3>Dynamic Description Generation</h3>
            <p className="intro-text">
              Each identity card includes a two-sentence poetic description. Rather than hard-coding 45 descriptions, we use a <strong>template-based generator</strong> with variable slots:
            </p>
            <p className="code-example">
              "Your aesthetic blends [KEYWORD_1] [PRIMARY_CATEGORY] with [KEYWORD_2] [SECONDARY_ELEMENT], creating a [COLOR_DESCRIPTOR] visual world that celebrates [CORE_VALUE]."
            </p>
            <p className="intro-text">
              This approach generates thousands of unique variations while maintaining poetic cohesion.
            </p>
          </div>
        </motion.section>

        {/* Social Sharing Strategy */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="section-header">
            <Share2 size={32} className="section-icon" />
            <h2>Social Sharing Strategy: Engineered Virality</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              PinWrap's success depends on massive social sharing. Every element is designed to encourage users to broadcast their results.
            </p>

            <h3>Why Users Will Share</h3>
            <ul className="features-list">
              <li><strong>Identity Expression:</strong> The card is a beautiful, shareable artifact of personal taste—perfect Instagram content</li>
              <li><strong>Social Proof:</strong> Sharing demonstrates sophistication and self-awareness</li>
              <li><strong>FOMO Creation:</strong> Seeing friends' results creates urgency to generate your own</li>
              <li><strong>Conversation Starter:</strong> "I'm a [Archetype]! What are you?" becomes a social meme</li>
              <li><strong>Platform Loyalty Signal:</strong> Sharing PinWrap demonstrates commitment to Pinterest ecosystem</li>
            </ul>

            <h3>Sharing Mechanics</h3>
            <p className="intro-text"><strong>One-Click Export:</strong></p>
            <ul className="features-list">
              <li>High-quality PNG download (1080x1350px, optimized for Instagram)</li>
              <li>Includes subtle Pinterest watermark for attribution</li>
              <li>Pre-composed caption: "I'm a [Archetype]! Discover your PinWrap at [link] 📌✨ #PinWrap2025 #YearInAesthetics"</li>
            </ul>

            <p className="intro-text"><strong>Web Share API Integration:</strong></p>
            <ul className="features-list">
              <li>Native mobile sharing menu on supported devices</li>
              <li>Automatically includes card image and pre-written text</li>
              <li>Reduces friction from 5 taps to 2 taps</li>
            </ul>

            <p className="intro-text"><strong>Shareable Link:</strong></p>
            <ul className="features-list">
              <li>Unique URL per user (pinterest.com/wrapped/[user-id]) that replays their full experience</li>
              <li>Open Graph tags ensure rich previews on social platforms</li>
              <li>Friends can watch without logging in (first 10 seconds), then prompted to sign up to see their own</li>
            </ul>

            <h3>Hashtag Strategy</h3>
            <p className="intro-text">
              Create unified campaign hashtags:
            </p>
            <ul className="features-list">
              <li><strong>#PinWrap2025:</strong> Primary hashtag for all shares</li>
              <li><strong>#YearInAesthetics:</strong> Secondary, more descriptive tag</li>
              <li><strong>#[Archetype]:</strong> Identity-specific tags (e.g., #MinimalistCurator, #CozyDreamer)</li>
            </ul>
            <p className="intro-text">
              Monitor hashtag performance in real-time and feature best shares on @Pinterest official accounts, creating aspirational sharing competition.
            </p>

            <h3>Influencer Seeding</h3>
            <ul className="features-list">
              <li>Pre-launch access for top 500 Pinterest influencers (Nov 25-30)</li>
              <li>Custom "Influencer" rarity tier with gold badge</li>
              <li>Coordinated share date (Dec 1, 9am local time) to create trending moment</li>
              <li>Partnership with lifestyle YouTubers for reaction videos</li>
            </ul>
          </div>
        </motion.section>

        {/* Business Model */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="section-header">
            <TrendingUp size={32} className="section-icon" />
            <h2>Business Model & Monetization</h2>
          </div>
          <div className="section-content">
            <h3>Primary Value: User Engagement & Retention</h3>
            <p className="intro-text">
              PinWrap is primarily a <strong>retention and acquisition tool</strong>, not a direct revenue generator. However, it creates several business opportunities:
            </p>

            <h3>Immediate Value Drivers</h3>
            <ul className="features-list">
              <li><strong>Increased DAUs:</strong> Project 40-60% spike in December daily active users</li>
              <li><strong>Lapsed User Reactivation:</strong> Email campaign to inactive users with preview of their PinWrap drives 15-25% reactivation</li>
              <li><strong>New User Acquisition:</strong> Viral sharing exposes Pinterest to non-users; estimate 5-10% conversion via sign-up gates</li>
              <li><strong>Brand Affinity:</strong> Positive emotional experience increases NPS (Net Promoter Score) by est. 15-20 points</li>
            </ul>

            <h3>Monetization Opportunities (Future Phases)</h3>
            <p className="intro-text"><strong>Phase 2: Premium PinWrap ($4.99)</strong></p>
            <ul className="features-list">
              <li>Extended 90-second experience with additional analysis sections</li>
              <li>Custom archetype selection from full 45-option library</li>
              <li>Multiple card design themes (vintage, modern, holographic)</li>
              <li>Printable poster version (16"x20", shipped)</li>
              <li>Early access (Nov 20 vs. Dec 1 for free tier)</li>
              <li>Estimated take rate: 8-12% of engaged users = $2-3M revenue at scale</li>
            </ul>

            <p className="intro-text"><strong>Phase 3: Brand Partnerships</strong></p>
            <ul className="features-list">
              <li>Sponsored "Powered by" integration: "Your color palette analysis powered by [Paint Brand]"</li>
              <li>Affiliate links: Shoppable pins based on identity archetype ("Perfect for The Cozy Dreamer")</li>
              <li>Co-marketing campaigns with complementary brands (home decor, fashion, stationery)</li>
            </ul>

            <p className="intro-text"><strong>Phase 4: Enterprise/B2B Version</strong></p>
            <ul className="features-list">
              <li>White-label PinWrap for brands to analyze their followers' engagement</li>
              <li>Agency tool for client aesthetic analysis and reporting</li>
            </ul>
          </div>
        </motion.section>

        {/* Growth & Success Metrics */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="section-header">
            <BarChart3 size={32} className="section-icon" />
            <h2>Success Metrics & Projections</h2>
          </div>
          <div className="section-content">
            <h3>Key Performance Indicators</h3>
            <p className="intro-text"><strong>Engagement Metrics (December 2025 Target)</strong></p>
            <ul className="features-list">
              <li><strong>Participation Rate:</strong> 60% of active users complete PinWrap (compared to 35% baseline for year-end features)</li>
              <li><strong>Completion Rate:</strong> 85% of users who start finish all 5 phases (indicates compelling experience)</li>
              <li><strong>Replay Rate:</strong> 40% watch PinWrap 2+ times</li>
              <li><strong>Time in App:</strong> Average 8 minutes per session (5x December baseline)</li>
            </ul>

            <p className="intro-text"><strong>Sharing Metrics</strong></p>
            <ul className="features-list">
              <li><strong>Social Share Rate:</strong> 45% of completers share to at least one platform</li>
              <li><strong>Download Rate:</strong> 35% download identity card</li>
              <li><strong>Link Shares:</strong> 25% copy and share unique URL</li>
              <li><strong>Hashtag Reach:</strong> 50M+ impressions across #PinWrap2025 hashtag</li>
              <li><strong>Earned Media Value:</strong> $5-8M in equivalent advertising value from organic social sharing</li>
            </ul>

            <p className="intro-text"><strong>Acquisition & Retention</strong></p>
            <ul className="features-list">
              <li><strong>New User Sign-ups:</strong> 2M+ new accounts driven by viral sharing + FOMO</li>
              <li><strong>Lapsed User Reactivation:</strong> 25% of inactive users return to view PinWrap</li>
              <li><strong>7-Day Retention Lift:</strong> +20% for users who complete PinWrap vs. control group</li>
              <li><strong>30-Day Retention Lift:</strong> +12% sustained engagement bump</li>
            </ul>

            <h3>Benchmarking Against Spotify Wrapped</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Spotify Wrapped (2023)</th>
                  <th>PinWrap (Projected Year 1)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Active User Participation</td>
                  <td>~120M users</td>
                  <td>~70M users (60% of 115M MAU)</td>
                </tr>
                <tr>
                  <td>Social Shares</td>
                  <td>425M+ shares</td>
                  <td>150M+ shares (est.)</td>
                </tr>
                <tr>
                  <td>Twitter Impressions</td>
                  <td>5.9B impressions</td>
                  <td>2-3B impressions (est.)</td>
                </tr>
                <tr>
                  <td>Average Watch Time</td>
                  <td>~3 minutes</td>
                  <td>~4 minutes (includes sharing time)</td>
                </tr>
              </tbody>
            </table>
            <p className="intro-text">
              While Pinterest's user base is smaller than Spotify's, visual content is inherently more shareable, potentially closing the impressions gap.
            </p>

            <h3>Year-Over-Year Growth Projections</h3>
            <ul className="features-list">
              <li><strong>Year 1 (2025):</strong> Launch with core features, achieve 60% participation among active users</li>
              <li><strong>Year 2 (2026):</strong> 75% participation as PinWrap becomes anticipated tradition, add Premium tier</li>
              <li><strong>Year 3 (2027):</strong> 85% participation, introduce multi-year comparisons ("See how your taste evolved"), international expansion</li>
              <li><strong>Year 4+:</strong> Cultural phenomenon status, partnership integrations, potential spinoffs (Quarterly PinWrap, Brand PinWrap)</li>
            </ul>
          </div>
        </motion.section>

        {/* Implementation Timeline */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="section-header">
            <Rocket size={32} className="section-icon" />
            <h2>Implementation Timeline</h2>
          </div>
          <div className="section-content">
            <div className="timeline">
              <div className="timeline-item">
                <h3>Q1 2025 (Jan-Mar): Foundation</h3>
                <ul className="features-list">
                  <li><strong>Jan:</strong> Product requirements finalization, design system creation</li>
                  <li><strong>Feb:</strong> Begin data pipeline development, start collecting 2025 save data with enhanced metadata</li>
                  <li><strong>Mar:</strong> Frontend prototype (Phase 1-2) completed, internal testing begins</li>
                </ul>
              </div>

              <div className="timeline-item">
                <h3>Q2 2025 (Apr-Jun): Core Development</h3>
                <ul className="features-list">
                  <li><strong>Apr:</strong> Complete all 5 phases frontend development</li>
                  <li><strong>May:</strong> Build identity archetype system and personalization algorithms</li>
                  <li><strong>Jun:</strong> Integration testing, performance optimization, accessibility audit</li>
                </ul>
              </div>

              <div className="timeline-item">
                <h3>Q3 2025 (Jul-Sep): Testing & Refinement</h3>
                <ul className="features-list">
                  <li><strong>Jul:</strong> Beta testing with 5,000 internal employees + power users</li>
                  <li><strong>Aug:</strong> Iterate based on feedback, A/B test animation timings and copy variations</li>
                  <li><strong>Sep:</strong> Finalize production build, prepare marketing assets, begin influencer outreach</li>
                </ul>
              </div>

              <div className="timeline-item">
                <h3>Q4 2025 (Oct-Dec): Launch</h3>
                <ul className="features-list">
                  <li><strong>Oct:</strong> Pre-compute analytics for all eligible users (50+ saves in 2025)</li>
                  <li><strong>Nov 25-30:</strong> Influencer early access, seed initial shares</li>
                  <li><strong>Dec 1:</strong> PUBLIC LAUNCH - Email blast, in-app notifications, social campaign</li>
                  <li><strong>Dec 1-31:</strong> Real-time monitoring, rapid bug fixes, daily highlight features on @Pinterest</li>
                  <li><strong>Dec 31:</strong> Campaign wrap, success analysis, planning for 2026 enhancements</li>
                </ul>
              </div>
            </div>

            <h3>Resource Requirements</h3>
            <p className="intro-text"><strong>Team Composition (6-month core development)</strong></p>
            <ul className="features-list">
              <li>1 Product Manager (full-time)</li>
              <li>1 Product Designer (full-time)</li>
              <li>3 Frontend Engineers (full-time)</li>
              <li>2 Backend Engineers (full-time)</li>
              <li>1 Data Scientist (50% allocation for analytics algorithm)</li>
              <li>1 QA Engineer (full-time for Q3)</li>
              <li>1 Marketing Manager (50% allocation, ramp to full-time in Q4)</li>
              <li>1 Content Writer (for copy, archetype descriptions)</li>
            </ul>

            <p className="intro-text"><strong>Estimated Budget</strong></p>
            <ul className="features-list">
              <li>Personnel: $850K (blended rate across team)</li>
              <li>Infrastructure (servers, CDN, analytics): $120K</li>
              <li>Marketing (influencer fees, email campaigns, social ads): $200K</li>
              <li>Design assets (illustration, motion graphics): $50K</li>
              <li><strong>Total Investment:</strong> ~$1.22M for Year 1</li>
            </ul>

            <p className="intro-text">
              <strong>Expected ROI:</strong> Based on projected retention lift and new user acquisition, estimated $15-25M value creation in Year 1 (12-20x return), with compounding value in subsequent years as PinWrap becomes annual tradition.
            </p>
          </div>
        </motion.section>

        {/* Future Enhancements */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="section-header">
            <Heart size={32} className="section-icon" />
            <h2>Future Enhancements & Roadmap</h2>
          </div>
          <div className="section-content">
            <h3>Year 2 (2026) Additions</h3>
            <ul className="features-list">
              <li><strong>Year-Over-Year Comparison:</strong> "Your 2026 vs. 2025" showing how aesthetic evolved</li>
              <li><strong>Monthly Mini-Wraps:</strong> Bite-sized monthly recaps to maintain engagement year-round</li>
              <li><strong>Collaborative PinWrap:</strong> Generate combined aesthetic for couples, friend groups, or teams</li>
              <li><strong>Interactive Customization:</strong> Let users rearrange or exclude certain saves from their analysis</li>
              <li><strong>AR Card Viewer:</strong> View 3D holographic version of identity card via phone camera</li>
            </ul>

            <h3>Year 3+ (2027+) Vision</h3>
            <ul className="features-list">
              <li><strong>Predictive Insights:</strong> "Based on your 2027 PinWrap, here's what we predict you'll love in 2028"</li>
              <li><strong>Career Integration:</strong> PinWrap for Creatives - Portfolio version targeting designers, photographers, artists</li>
              <li><strong>Brand PinWrap:</strong> B2B tool for brands to analyze their follower aesthetics and create targeted campaigns</li>
              <li><strong>Physical Products:</strong> Printed coffee table books, custom wrapping paper featuring user's top pins, aesthetic-based product recommendations</li>
              <li><strong>Global Expansion:</strong> Localized archetypes for different cultural aesthetics (Scandinavian minimalism, Japanese wabi-sabi, etc.)</li>
            </ul>

            <h3>Seasonal & Special Editions</h3>
            <ul className="features-list">
              <li><strong>Summer PinWrap (July):</strong> Mid-year check-in highlighting travel and summer aesthetic</li>
              <li><strong>Life Event PinWraps:</strong> Triggered versions for major milestones (weddings, moves, new babies) showing user's planning journey</li>
              <li><strong>Decade PinWrap (2030):</strong> Ultimate retrospective spanning entire decade of Pinterest use</li>
            </ul>
          </div>
        </motion.section>

        {/* Competitive Advantage */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="section-header">
            <Award size={32} className="section-icon" />
            <h2>Competitive Advantage & Market Position</h2>
          </div>
          <div className="section-content">
            <h3>Why Pinterest Wins This Category</h3>
            <ul className="features-list">
              <li><strong>Visual-First DNA:</strong> Pinterest is the only major platform built entirely around visual discovery, making aesthetic analysis feel native</li>
              <li><strong>Aspiration Over Reality:</strong> Unlike Instagram (what you post) or TikTok (what you watch), Pinterest shows who you WANT to be—more intimate and revealing</li>
              <li><strong>Rich Intent Data:</strong> Saves indicate deliberate curation, not passive scrolling. Each pin represents a conscious aesthetic choice.</li>
              <li><strong>Low Competition:</strong> No direct competitor has successfully executed year-end visual review (Instagram Playback discontinued 2016)</li>
              <li><strong>Cultural Timing:</strong> Year-end wrap-ups are now expected by users; absence is conspicuous</li>
            </ul>

            <h3>Differentiation from Spotify Wrapped</h3>
            <p className="intro-text">While inspired by Spotify Wrapped's success, PinWrap is distinctly suited to visual content:</p>
            <ul className="features-list">
              <li><strong>Higher Shareability:</strong> Identity cards are visually striking standalone assets vs. text-heavy Spotify graphics</li>
              <li><strong>Deeper Identity Connection:</strong> Visual aesthetic is more core to identity than music taste for many users</li>
              <li><strong>Lower Embarrassment Risk:</strong> Unlike quirky music listens, aesthetic preferences are universally shareable</li>
              <li><strong>Evergreen Format:</strong> Beautiful cards remain share-worthy weeks after launch vs. Spotify's 7-day peak</li>
            </ul>
          </div>
        </motion.section>

        {/* Risk Analysis */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="section-header">
            <Shield size={32} className="section-icon" />
            <h2>Risk Analysis & Mitigation</h2>
          </div>
          <div className="section-content">
            <div className="risk-table">
              <div className="risk-item">
                <h4 className="risk-high">High Impact: Server Overload on Launch Day</h4>
                <p><strong>Risk:</strong> 40M+ users trying to access simultaneously crashes infrastructure</p>
                <p><strong>Mitigation:</strong></p>
                <ul className="features-list">
                  <li>Pre-compute all analytics in November, store results in fast-access cache</li>
                  <li>Implement queue system with estimated wait times ("You're #543 in line, approx. 2 min")</li>
                  <li>Stagger email notifications across time zones (rolling midnight releases)</li>
                  <li>Provision 3x normal server capacity for December</li>
                </ul>
              </div>

              <div className="risk-item">
                <h4 className="risk-medium">Medium Impact: Inaccurate Identity Archetypes</h4>
                <p><strong>Risk:</strong> Users feel misrepresented by assigned archetype, causing negative sentiment</p>
                <p><strong>Mitigation:</strong></p>
                <ul className="features-list">
                  <li>Extensive beta testing (5,000 users) to validate archetype accuracy</li>
                  <li>Offer "Customize" option in Premium tier to manually select archetype</li>
                  <li>Use poetic, positive language for all descriptions (no negative archetypes)</li>
                  <li>Include disclaimer: "Your aesthetic is unique—this is our interpretation"</li>
                </ul>
              </div>

              <div className="risk-item">
                <h4 className="risk-medium">Medium Impact: Privacy Concerns</h4>
                <p><strong>Risk:</strong> Users uncomfortable with Pinterest "analyzing" their behavior so deeply</p>
                <p><strong>Mitigation:</strong></p>
                <ul className="features-list">
                  <li>Make PinWrap opt-in (users click to generate, not auto-generated)</li>
                  <li>Clear privacy messaging: "All analysis stays private unless you choose to share"</li>
                  <li>Offer granular controls: exclude specific boards, date ranges, or categories from analysis</li>
                  <li>Transparent data usage: show exactly what data feeds each section</li>
                </ul>
              </div>

              <div className="risk-item">
                <h4 className="risk-low">Low Impact: Low New User Engagement (Insufficient 2025 Data)</h4>
                <p><strong>Risk:</strong> New users who joined mid-2025 don't have enough data for meaningful PinWrap</p>
                <p><strong>Mitigation:</strong></p>
                <ul className="features-list">
                  <li>Set minimum threshold: 50 saves required to generate PinWrap</li>
                  <li>For users below threshold, show teaser: "You're on your way! Save [X] more pins to unlock PinWrap 2026"</li>
                  <li>Create "New User Preview" experience using aggregated platform trends</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          className="proposal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <div className="section-header">
            <CheckCircle2 size={32} className="section-icon" />
            <h2>Conclusion: The Future of Visual Storytelling</h2>
          </div>
          <div className="section-content">
            <p className="intro-text">
              PinWrap represents more than a year-end feature—it's a paradigm shift in how platforms help users understand themselves through their digital behaviors. In a world saturated with content, people crave <strong>meaning, reflection, and identity</strong>.
            </p>
            <p className="intro-text">
              By transforming passive saving into active self-discovery, PinWrap elevates Pinterest from a utility to a companion in users' creative journeys. It answers the fundamental question every user subconsciously asks: <em>"What does all this say about me?"</em>
            </p>
            <p className="intro-text">
              The technical execution—cinematic animations, personalized archetypes, shareable artifacts—is in service of a deeper emotional goal: <strong>helping users see themselves more clearly</strong>. When Pinterest holds up this mirror, users won't just see their aesthetic—they'll see a reflection of their dreams, values, and evolving identity.
            </p>
            <p className="intro-text">
              And when users see that reflection, they'll want to share it with the world. That's how PinWrap becomes Pinterest's most powerful growth engine, most beloved feature, and most enduring legacy.
            </p>

            <div className="final-stats">
              <div className="stat-box">
                <div className="stat-number">50 seconds</div>
                <div className="stat-label">To change how users see Pinterest</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">$1.2M</div>
                <div className="stat-label">Investment for $15-25M+ value creation</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">70M+</div>
                <div className="stat-label">Users discovering their aesthetic identity</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">150M+</div>
                <div className="stat-label">Social shares in Year 1</div>
              </div>
            </div>

            <p className="intro-text conclusion-text">
              <strong>PinWrap isn't just what users saved in 2025.</strong><br/>
              <strong>It's who they became.</strong>
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <button
            className="cta-button"
            onClick={() => navigate('/wrapped/prototype')}
          >
            <Sparkles size={20} />
            <span>Experience the PinWrap Prototype</span>
            <ArrowRight size={20} />
          </button>
          <p className="cta-subtitle">See the vision in action with our fully functional demo</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConceptPage;
