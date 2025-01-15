import Logo from '../../assets/Logo.png'

function Footer() {
    return (
        <footer className="grid pt-11 pb-11 grid-cols-2 max-w-[1280px] mx-auto gap-y-8 px-6 text-center sm:text-left sm:grid-cols-[2fr_1fr_1fr] sm:gap-y-0">
            <div className="flex flex-col justify-between sm:items-start col-span-2 sm:col-span-1">
                <img src={Logo} alt="Logo" className="w-28 mb-4 sm:mb-0" />
                <div className="text-tertiary col-span-2 hidden sm:block sm:col-span-3 mt-5 sm:mt-0">
                    2025 all Right Reserved Term of use GREENMIND
                </div>
            </div>
            <div className="grid justify-start gap-y-4 sm:gap-y-8">
                <span className="font-extrabold">Інформація</span>
                <ul className="gap-y-6 justify-start grid">
                    <li className="cursor-pointer">Label</li>
                    <li className="cursor-pointer">Label</li>
                    <li className="cursor-pointer">Label</li>
                </ul>
            </div>
            <div className="grid gap-y-4 justify-start sm:gap-y-8">
                <span className="font-extrabold">Контакти</span>
                <ul className="gap-y-6 justify-start grid">
                    <li></li>
                    <li className="cursor-pointer">📞 Label</li>
                    <li className="cursor-pointer">✉️ Label</li>
                </ul>
            </div>
            <div className="text-tertiary col-span-2 block sm:hidden sm:col-span-3 mt-5 sm:mt-0">
                2025 all Right Reserved Term of use GREENMIND
            </div>
        </footer>
    );
}

export { Footer };