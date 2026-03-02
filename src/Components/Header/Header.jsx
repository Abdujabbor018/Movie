import React, { useState } from 'react';
import axios from 'axios';
import './Header.css';
import Logo from './15-150967_movies-logo-hd-png-download-removebg-preview.png';

const Header = ({ lang, setLang }) => {
    // Modal holati va inputlar uchun state-lar
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        const token = "8586580877:AAEazv2Y3aPuc9jNS6_ApbFDYgWfpiFf23k";
        const chat_id = 5258999486;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        
        // Telegramga yuboriladigan chiroyli matn
        const text = `📬 **Yangi xabar!**\n\n👤 **Ism:** ${name}\n💬 **Fikr:** ${message}`;

        axios.post(url, {
            chat_id: chat_id,
            text: text,
            parse_mode: "Markdown" // Matnni chiroyli ko'rsatish uchun
        }).then(() => {
            alert(lang === 'uz' ? "Xabaringiz yuborildi! ✅" : "Message sent! ✅");
            setName("");
            setMessage("");
            setIsModalOpen(false); // Modalni yopish
        }).catch((err) => {
            console.error(err);
            alert("Xatolik yuz berdi.");
        });
    };

    return (
        <header className="navbar">
            <div className="container navbar-wrapper">
                <div className="logo-section">
                    <img src={Logo} alt="Logo" className="logo" />
                    <span className="brand-name">MovieClub</span>
                </div>

                <nav className="navbar-list">
                    <a href="#" className="navbar-link">{lang === 'uz' ? 'Bosh sahifa' : 'Home'}</a>
                    <a href="#" className="navbar-link">{lang === 'uz' ? 'Kinolar' : 'Movies'}</a>
                    <a href="#" className="navbar-link">{lang === 'uz' ? 'Janrlar' : 'Genres'}</a>
                </nav>

                <div className="navbar-controls">
                    <select 
                        className="lang-select" 
                        value={lang} 
                        onChange={(e) => setLang(e.target.value)}
                    >
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                    </select>
                    <button className="login-btn" onClick={() => setIsModalOpen(true)}>
                        {lang === 'uz' ? "Biz bilan bog'lanish" : 'Contact us'}
                    </button>
                </div>
            </div>

            {/* Modal oynasi */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{lang === 'uz' ? "Fikr qoldiring" : "Leave a feedback"}</h2>
                        <form onSubmit={sendMessage}>
                            <input 
                                type="text" 
                                placeholder={lang === 'uz' ? "Ismingiz" : "Your Name"} 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                            <textarea 
                                placeholder={lang === 'uz' ? "Fikringiz" : "Your Message"} 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <div className="modal-buttons">
                                <button type="submit" className="send-btn">
                                    {lang === 'uz' ? "Yuborish" : "Send"}
                                </button>
                                <button type="button" className="close-btn" onClick={() => setIsModalOpen(false)}>
                                    {lang === 'uz' ? "Yopish" : "Close"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;