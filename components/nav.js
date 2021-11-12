import Link from 'next/link'

export default function Nav() {
    <header className="flex">
        <nav>
            <ul className="flex linkList">
                <li className="link-list-item">
                    <Link href="#about">  
                        <a>Introduction</a>
                    </Link>
                </li>
                <li className="link-list-item">
                    <Link href="#my-work">
                        <a>Work</a>
                    </Link>   
                </li>
                <li className="link-list-item"><a href="#contact">Contact</a></li>
                <li className="link-list-item"><a href="resume.html" target="_blank">Resume</a></li>
            </ul>
        </nav>
    </header>
}