# ZenBites - Buddhist Japanese Vegetarian Kitchen

A modern, single-page restaurant website built with Next.js 14, featuring a Japanese Zen aesthetic and mindful dining experience.

## 🌸 Features

### Design & Aesthetics
- **Japanese Zen Design**: Clean, minimalist design inspired by Buddhist temple aesthetics
- **Custom Color Palette**: Sakura Pink, Zen Green, Rice Paper White, Wood Brown, Ink Black
- **Typography**: Sawarabi Mincho (titles) and Noto Sans JP (body text)
- **Responsive Design**: Optimized for all devices

### Interactive Elements
- **Sakura Petals Animation**: Continuously drifting petals using Anime.js
- **Scroll Animations**: Smooth fade-in, slide-up, and parallax effects with Framer Motion
- **Bento Box Reveals**: Hover animations for menu items
- **Shoji Sliding Panels**: Culture section accordion animations
- **Lantern Glow Effects**: Video section hover animations

### Sections
1. **Hero Section**: Full-screen with background video/image, floating elements, and smooth scroll
2. **About Us**: Mission statement with animated value cards (Mindfulness, Sustainability, Wellness)
3. **Menu**: Grid layout with all dishes, prices, and category filtering
4. **Culture**: Interactive timeline/accordion about Shojin Ryori history
5. **Videos**: Embedded educational and promotional videos with glow effects
6. **Promotions**: Special offers with countdown timer and floating petals
7. **Contact**: Reservation form with validation and contact information

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configurations
- **Animations**: 
  - Framer Motion for scroll-triggered animations
  - Anime.js for sakura petal drift animation
- **Fonts**: Google Fonts (Sawarabi Mincho, Noto Sans JP)
- **Language**: TypeScript for type safety

## 📦 Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🍃 Menu Items

### Appetizers
- Edamame - ₹250
- Goma-ae - ₹280

### Soups
- Miso Soup - ₹220

### Main Courses
- Shojin Tempura - ₹450
- Vegetarian Sushi Rolls - ₹400
- Tofu Steak - ₹500
- Zaru Soba - ₹380

### Desserts
- Matcha Ice Cream - ₹300
- Sweet Red Bean Mochi - ₹320

### Beverages
- Green Tea - ₹150
- Yuzu Lemonade - ₹180

## 🎯 Special Offers

- **Taste of Zen Combo**: ₹999 (Save ₹201)
- **Free Matcha Ice Cream**: For first 100 customers

## 📍 Contact Information

- **Location**: New Delhi, India (Connaught Place Area)
- **Phone**: +91-9876543210
- **Email**: contact@zenbites.in
- **Hours**: 
  - Mon-Fri: 12:00 PM - 10:00 PM
  - Sat-Sun: 11:00 AM - 10:30 PM

## 🎨 Design Philosophy

ZenBites embodies the principles of Buddhist temple cuisine (Shojin Ryori):

- **Mindfulness**: Every element designed with conscious intention
- **Simplicity**: Clean, uncluttered interface that promotes focus
- **Harmony**: Balanced color palette and typography inspired by nature
- **Respect**: Honoring both the user experience and the culinary tradition

## 🚀 Key Features Implementation

### Animations
- **Sakura Petals**: Continuous drift animation using Anime.js
- **Scroll Triggers**: Framer Motion with viewport detection
- **Hover Effects**: Smooth transitions and micro-interactions
- **Loading States**: Skeleton screens and loading indicators

### Performance
- **Optimized Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels and semantic structure
- **High Contrast**: Accessible color combinations
- **Responsive Text**: Scalable typography

## 🔧 Customization

The website is built with modularity in mind:

- **Colors**: Update the Tailwind config for custom color schemes
- **Fonts**: Change Google Fonts imports in layout.tsx
- **Menu Items**: Update the menu data in Menu.tsx
- **Content**: Modify section content in respective component files

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌟 Future Enhancements

- Online ordering system integration
- Multi-language support (Japanese/Hindi)
- 360° virtual restaurant tour
- Seasonal menu updates
- Customer review system
- Loyalty program integration

---

**ZenBites** - Where mindful dining meets modern technology. 🧘‍♀️🌸
