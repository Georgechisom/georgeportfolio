import React, { useState, useEffect, useMemo } from "react";
import "./Aside.css";
import "../Intro/Intro.css";
import { Owner } from "../../assets/AllImages";

const Aside = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(
    () => [
      "Web and Mobile App Developer",
      "Blockchain Developer",
      "Full Stack Developer",
      "UI/UX Designer",
    ],
    []
  );

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <>
      {/* Desktop Aside */}
      <div className="aside-container">
        <aside className="aside-content">
          <div className="profile-section">
            <figure>
              <img src={Owner} alt="GeorgeChisom" className="profile-image" />
            </figure>
            <div className="profile-name">George Chisom</div>
          </div>
          <div className="cycling-text">
            <span className="typing-animation">{displayText}</span>
          </div>
          <hr className="contact-divider" />
          <div className="contact-item">
            <svg
              data-name="1-Mail"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              className="contact-icon"
              viewBox="0 0 32 32"
            >
              <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
              <path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" />
              <path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" />
            </svg>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <a href="mailto:georgechipaul@gmail.com" className="contact-link">
                georgechipaul@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-item">
            <svg
              data-name="Layer 1"
              width={20}
              height={20}
              className="contact-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
            >
              <path d="M85.81 120H34.19a8.39 8.39 0 0 1-8.38-8.39V8.39A8.39 8.39 0 0 1 34.19 0h51.62a8.39 8.39 0 0 1 8.38 8.39v103.22a8.39 8.39 0 0 1-8.38 8.39zM34.19 3.87a4.52 4.52 0 0 0-4.51 4.52v103.22a4.52 4.52 0 0 0 4.51 4.52h51.62a4.52 4.52 0 0 0 4.51-4.52V8.39a4.52 4.52 0 0 0-4.51-4.52z" />
              <path d="M73.7 10.32H46.3L39.28 3.3 42.01.57l5.89 5.88h24.2L77.99.57l2.73 2.73-7.02 7.02zM47.1 103.23h25.81v3.87H47.1z" />
            </svg>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <a href="tel:+2349066290201" className="contact-link">
                +2349066290201
              </a>
            </div>
          </div>
          <div className="contact-item">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              className="contact-icon"
              viewBox="0 0 128 128"
            >
              <path d="m102.128 96.851 6.3 14.173a1.75 1.75 0 1 0 3.2-1.422l-6.3-14.173a1.75 1.75 0 1 0-3.2 1.422z" />
              <path d="m123.1 120.649-17.69-39.811a1.75 1.75 0 0 0-1.6-1.039H83.831C89.219 71.13 93.938 62 96.778 53.651a43.164 43.164 0 0 0 2.657-13.466 35.436 35.436 0 1 0-70.871 0 43.174 43.174 0 0 0 2.657 13.467c2.84 8.353 7.56 17.478 12.948 26.147H24.19a1.75 1.75 0 0 0-1.6 1.039L4.9 120.649a1.75 1.75 0 0 0 1.6 2.461h115a1.75 1.75 0 0 0 1.6-2.461zM32.064 40.186a31.936 31.936 0 1 1 63.871 0 39.8 39.8 0 0 1-2.471 12.34c-3.041 8.945-8.311 18.822-14.24 28.026l-.037.058A194.664 194.664 0 0 1 64 101.136a194.667 194.667 0 0 1-15.188-20.525c-.013-.02-.024-.04-.038-.059-5.929-9.2-11.2-19.081-14.239-28.025a39.812 39.812 0 0 1-2.471-12.341zM9.192 119.61 25.327 83.3H46.4a194.324 194.324 0 0 0 16.29 21.663 1.75 1.75 0 0 0 2.629 0A194.313 194.313 0 0 0 81.6 83.3h21.068l16.135 36.311z" />
              <path d="M64 58.775a18.592 18.592 0 1 0-18.592-18.591A18.613 18.613 0 0 0 64 58.775zm0-33.684a15.092 15.092 0 1 1-15.092 15.093A15.109 15.109 0 0 1 64 25.092z" />
            </svg>
            <div className="contact-info">
              <span className="contact-label">Location</span>
              <span className="contact-link">Abuja</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Aside;
