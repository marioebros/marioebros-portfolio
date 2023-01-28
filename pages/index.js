import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import logo from "../public/logo.png";
/* import design from "..public/Coding-Html-icon.png";
import code from "..public/design.png";
import consulting from "..public/consulting.png"; 
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
*/
import toDo from "../public/toDo-list.png";
import Library from "../public/pocket-library.png";
import Restaurant from "../public/g-s.png";
import Calculator from "../public/calculator-app.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mario M. Elizalde Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Playfair">DevelopedBymarioeBros</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-green-500 to-orange-600 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-500 font-medium md:text-6xl">
              Mario M. Elizalde
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              The Man.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              className="bg-opacity-0"
              src={logo}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Page II - Education & Certifications */}

        <section>
          <div>
            <h3 className="text-3xl py-1">Education & Certifications</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since beginning my journey as a freelance developer, I've
              completed remote courses in{" "}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a range of services including...
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-orange-600">Tools I use</h4>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">React</p>
              <p className="text-gray-600 py-1">Next.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image src={code} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-orange-600">Tools I use</h4>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">React</p>
              <p className="text-gray-600 py-1">Next.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-orange-600">Tools I use</h4>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">React</p>
              <p className="text-gray-600 py-1">Next.js</p>
            </div>
          </div>
        </section>

        {/* Page III - Professional Experience */}

        <section>
          <div>
            <h3 className="text-3xl py-1">Professional Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since beginning my journey as a freelance developer, I've
              completed remote courses in{" "}
              <span className="text-orange-600">
                Web Programming Foundations,{" "}
              </span>
              <span className="text-orange-600">HTML, CSS, & JavaScript, </span>
              <span className="text-orange-600">
                React, Next.js, & jQuery,{" "}
              </span>
              <span className="text-orange-600">
                Solidity, Smart Contracts, & Cryptography.
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a range of services including...
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-orange-600">Tools I use</h4>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">React</p>
              <p className="text-gray-600 py-1">Next.js</p>
            </div>
          </div>
        </section>

        {/* Page IV - Portfolio */}

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since beginning my journey as a freelance developer, I've
              completed remote courses in{" "}
              <span className="text-orange-600">
                Web Programming Foundations,{" "}
              </span>
              <span className="text-orange-600">HTML, CSS, & JavaScript, </span>
              <span className="text-orange-600">
                React, Next.js, & jQuery,{" "}
              </span>
              <span className="text-orange-600">
                Solidity, Smart Contracts, & Cryptography.
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a range of services including...
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {/* <div>
              <Image src={web1} />
            </div>
            <div>
              <Image src={web2} />
            </div> */}
            <div>
              <Image src={toDo} />
            </div>
            <div>
              <Image src={Library} />
            </div>
            <div>
              <Image src={Restaurant} />
            </div>
            <div>
              <Image src={Calculator} />
            </div>
          </div>
        </section>

        {/* Page V - Contact */}
      </main>
    </div>
  );
}
