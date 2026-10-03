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
    <section id="skills">
      <h2>Навички</h2>

      <h3>Технічні навички</h3>
      <ul>
        {technical.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Мови</h3>
      <ul>
        {languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;