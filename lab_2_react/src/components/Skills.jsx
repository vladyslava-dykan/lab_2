function Skills() {
  const technical = [
    'Проєктування структури вебсторінок за стандартами семантичної верстки HTML5',
    'Основи роботи з Git та GitHub',
    'Базове програмування на Python',
    'Взаємодія з сервером через мережеві протоколи',
  ];

  const languages = [
    'Українська - рідна',
    'Англійська - Intermediate (B1/B2)',
  ];

  return (
    <section id="skills" className="rounded-md border-2 border-l-8 border-green-900 bg-white p-5 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-blue-900 pb-1 text-2xl font-bold text-green-900">Навички</h2>

      <h3 className="mb-1 mt-3 text-xl font-semibold text-blue-900">Технічні навички</h3>
      <ul className="list-disc pl-5">
        {technical.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mb-1 mt-3 text-xl font-semibold text-blue-900">Мови</h3>
      <ul className="list-disc pl-5">
        {languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;