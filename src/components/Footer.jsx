const Footer = () => {
    return (
        <footer className="text-xs sm:text-sm flex flex-col gap-2 px-4 pt-4 justify-center md:flex-row md:justify-around items-center min-h-20">
            <p>© {new Date().getFullYear()} Weatherly. All rights reserved.</p>
            <p>
                Designed and developed by{" "}
                <a className="hover:underline" href="#" target="_blank">
                    @kritijo
                </a>
            </p>
        </footer>
    );
};

export default Footer;
