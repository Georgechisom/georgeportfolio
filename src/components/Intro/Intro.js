import React, { useEffect, useMemo, useState } from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import { Bag, ContactImage, Owner, OwnerBg } from "../../assets/AllImages";
import Aside from "../Aside/Aside";

const Intro = () => {
  const [aside, setAside] = useState(false);

  const showAside = () => {
    setAside(!aside);
  };

  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(
    () => [
      "Web and Mobile App Developer",
      "Blockchain Developer",
      "Full Stack Developer",
      "SEO Professional",
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
    <section className="max-w-screen-xl mx-auto w-full h-full overflow-hidden mt-10 lg:mt-10 relative flex flex-col lg:flex-row items-start gap-2 px-1 lg:px-5 lg:grid-cols-2 intro">
      <Aside />
      <aside
        className={
          aside
            ? "lg:hidden fixed top-[10%] z-20 mt-8 py-4 px-4 flex flex-col items-center justify-center gap-y-2 overflow-hidden border-2 border-skyText rounded-xl smallbg w-[97%]"
            : "hidden"
        }
      >
        <div className="flex flex-row items-center justify-center gap-2 w-full my-1">
          <img
            src={Owner}
            alt="GeorgeChisom"
            className="w-20 h-20 object-cover mr-auto rounded-full"
          />
          <div className="profile-name">George Chisom</div>
        </div>
        <div className="cycling-text">
          <span className="typing-animation">{displayText}</span>
        </div>

        <hr className="hraside my-2" />
        <div className="w-full newborder rounded-xl my-1 flex py-2 px-4 gap-x-3 items-center">
          <svg
            data-name="1-Mail"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className="svgcol"
            viewBox="0 0 32 32"
          >
            <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
            <path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" />
            <path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" />
          </svg>
          <div className="flex flex-col">
            <span className="font-light">Email</span>
            <a
              href="mailto:georgechipaul@gmail.com"
              className="font-semibold cursor-pointer hover:underline hover:italic"
            >
              georgechipaul@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full newborder rounded-xl my-1 flex py-2 px-4 gap-x-3 items-center">
          <svg
            data-name="Layer 1"
            width={20}
            height={20}
            className="svgcol"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
          >
            <path d="M85.81 120H34.19a8.39 8.39 0 0 1-8.38-8.39V8.39A8.39 8.39 0 0 1 34.19 0h51.62a8.39 8.39 0 0 1 8.38 8.39v103.22a8.39 8.39 0 0 1-8.38 8.39zM34.19 3.87a4.52 4.52 0 0 0-4.51 4.52v103.22a4.52 4.52 0 0 0 4.51 4.52h51.62a4.52 4.52 0 0 0 4.51-4.52V8.39a4.52 4.52 0 0 0-4.51-4.52z" />
            <path d="M73.7 10.32H46.3L39.28 3.3 42.01.57l5.89 5.88h24.2L77.99.57l2.73 2.73-7.02 7.02zM47.1 103.23h25.81v3.87H47.1z" />
          </svg>
          <div className="flex flex-col">
            <span className="font-light">Phone</span>
            <a
              href="tel:+2349066290201"
              className="font-semibold cursor-pointer hover:underline hover:italic"
            >
              +2349066290201
            </a>
          </div>
        </div>
        <div className="w-full newborder rounded-xl my-1 flex py-2 px-4 gap-x-3 items-center">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className="svgcol"
            viewBox="0 0 128 128"
          >
            <path d="m102.128 96.851 6.3 14.173a1.75 1.75 0 1 0 3.2-1.422l-6.3-14.173a1.75 1.75 0 1 0-3.2 1.422z" />
            <path d="m123.1 120.649-17.69-39.811a1.75 1.75 0 0 0-1.6-1.039H83.831C89.219 71.13 93.938 62 96.778 53.651a43.164 43.164 0 0 0 2.657-13.466 35.436 35.436 0 1 0-70.871 0 43.174 43.174 0 0 0 2.657 13.467c2.84 8.353 7.56 17.478 12.948 26.147H24.19a1.75 1.75 0 0 0-1.6 1.039L4.9 120.649a1.75 1.75 0 0 0 1.6 2.461h115a1.75 1.75 0 0 0 1.6-2.461zM32.064 40.186a31.936 31.936 0 1 1 63.871 0 39.8 39.8 0 0 1-2.471 12.34c-3.041 8.945-8.311 18.822-14.24 28.026l-.037.058A194.664 194.664 0 0 1 64 101.136a194.667 194.667 0 0 1-15.188-20.525c-.013-.02-.024-.04-.038-.059-5.929-9.2-11.2-19.081-14.239-28.025a39.812 39.812 0 0 1-2.471-12.341zM9.192 119.61 25.327 83.3H46.4a194.324 194.324 0 0 0 16.29 21.663 1.75 1.75 0 0 0 2.629 0A194.313 194.313 0 0 0 81.6 83.3h21.068l16.135 36.311z" />
            <path d="M64 58.775a18.592 18.592 0 1 0-18.592-18.591A18.613 18.613 0 0 0 64 58.775zm0-33.684a15.092 15.092 0 1 1-15.092 15.093A15.109 15.109 0 0 1 64 25.092z" />
          </svg>
          <div className="flex flex-col">
            <span className="font-light">Location</span>
            <a
              href="*"
              className="font-semibold cursor-pointer hover:underline hover:italic"
            >
              {" "}
              Abuja
            </a>
          </div>
        </div>
      </aside>
      <div className="h-full w-full p-8 text-3xl md:text-4xl lg:text-5xl font-extrabold flex flex-col justify-center gap-y-2 overflow-hidden">
        <span className="text-lg lg:text-xl font-medium hidden md:flex">
          Hello
        </span>
        <span className="specialAnimation py-2 hidden md:flex">
          I'm <span className="text-skyText ml-1"> George Chisom</span>
        </span>
        <div className="text-nowrap md:hidden">
          <span className="font-medium">Hi, I'm</span>
          <br />{" "}
          <span className="text-skyText specialAnimation">George Chisom</span>
        </div>
        <p className="hidden lg:flex text-lg lg:text-xl font-medium py-2">
          A passionate Web3 developer with a knack for crafting engaging, user
          friendly applications that make an impact. My skill set covers a wide
          range of front end tools like HTML, CSS, Bootstrap, React, and React
          Native, paired with strong back end expertise in PHP, MySQL, and
          Laravel. I thrive on writing clean, optimized code and tackling tough
          challenges with creative solutions. <br /> <br />
          In the Web3 space, I'm at home with Solidity, building innovative
          blockchain solutions with precision and flair. My blend of technical
          know how, problem solving grit, and enthusiasm for pushing boundaries
          makes me a dynamic team player ready to drive success in exciting web
          and app development projects.
        </p>
        <p className="flex lg:hidden text-lg lg:text-xl font-medium py-2">
          A passionate Web3 developer who builds user friendly, impactful apps.
          I'm skilled in frontend tools like HTML, Tailwind CSS, Bootstrap,
          React, and React Native, and back end tech like PHP, MySQL, and
          Laravel also gain expertise in WORDPRESS over the years. I write
          clean, efficient code and solve tough challenges creatively. <br /> In
          Web3, I excel with Solidity, crafting innovative blockchain solutions.
          My technical skills, problem-solving drive, and enthusiasm make me a
          dynamic team player ready to succeed in web and app development
          projects.
        </p>
        <Link to="contact" className="decoration-0">
          <button
            className="flex items-center justify-center gap-2 md:gap-3 text-nowrap bg-whiteText my-4 mx-0 py-2 lg:py-3 px-4 lg:px-8 rounded-full border-b-2 border-r-2 border-skyText text-sm md:text-base lg:text-xl group text-skyText
            shadow-md shadow-skyText duration-300 hover:bg-skyText hover:text-whiteText hover:shadow-none"
          >
            <img
              src={Bag}
              className="w-5 md:w-6 lg:w-7 object-cover"
              alt="introbuttonimage"
            />{" "}
            Hire Me
          </button>
        </Link>
        <div className="z-100 flex flex-row justify-between items-center bg-black">
          <button
            className="lg:hidden fixed bottom-6 md:bottom-10 left-[3%] cursor-pointer hover:shadow-md hover:shadow-white rounded-full hover:duration-200 p-2 my-auto text-center hover:bg-white border-[1.5px] z-[999] border-skyText"
            onClick={showAside}
          >
            <svg
              onClick={showAside}
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              className="svgcol"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm43.251 279.317q-14.041 5.536-22.403 8.437a58.97 58.97 0 0 1-19.424 2.9q-16.994 0-26.424-8.28a26.833 26.833 0 0 1-9.427-21.058 73.777 73.777 0 0 1 .703-10.134q.713-5.18 2.277-11.698l11.694-41.396c1.041-3.973 1.924-7.717 2.632-11.268a48.936 48.936 0 0 0 1.063-9.703q0-7.937-3.27-11.066c-2.179-2.073-6.337-3.128-12.51-3.128a33.005 33.005 0 0 0-9.304 1.424c-3.177.94-5.898 1.846-8.183 2.69l3.13-12.763q11.496-4.679 21.99-8.006a65.756 65.756 0 0 1 19.89-3.34q16.868 0 26.024 8.165 9.156 8.16 9.15 21.19c0 1.802-.202 4.974-.633 9.501a63.919 63.919 0 0 1-2.343 12.48l-11.65 41.23a112.86 112.86 0 0 0-2.558 11.364 58.952 58.952 0 0 0-1.133 9.624q0 8.227 3.665 11.206 3.698 2.993 12.74 2.98a36.943 36.943 0 0 0 9.637-1.495 54.942 54.942 0 0 0 7.796-2.61zm-2.074-167.485a27.718 27.718 0 0 1-19.613 7.594 28.031 28.031 0 0 1-19.718-7.594 24.67 24.67 0 0 1 0-36.782 27.909 27.909 0 0 1 19.718-7.647 27.613 27.613 0 0 1 19.613 7.647 24.83 24.83 0 0 1 0 36.782z"
                data-name="Info"
              />
            </svg>
          </button>
          <button
            className="fixed bottom-6 lg:bottom-10 right-[3%] cursor-pointer hover:shadow-md hover:shadow-white hover:bg-white rounded-full hover:duration-200 p-2 mx-auto my-auto text-center z-50 border-[1px] border-skyText"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              src={ContactImage}
              alt="messageIcon"
              className="object-cover w-8 lg:w-10 z-50 animate-pulse"
            />
          </button>
        </div>
        <img
          src={OwnerBg}
          alt="webappImage"
          className="lg:object-cover hover:duration-300 hover:scale-105 w-[100%] md:w-[70%] mx-auto"
        />
      </div>
    </section>
  );
};

export default Intro;
