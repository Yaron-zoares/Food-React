// LanguageSelector.js

import { getCurrentLanguage, setCurrentLanguage } from '../translations/translationUtils.js';
import { supportedLanguages } from '../config.is/config.js';

export class LanguageSelector {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentLanguage = getCurrentLanguage();
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="language-selector">
        <label for="language-select">Language / שפה:</label>
        <select id="language-select" class="language-select">
          ${supportedLanguages.map(lang => `
            <option value="${lang}" ${lang === this.currentLanguage ? 'selected' : ''}>
              ${lang === 'en' ? 'English' : 'עברית'}
            </option>
          `).join('')}
        </select>
      </div>
    `;
  }

  attachEventListeners() {
    const select = this.container.querySelector('#language-select');
    if (select) {
      select.addEventListener('change', (e) => {
        const newLanguage = e.target.value;
        this.changeLanguage(newLanguage);
      });
    }
  }

  changeLanguage(newLanguage) {
    this.currentLanguage = newLanguage;
    setCurrentLanguage(newLanguage);
    
    // Dispatch custom event to notify other components
    const event = new CustomEvent('languageChanged', {
      detail: { language: newLanguage }
    });
    document.dispatchEvent(event);
    
    // Re-render the selector
    this.render();
    this.attachEventListeners();
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// CSS styles for the language selector
export const languageSelectorStyles = `
  .language-selector {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .language-selector label {
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .language-select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    font-size: 14px;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .language-select:hover {
    border-color: #007bff;
  }

  .language-select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  /* RTL support for Hebrew */
  [dir="rtl"] .language-selector {
    flex-direction: row-reverse;
  }

  [dir="rtl"] .language-selector label {
    text-align: right;
  }
`;

// Function to inject styles
export const injectLanguageSelectorStyles = () => {
  if (!document.getElementById('language-selector-styles')) {
    const style = document.createElement('style');
    style.id = 'language-selector-styles';
    style.textContent = languageSelectorStyles;
    document.head.appendChild(style);
  }
};

// Function to initialize language selector
export const initLanguageSelector = (containerId) => {
  injectLanguageSelectorStyles();
  return new LanguageSelector(containerId);
}; 