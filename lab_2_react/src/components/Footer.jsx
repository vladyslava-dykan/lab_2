import { useState, useEffect } from 'react';

function Footer() {
  const [info, setInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    // 1. Зберігаємо дані в localStorage
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    // 2. Зчитуємо їх назад з localStorage і кладемо в стан
    setInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform'),
    });
  }, []);

  return (
    <footer className="border-t-4 border-blue-900 bg-green-900 px-5 py-5 text-white md:px-10">
      <p>
        <strong>Контакти:</strong>{' '}
        <a className="text-blue-300 hover:underline" href="mailto:vladyslava.dykan.kb.2025@lpnu.ua">
          vladyslava.dykan.kb.2025@lpnu.ua
        </a>
      </p>
      <p>&copy; 2026 Дикань Владислава</p>

      <p className="mt-3 break-all text-sm">userAgent: {info.userAgent}</p>
      <p className="break-all text-sm">platform: {info.platform}</p>
    </footer>
  );
}

export default Footer;