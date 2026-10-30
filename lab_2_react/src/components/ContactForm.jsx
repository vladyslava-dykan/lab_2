import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-11/12 max-w-md rounded-md bg-white p-6 text-slate-800">
            <h2 className="mb-3 text-2xl font-bold text-green-900">Форма зворотного зв'язку</h2>

            <form action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" method="POST" className="flex flex-col gap-2">
              <label htmlFor="name">Ім'я</label>
              <input className="rounded border p-2" type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input className="rounded border p-2" type="email" id="email" name="email" required />

              <label htmlFor="phone">Номер телефону</label>
              <input className="rounded border p-2" type="tel" id="phone" name="phone" required />

              <label htmlFor="message">Повідомлення</label>
              <textarea className="rounded border p-2" id="message" name="message" rows="4" required></textarea>

              <div className="mt-3 flex gap-3">
                <button type="submit" className="rounded bg-green-900 px-4 py-2 text-white hover:bg-green-700">
                  Надіслати
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="rounded border px-4 py-2 hover:bg-gray-100">
                  Закрити
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;