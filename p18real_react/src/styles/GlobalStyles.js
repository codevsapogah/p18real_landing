import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #5856D6;
    --secondary-color: #34C759;
    --accent-color: #FF9500;
    --text-color: #333333;
    --light-text: #666666;
    --background-color: #F5F5FA;
    --card-background: #FFFFFF;
    --border-color: #E5E5EA;
    --shadow-color: rgba(0, 0, 0, 0.1);
    
    /* Schema card colors */
    --reduced-color: #DC2626;
    --average-color: #FF6100;
    --increased-color: #FFD900;
    --high-color: #16A34A;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--text-color);
    background-color: var(--background-color);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--accent-color);
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    padding: 4rem 0;
  }

  .section-subtitle {
    text-align: center;
    color: var(--light-text);
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(88, 86, 214, 0.7);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(88, 86, 214, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(88, 86, 214, 0);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    h3 {
      font-size: 1.25rem;
    }
    
    section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles; 