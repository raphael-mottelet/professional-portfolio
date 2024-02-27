import React, { useEffect, useState } from 'react';
import '../pages-style/footer.css';
import SocialCard from '../Cards/SocialLinksCard';

const Footer = () => {
    const [social, setSocial] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'http://127.0.0.1:8000/'; // Remplacez 'your_api_base_url' par votre URL d'API
                const socialResponse = await fetch(url + 'get_social-links/social-links/list');
                const socialData = await socialResponse.json();
                setSocial(socialData);
            } catch (error) {
                console.error('Error fetching social links data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <nav className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="/"></a>
                </div>
                <ul className="footer-menu">
                    <li><a href="/">à propos</a></li>
                    <li><a href="/about">Me contacter</a></li>
                    <li><a href="/about">Mentions légales</a></li>
                    <li><a href="/about">RGPD</a></li>
                    <li><a href="/about">Experience</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/project">Projects</a></li>
                    <li><a href="/social">Social</a></li>
                    <div className='homepage-title'>
                    </div>
                    <div className="footer-social-elements">
                        <section className='social-cards'>
                            {social.map((social, index) => (
                                <SocialCard key={social.id} data={social} isInline={index < 5} />
                            ))}
                        </section>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Footer;
