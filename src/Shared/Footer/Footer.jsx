
const Footer = () => {
    return (
        <footer className="footer p-10 mt-5 bg-base-200 text-base-content">
            <aside>
                <img className="w-20" src="../../../public/logo11.png" alt="" />
                <p>West Cot Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Rooms</a>
                <a className="link link-hover">Apartment</a>
                <a className="link link-hover">Building</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">West co</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;