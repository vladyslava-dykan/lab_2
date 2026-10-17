function Contacts() {
  return (
    <section id="contacts" className="rounded-md border-2 border-l-8 border-green-900 bg-white p-5 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-blue-900 pb-1 text-2xl font-bold text-green-900">Посилання на соціальні мережі</h2>
      <a
        className="font-bold text-blue-900 hover:underline"
        href="https://github.com/vladyslava-dykan"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </section>
  );
}

export default Contacts;