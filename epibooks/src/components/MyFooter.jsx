/* eslint-disable jsx-a11y/anchor-is-valid */
import "./MyFooter.css";

export default function MyFooter() {
    return (
        <footer className="container-fluid py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <a href="#" className="nav-link px-3 text-dark">
                Features
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-3 text-dark">
                Partners
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-3 text-dark">
                FAQ
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-3 text-dark">
                Contacts
                </a>
            </li>
            </ul>
            <p className="text-center text-body-secondary">© Matteo Forni - Epicode 2023</p>
        </footer>
    );
}

