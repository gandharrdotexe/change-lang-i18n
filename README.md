# Website Language Change Boilerplate (English ↔ Hindi)

A complete boilerplate solution for implementing dynamic language switching between English and Hindi in web applications using internationalization (i18n) best practices.

## 🌟 Features

- **Seamless Language Toggle**: Switch between English and Hindi with a single click
- **Persistent Language Preference**: Remembers user's language choice across sessions
- **RTL Support**: Proper right-to-left text rendering for Hindi content
- **SEO Friendly**: Proper meta tags and URL structure for multilingual content
- **Responsive Design**: Language toggle works perfectly on all device sizes
- **Easy Integration**: Drop-in solution for existing projects
- **Translation Management**: Organized JSON structure for easy translation updates

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/change-lang-i18n.git

# Navigate to project directory
cd change-lang-i18n

# Install dependencies
npm install

# Start development server
npm start
```

### Basic Usage

1. **Include the CSS and JS files**:
```html
<link rel="stylesheet" href="css/language-switcher.css">
<script src="js/change-lang-i18n.js"></script>
```

2. **Add language toggle button**:
```html
<button id="language-toggle" class="lang-btn">
  <span class="lang-text">हिन्दी</span>
</button>
```

3. **Initialize the language system**:
```javascript
// Initialize language switcher
const langSwitcher = new LanguageSwitcher({
  defaultLang: 'en',
  supportedLangs: ['en', 'hi'],
  translationsPath: './translations/'
});

langSwitcher.init();
```

## 📁 Project Structure

```
change-lang-i18n/
├── css/
│   ├── main.css
│   ├── language-switcher.css
│   └── fonts/
│       └── hindi-fonts.css
├── js/
│   ├── change-lang-i18n.js
│   └── utils.js
├── translations/
│   ├── en.json
│   └── hi.json
├── images/
│   ├── flags/
│   │   ├── en.svg
│   │   └── hi.svg
├── examples/
│   ├── basic-example.html
│   ├── advanced-example.html
│   └── react-example/
├── docs/
│   └── api-reference.md
├── index.html
├── package.json
└── README.md
```

## 🔧 Configuration

### Translation Files

**English (translations/en.json)**:
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  },
  "common": {
    "welcome": "Welcome",
    "language": "Language",
    "switch_to_hindi": "Switch to Hindi"
  }
}
```

**Hindi (translations/hi.json)**:
```json
{
  "navigation": {
    "home": "होम",
    "about": "हमारे बारे में",
    "services": "सेवाएं",
    "contact": "संपर्क"
  },
  "common": {
    "welcome": "स्वागत है",
    "language": "भाषा",
    "switch_to_hindi": "अंग्रेजी में बदलें"
  }
}
```

### Advanced Configuration

```javascript
const config = {
  // Default language
  defaultLang: 'en',
  
  // Supported languages
  supportedLangs: ['en', 'hi'],
  
  // Path to translation files
  translationsPath: './translations/',
  
  // Storage options
  storage: {
    type: 'localStorage', // 'localStorage' or 'sessionStorage'
    key: 'selectedLanguage'
  },
  
  // Animation settings
  animation: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out'
  },
  
  // RTL support
  rtl: {
    enabled: true,
    languages: ['hi'] // Languages that require RTL
  },
  
  // Font loading
  fonts: {
    hindi: 'Noto Sans Devanagari, Arial, sans-serif'
  }
};
```

## 💡 Implementation Examples

### HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-translate="page.title">My Website</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/language-switcher.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#" data-translate="nav.home">Home</a></li>
                <li><a href="#" data-translate="nav.about">About</a></li>
                <li><a href="#" data-translate="nav.services">Services</a></li>
                <li><a href="#" data-translate="nav.contact">Contact</a></li>
            </ul>
            <button id="language-toggle" class="lang-btn">
                <img src="images/flags/hi.svg" alt="Hindi" class="flag-icon">
                <span data-translate="common.switch_to_hindi">हिन्दी</span>
            </button>
        </nav>
    </header>
    
    <main>
        <h1 data-translate="common.welcome">Welcome</h1>
        <p data-translate="content.description">This is a sample description.</p>
    </main>
    
    <script src="js/change-lang-i18n.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const langSwitcher = new LanguageSwitcher();
            langSwitcher.init();
        });
    </script>
</body>
</html>
```

### JavaScript/React Integration

```jsx
import React, { useState, useEffect } from 'react';
import { LanguageSwitcher } from './utils/change-lang-i18n';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const langSwitcher = new LanguageSwitcher({
      onLanguageChange: (lang, trans) => {
        setCurrentLang(lang);
        setTranslations(trans);
      }
    });
    langSwitcher.init();
  }, []);

  return (
    <div className={`app ${currentLang === 'hi' ? 'rtl' : 'ltr'}`}>
      <header>
        <h1>{translations?.common?.welcome || 'Welcome'}</h1>
        <button onClick={() => langSwitcher.toggle()}>
          {currentLang === 'en' ? 'हिन्दी' : 'English'}
        </button>
      </header>
    </div>
  );
}
```


## 🔌 API Reference

### LanguageSwitcher Class

#### Constructor
```javascript
new LanguageSwitcher(options)
```

#### Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `init()` | Initialize the language switcher | None |
| `setLanguage(lang)` | Set specific language | `lang: string` |
| `toggle()` | Toggle between available languages | None |
| `getCurrentLanguage()` | Get current language code | None |
| `getTranslations()` | Get current translations object | None |
| `addTranslation(key, value)` | Add new translation | `key: string, value: object` |

#### Events

```javascript
langSwitcher.on('languageChanged', (lang, translations) => {
  console.log(`Language changed to: ${lang}`);
});

langSwitcher.on('translationsLoaded', (translations) => {
  console.log('Translations loaded:', translations);
});
```

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📱 Mobile Optimization

The boilerplate includes responsive design patterns for mobile devices:

- Touch-friendly language toggle buttons
- Proper viewport handling for both LTR and RTL layouts
- Font scaling for different screen sizes
- Gesture support for language switching

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Test language switching
npm run test:lang-switch

# Test RTL layout
npm run test:rtl
```

## 🚀 Deployment

### Static Hosting
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy:gh-pages

# Deploy to Netlify
npm run deploy:netlify
```

### CDN Usage
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/change-lang-i18n@latest/dist/change-lang-i18n.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/change-lang-i18n@latest/dist/change-lang-i18n.min.js"></script>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/change-lang-i18n.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and test
npm run test

# Submit a pull request
```



## 🙏 Acknowledgments

- **Google Fonts** for Devanagari font families
- **Unicode Consortium** for standardized Hindi text rendering
- **Community contributors** for translations and testing
- **Browser vendors** for improved i18n support



## 🏷️ Keywords

`i18n` `internationalization` `hindi` `english` `language-switching` `multilingual` `website` `boilerplate` `javascript` `css` `rtl` `devanagari`

---

Made with ❤️ for the global web community
