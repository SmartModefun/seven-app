# Seven App - Project Specification

## Overview
Seven App is a multi-course learning platform where users can learn various skills in 7 days. Each course has daily lessons with vocabulary, phrases, and practical content.

## Courses
- **Inglés en 7 Días** (English) - `ingles-7-dias.html`
- **Community Manager en 7 Días** (Community Manager) - `community-manager.html`
- **Marketing Digital en 7 Días** (Marketing Digital) - `marketing-digital.html`
- **E-commerce en 7 Días** (E-commerce) - `ecommerce.html`

## File Structure

### Landing Pages
- `index.html` - Main landing page with course selection
- `ingles-7-dias.html` - English course landing page
- `community-manager.html` - CM course landing page
- `marketing-digital.html` - Marketing Digital landing page
- `ecommerce.html` - E-commerce landing page

### English Course
- `ingles-2.html` through `ingles-7.html` - Days 2-7

### Community Manager Course
- `cm-1.html` - Day 1: Fundamentos
- `cm-2.html` - Day 2: Instagram
- `cm-3.html` - Day 3: TikTok
- `cm-4.html` - Day 4: LinkedIn
- `cm-5.html` - Day 5: Métricas y Analytics
- `cm-6.html` - Day 6: Creación de Contenido
- `cm-7.html` - Day 7: Repaso y Plan de Acción

### Marketing Digital Course
- `mk-1.html` - Day 1: Fundamentos
- `mk-2.html` - Day 2: Embudo de Ventas
- `mk-3.html` - Day 3: SEO
- `mk-4.html` - Day 4: Google Ads
- `mk-5.html` - Day 5: Email Marketing
- `mk-6.html` - Day 6: Social Media Ads
- `mk-7.html` - Day 7: Plan de Marketing

### E-commerce Course
- `ec-1.html` - Day 1: Fundamentos
- `ec-2.html` - Day 2: Plataformas
- `ec-3.html` - Day 3: Catálogo
- `ec-4.html` - Day 4: Pagos
- `ec-5.html` - Day 5: Envíos
- `ec-6.html` - Day 6: Marketing
- `ec-7.html` - Day 7: Lanzamiento

### Core Files
- `pago.html` - Payment page (PayPal, Bank Transfer, Access Code)
- `dashboard.html` - User dashboard
- `firebase-config.js` - Firebase configuration
- `styles.css` - Global styles

## Features
- Day 1 is FREE for all courses
- Days 2-7 require payment ($7 USD)
- Email authentication with Firebase
- PayPal integration
- Bank transfer with currency calculator
- Access code system for testers
- Completion screen on Day 7 of each course

## Technology Stack
- HTML5, CSS3, JavaScript
- Firebase Authentication
- Cloud Functions for payment verification
- Firebase Firestore for database
- Firebase Hosting

## Configuration
- Firebase project ID: sevenapp-38711
- Hosting URL: https://sevenapp-38711.web.app
