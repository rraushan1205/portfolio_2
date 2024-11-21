import Image from "next/image";
import pattern1 from "../public/pattern1.png";
import download from "../public/download.svg";
import dashProfile from "../public/dashProfile.svg";
import doodles from "../public/doodles.svg";
import doodle2 from "../public/doodle2.svg";
import p1 from "../public/p1.png";
import p2 from "../public/p2.png";
import p3 from "../public/p3.png";
import home from "../public/home.svg";
import user from "../public/user.svg";
import phone from "../public/phone.svg";
import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import x from "../public/x.svg";
import stair from "../public/stair.svg";
import send from "../public/send.svg";
import spiral from "../public/spiral.svg";
import sitting from "../public/sitting.svg";
import bulb from "../public/bulb.svg";

export default function Home() {
  return (
    <>
      <nav
        id="nav"
        className=" flex justify-between border-b border-col2 px-10 py-[24px] text-[15px] md:text-[18px] font-semibold"
      >
        <h1 className="">zolo</h1>
        <ul className="flex gap-5">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About Me </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section
        id="home"
        className=" flex flex-col md:grid md:grid-cols-2 md:px-[50px] py-[50px]"
      >
        <div className="flex py-[50px] md:px-[50px] pl-5">
          <Image
            src={pattern1}
            alt="Example"
            className="h-[200px] md:h-fit w-fit py-5"
          />
          <div className="mx-5">
            <div className="text-[45px] md:text-[60px] font-bold flex">
              <div>
                <h1>WEB</h1>
                <h1 className="text-col3">DESIGNER</h1>
              </div>
            </div>
            <div className="flex gap-5 text-[15px] md:text-[18px] flex-wrap">
              <button className="bg-col3 px-5 py-1 rounded-full">
                Hire me
              </button>
              <a href="https://drive.google.com/uc?export=download&id=1qG3EDyxhPkzvSbOHHzaIxnWb-dHzrsIV">
                <button className="bg-col2 px-5 py-1 rounded-full flex gap-4">
                  Download Resume
                  <Image src={download} alt="Example" className="" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-[250px] md:mb-0 md:py-[100px] px-[50px] md:px-[100px] relative ">
          <Image
            src={dashProfile}
            alt="Example"
            className="absolute z-10 object-cover md:left-5 w-[350px] md:w-[400px]"
          />
          <Image
            src={doodles}
            alt="Example"
            className="absolute z-0 md:bottom-[-50px] w-[350px] md:w-[400px]"
          />
        </div>
      </section>

      <section
        id="aboutme"
        className="my-[150px] mx-0 md:mx-[100px] grid gap-6 grid-cols-1 md:grid-cols-2"
      >
        <article className="mx-[20px]">
          <h1 className="text-[30px] md:text-[50px] font-bold flex">
            {" "}
            About &nbsp; <span className="text-col3">me</span>{" "}
            <Image src={bulb} alt="ss" className="w-14 md:w-20" />
          </h1>
          <p className="flex-wrap text-justify text-[17px] md:text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            aliquid laboriosam id, quas ipsum doloribus eum, ut distinctio iusto
            adipisci cupiditate fuga perferendis at libero esse aliquam eius
            autem omnis ullam itaque similique culpa repellat! Sed dicta quidem
            sint odit esse recusandae neque, debitis nulla reprehenderit minima
            labore earum
          </p>
        </article>
        <article className="mr-52">
          <div className="py-[100px] md:py-[150px] md:px-[100px] relative w-[400px] md:w-[600px]">
            <Image
              src={sitting}
              alt="Example"
              className="absolute z-10 object-cover w-[300px] md:left-[200px] left-[50px] bottom-[-150px]"
            />
            <Image
              src={doodle2}
              alt="Example"
              className="absolute z-0 md:w-[550px] bottom-[-150px]"
            />
          </div>
        </article>
      </section>
      <section
        className="bg-repeat px-[40px] md:px-[100px] py-[100px] md:py-[150px]"
        style={{ backgroundImage: `url('/doodlebg.svg')` }}
      >
        <h1 className="text-[30px] md:text-[40px] font-bold">
          My recent <span className="text-col3">works</span>
        </h1>
        <div className="flex gap-5">
          <span className="rounded-full px-6 py-1 bg-col3">All</span>
          <span className="rounded-full px-6 py-1 bg-col2">UI/UX</span>
          <span className="rounded-full px-6 py-1 bg-col2">Web</span>
        </div>
        <div className="flex gap-5 md:gap-10 my-10">
          <div className="md:px-10 px-2 py-2 md:py-10 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <Image src={p1} alt="Example" className="" />
          </div>
          <div className="md:px-10 px-2 py-2 md:py-10 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <Image src={p2} alt="Example" className="" />
          </div>
          <div className="md:px-10 px-2 py-2 md:py-10 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <Image src={p3} alt="Example" className="" />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col md:grid md:grid-cols-2 px-10 md:px-20 my-20"
      >
        <div className="s">
          <h1 className="text-[40px] md:text-[50px] font-bold">
            Got Something to <span className="text-col3">suggest?</span>
          </h1>
          <div className="flex">
            <Image
              src={spiral}
              alt="Example"
              className="w-[150px] md:rotate-[-10deg]"
            />
            <Image
              src={stair}
              alt="Example"
              className="md:mx-5 w-[170px] flex-shrink"
            />
          </div>
        </div>
        <div className="s">
          <form action="#" className=" md:mx-10 px-5">
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col mx-2 rounded-sm ">
                <label htmlFor="name" className="">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  className="outline-none bg-col2 rounded-md px-2 py-1 "
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col mx-2 rounded-sm ">
                <label htmlFor="email" className="r">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  className="outline-none bg-col2 rounded-md px-2 py-1 "
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="flex flex-col my-5 px-2">
              <label htmlFor="message">Messgae</label>
              <textarea
                name="message"
                id="message"
                className="bg-col2 resize-none rounded-md outline-none my-2 px-2 py-1 h-[250px]"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex px-5 py-1 bg-col3 rounded-full items-center justify-center"
            >
              Send message <Image src={send} alt="Example" className="" />
            </button>
          </form>
        </div>
      </section>
      <footer className=" flex justify-center py-[0px] items-center flex-col">
        <ul className="flex gap-5 md:gap-20">
          <li className="flex text-[18px]">
            <Image src={home} alt="Example" className="h-5 mx-[1px]" /> Home
          </li>

          <li className="flex text-[18px]">
            <Image src={user} alt="Example" className="h-5 mx-[1px]" /> About me
          </li>

          <li className="flex text-[18px]">
            <Image src={phone} alt="Example" className="h-5 mx-[1px]" /> Contact
          </li>
        </ul>
        <div className="flex gap-5 my-10">
          <span className="flex rounded-full px-2 py-2 bg-col2">
            <Image src={facebook} alt="Example" className="" />
          </span>
          <span className="flex rounded-full px-2 py-2 bg-col2">
            <Image src={instagram} alt="Example" className="" />
          </span>
          <span className="flex rounded-full px-2 py-2 bg-col2">
            <Image src={x} alt="Example" className="" />
          </span>
        </div>
        <span className="flex justify-end text-[#EEEEEE]">
          Terms of Service - Privacy Policy
        </span>
      </footer>
    </>
  );
}
