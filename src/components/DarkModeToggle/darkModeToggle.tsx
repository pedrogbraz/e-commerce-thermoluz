// src/components/DarkModeToggle.tsx
import { useState } from 'react';
import styles from './darkModeToggle.module.css'; // Importa estilos CSS para usar classes dinâmicas
import { IoMoon, IoSunnySharp } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleDarkMode = () => {
    setIsAnimating(true); // Inicia a animação

    setTimeout(() => {
      setIsAnimating(false); // Finaliza a animação após 300ms (duração da transição)
      setIsDarkMode(!isDarkMode);
      if (!isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, 300);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`${styles.darkModeToggle} ${isAnimating ? styles.animating : ''}`}
    >
      <div className={styles.iconContainer}>
        {isDarkMode ? (
          <IoSunnySharp className={isAnimating ? styles.rotatingIcon : ''} />
        ) : (
          <IoMoon className={isAnimating ? styles.rotatingIcon : ''} />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
