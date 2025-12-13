import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #5856D6; /* Primary Purple */
    --accent-color: #16A34A; /* Accent Green */
    --secondary-color: #FF6100; /* Orange */
    --warning-color: #DC2626; /* Red */
    --success-color: #16A34A; /* Green */
    --info-color: #0EA5E9; /* Blue */
    --background-color: #F9FAFB; /* Light Background */
    --card-background: #FFFFFF; /* Card Background */
    --text-color: #1F2937; /* Dark Text */
    --text-secondary: #6B7280; /* Secondary Text */
    --footer-bg-color: #2D2D3A; /* Footer Background */
    --footer-text-color: #FFFFFF; /* Footer Text */
    --footer-title-color: #FFFFFF; /* Footer Title */
    --footer-logo-color: #FFFFFF; /* Footer Logo */
    --footer-link-color: rgba(255, 255, 255, 0.8); /* Footer Link */
    --footer-icon-color: #FFFFFF; /* Footer Icon */
    --border-radius: 8px; /* Default Border Radius */
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03); /* Default Box Shadow */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.5;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--accent-color);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  input, button, textarea, select {
    font: inherit;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default GlobalStyles; 