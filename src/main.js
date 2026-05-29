// src/main.js
import './styles/global.css';
import './styles/components.css';
import './styles/variables.css';

// Import component render functions (they will append to #app)
import { renderNavBar } from './components/NavBar.js';
import { renderHero } from './components/HeroSection.js';
import { renderWhatYouLearn } from './components/WhatYouLearnSection.js';
import { renderCurriculum } from './components/CurriculumSection.js';
import { renderBenefits } from './components/BenefitsSection.js';
import { renderSocialProof } from './components/SocialProofSection.js';
import { renderNotableAlumni } from './components/NotableAlumniSection.js';
import { renderMentor } from './components/MentorSection.js';
import { renderFacilities } from './components/FacilitiesSection.js';
import { renderClassGallery } from './components/ClassGallerySection.js';
import { renderSchedule } from './components/ScheduleSection.js';
import { renderFinalCTA } from './components/FinalCTASection.js';
import { renderFooter } from './components/Footer.js';
import { initScrollReveal } from './components/ScrollReveal.js';

const app = document.getElementById('app');

// Render sections in order
renderNavBar(app);
renderHero(app);
renderWhatYouLearn(app);
renderCurriculum(app);
renderBenefits(app);
renderSocialProof(app);
renderNotableAlumni(app);
renderMentor(app);
renderFacilities(app);
renderClassGallery(app);
renderSchedule(app);
renderFinalCTA(app);
renderFooter(app);

// Initialize scroll reveal after DOM is ready
initScrollReveal();
