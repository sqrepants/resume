import Head from "next/head";
import { BsFillMoonStarsFill, BsPhone, BsWhatsapp } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import nicho from "../public/nicho.png";
import nichodark from "../public/nichodark.png";
import bermudez from "../public/workplaces/bermudez.png";
import kaizen from "../public/workplaces/kaizen.png";
import evolve from "../public/workplaces/evolve.png";
import mofe from "../public/workplaces/mofe.png";
import monstermedia from "../public/workplaces/monstermedia.png";
import gg from "../public/workplaces/gg.png";
import uof from "../public/schools/uof.png";
import utt from "../public/schools/utt.png";

import { useState } from "react";

import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  let image;
  if (darkMode) {
    image = (
      <Image
        alt="plz hire me :("
        src={nichodark}
        fill
        style={{ objectFit: "cover" }}
      />
    );
  } else {
    image = (
      <Image
        alt="plz hire me :("
        src={nicho}
        fill
        style={{ objectFit: "cover" }}
      />
    );
  }

  let emoji1 = darkMode ? "🌙" : "🛠️";
  let emoji2 = darkMode ? "☕" : "👨‍💻";

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* profile */}
      <Head>
        <title>Nicholas Bridgemohan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900  font-robertomono">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:fill-white">
            <h1 className="text-xl dark:text-white">developedbynic</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:fill-white"
                />
              </li>
              <li>
                <a
                  className="
                  text-white px-4 py-2 rounded-md ml-8 bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2
              className="
            text-4xl py-2 font-medium md:text-6xl text-transparent bg-clip-text 
            bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400"
            >
              Nicholas Bridgemohan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-900 dark:text-gray-300">
              {emoji1} Senior Developer {emoji2}
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto  text-gray-800 dark:text-gray-300">
              I am a highly skilled and experienced full-stack developer with a
              strong background in back-end technologies using Javascript, PHP
              and Java and constantly in pursuit of learning more.
            </p>
          </div>

          <div
            className="
          relative mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96
          bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400"
          >
            {image}
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 mt-12 text-gray-600">
            <a target="_blank" href="https://twitter.com/sqrpants">
              <AiFillTwitterCircle className="dark:fill-white" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/bridgemohan/">
              <AiFillLinkedin className="dark:fill-white" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@bridgemohan">
              <AiFillYoutube className="dark:fill-white" />
            </a>
          </div>
        </section>

        {/* <section>
          <div className="text-center p-10 py-10">
            <h2
              className="
            text-3xl py-2 font-medium md:text-5xl text-transparent bg-clip-text 
            bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400"
            >
              Education
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-900 dark:text-gray-300">
              📚 Take a look at my educational background 📚
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto  text-gray-800 dark:text-gray-300">
              See the Academic Institutes  that I've been to
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16 justify-center">
            <Education
              time={"September 2008"}
              school={"University of Trinidad and Tobago"}
              certification={"Diploma Computer Information Systems Technology"}
              url={"https://utt.edu.tt/"}
              image={utt}
            />
            <Education
              time={"December 2010"}
              school={"University of Hertfordshire"}
              certification={"B.Sc. Computer Science (Honors)"}
              url={"https://www.herts.ac.uk/"}
              image={uof}
            />
          </div>
        </section> */}
        {/* experience */}
        <section>
          <div className="text-center p-10 pt-60 pb-10">
            <h2
              className="
            text-3xl py-2 font-medium md:text-5xl text-transparent bg-clip-text 
            bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400"
            >
              Experience
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-900 dark:text-gray-300">
              📋 7+ Years in Various Industries 👴🏽
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto  text-gray-800 dark:text-gray-300">
              Here is a list of my past and current employment
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16 justify-center">
            <Experience
              time={"09 / 2021 - Current"}
              company={"Evolve Mortgage Services"}
              role={"Senior Developer"}
              summary={
                " Developed new features and functionality on Java based mortgage enterprise solution for the company. Created NodeJS app to allow communication and editing of data on legacy applications. Developed features on Asp.net Core based app using MISMO conventions."
              }
              techStack={
                "J2EE, MSSQL / NodeJS, MSSQL, ExpressJS, ReactJS / Asp.net Core"
              }
              skills={"MISMO Mapping, Eclipse IDE, Legacy Codebase Debugging"}
              url={"https://www.evolvemortgageservices.com"}
              image={evolve}
            />

            <Experience
              time={"12 / 2019 - 08 / 2021"}
              company={"Guardian Group"}
              role={"Full Stack Developer"}
              summary={
                "Spearheded back-end development on myGGOnline platform which allowed Guardian group to consolidate multiple backend customer and transactional data stores allowing across three companies providing a unified customer experience where a customer can access all real time portfolio - life, health , pension, mutual funds on one portal."
              }
              techStack={"MongoDB, ExpressJS, ReactJS & NodeJS(TypeScript)"}
              skills={
                "Microservices, API Management, Azure DevOps & CI/CD, Penetration Testing"
              }
              url={"https://www.myguardiangroup.com/"}
              image={gg}
            />

            <Experience
              time={"05 / 2018 - 12 / 2019"}
              company={"Bermudez Group Services"}
              role={"Programmer/Analyst"}
              summary={
                "Developed various reports based on data entered by truck salesmen on proprietary handheld devices. Created new commissions report system, alongside custom applications to replace the old commissions report system thereby increasing efficiency, accuracy and ease of delivery in Bermudez Sales."
              }
              techStack={"Apache/ MSSQL / PHP"}
              skills={
                "Crystal Reports, Microsoft Reporting Services, MSSQL, ERP (MS Dynamics) Scripting"
              }
              url={"http://www.bermudezgroupltd.com/"}
              image={bermudez}
            />

            <Experience
              time={"05 / 2017 - 05 / 2018"}
              company={"Ministry of Finance, Treasury Division"}
              role={"Information Systems Specialist"}
              summary={
                "Administered financial reports and maintained database for the Government Payment System of Trinidad and Tobago, to be used by the Comptroller of Accounts for reporting to the various governmental ministries. Developed report to summarize all data and spending for each financial year by ministry thereby increasing efficiency for the Treasury Division of the Ministry of Finance."
              }
              techStack={"AspNet / MSSQL"}
              skills={"MSSQL, SQL Reporting Server"}
              url={"https://www.finance.gov.tt/"}
              image={mofe}
            />

            <Experience
              time={"02 / 2017 - 05 / 2017"}
              company={"Monster Media Group"}
              role={"Web Developer"}
              summary={
                "Designed insurance brokerage platform using Laravel. Performed website development using Wordpress and HTML/CSS/JS alongside team of graphic designers."
              }
              techStack={"PHP / MSSQL"}
              skills={"Laravel, Wordpress, CodeIgniter"}
              url={"https://www.monstermediagroup.com/"}
              image={monstermedia}
            />

            <Experience
              time={"11 / 2015 - 02 / 2017"}
              company={"Kaizen Environmental Services Trinidad Ltd"}
              role={"Software Developer"}
              summary={
                "Designed and developed multi-departmental inventory management system as a solo developer. System utilized barcodereading, PDF printing and custom PDF signature system."
              }
              techStack={"Linux, Nginx, MySQL, PHP"}
              skills={"Linux Terminal, Javascript"}
              url={"http://www.kaizen-tt.com/main.php"}
              image={kaizen}
            />
          </div>
        </section>

        {/* contact */}
        <section>
          <div className="text-center p-10 pt-60 pb-10">
            <h2
              className="
            text-3xl py-2 font-medium md:text-5xl text-transparent bg-clip-text 
            bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400"
            >
              Contact
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-900 dark:text-gray-300">
              Feel Free to reach out!
            </h3>
            <div className="text-5xl flex justify-center gap-16 py-3 mt-12 text-gray-600">
              <a target="_blank" href="tel:1-868-279-3914">
                <BsPhone className="dark:fill-white" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=18682793914&text=We%20are%20interested%20in%20meeting%20you!%20%F0%9F%98%80"
              >
                <BsWhatsapp className="dark:fill-white" />
              </a>
              <a
                target="_blank"
                href="mailto:nbridgemohan@gmail.com?subject=We%20are%20interested%20in%20meeting%20you!%20%F0%9F%98%80"
              >
                <AiOutlineMail className="dark:fill-white" />
              </a>
            </div>
          </div>
        </section>
        <footer>
          <div className="text-center">
            <p>&#169; 2023 Nicholas Bridgemohan</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
