function Header() {
    return(
        <header className="bg-green-900 text-white p-6 border-b-4 border-blue-900 md:sticky md:top-0 md:h-screen md:overflow-auto md:border-b-0 md:border-r-4">
        <h1 className="text-3xl font-bold">Дикань Владислава</h1>
        <p className="mt-3"><strong>Junior веброзробник | Студентка спеціальності «Кібербезпека»</strong></p>
        <p className="mt-3 text-green-100"><em>Прагну розвиватися у сфері безпечної вебверстки та фронтенд-розробки</em></p>

        <nav>
            <ul className="mt-8 flex flex-row flex-wrap gap-2 md:flex-col">
                <li><a className="block border-l-4 border-transparent px-3 py-2 hover:border-blue-300 hover:bg-green-700 focus:border-blue-300 focus:bg-green-700" href="#about">Про мене</a></li>
                <li><a className="block border-l-4 border-transparent px-3 py-2 hover:border-blue-300 hover:bg-green-700 focus:border-blue-300 focus:bg-green-700" href="#education">Освіта</a></li>
                <li><a className="block border-l-4 border-transparent px-3 py-2 hover:border-blue-300 hover:bg-green-700 focus:border-blue-300 focus:bg-green-700" href="#skills">Навички</a></li>
                <li><a className="block border-l-4 border-transparent px-3 py-2 hover:border-blue-300 hover:bg-green-700 focus:border-blue-300 focus:bg-green-700" href="#experience">Досвід та навчальні проєкти</a></li>
                <li><a className="block border-l-4 border-transparent px-3 py-2 hover:border-blue-300 hover:bg-green-700 focus:border-blue-300 focus:bg-green-700" href="#contacts">Контакти</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;