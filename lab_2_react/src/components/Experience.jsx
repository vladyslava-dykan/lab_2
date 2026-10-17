function Experience() {
    return(
        <section id="experience" className="rounded-md border-2 border-l-8 border-green-900 bg-white p-5 shadow-md transition hover:shadow-xl">
            <h2 className="mb-3 border-b-2 border-blue-900 pb-1 text-2xl font-bold text-green-900">Досвід та навчальні проєкти</h2>
            <p>Практичний досвід здобуваю з виконання лабораторних робіт:</p>
            <ol className="list-decimal pl-5">
                <li><strong>Розробка резюме</strong> - створення структури вебсторінки без використання CSS/JS</li>
                <li><strong>Аналіз мережевого трафіку</strong> - дослідження захищених з'єднань у Chrome DevTools</li>
            </ol>
        </section>
    );
}

export default Experience;