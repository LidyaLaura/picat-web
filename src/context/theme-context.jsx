import React, { createContext, useContext, useState, useEffect } from 'react';

// Buat Context
const ThemeContext = createContext();

// Buat Provider untuk Context
export function ThemeProvider({ children }) {
  // 1. Ambil nilai dari localStorage saat inisialisasi state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Gunakan try-catch untuk menangani kemungkinan error pada localStorage
    try {
      const storedValue = localStorage.getItem('isDarkMode');
      // Jika ada nilai, kembalikan nilai boolean dari string yang tersimpan
      return storedValue === 'true'; 
    } catch (e) {
      // Jika terjadi error (misalnya, localStorage tidak didukung), 
      // kembalikan nilai default
      return false;
    }
  });

  useEffect(() => {
    // 2. Setiap kali isDarkMode berubah, simpan nilainya ke localStorage
    try {
      localStorage.setItem('isDarkMode', isDarkMode);
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    } catch (e) {
      // Tangani error jika gagal menyimpan ke localStorage
      console.error("Failed to save theme preference to localStorage:", e);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Buat hook kustom untuk memudahkan penggunaan Context
export function useTheme() {
  return useContext(ThemeContext);
}