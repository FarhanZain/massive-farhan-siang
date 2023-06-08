import IMAGES from "../assets/Images";
import Button from "../components/Button";
import CardService from "../components/CardService";
import Navbar from "../components/Navbar";
import { FaFigma } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { SiWritedotas } from "react-icons/si";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BsCameraVideo } from "react-icons/bs";
import { BsVectorPen } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import CardProjects from "../components/CardProjects";
import CardTesti from "../components/CardTesti";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <header
        id="home"
        className="bg-primary flex flex-col items-center text-center gap-8 font-opensans px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] pt-10 md:pt-[70px] pb-[150px] md:pb-[300px] lg:pb-[350px]"
      >
        <h1 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl xl:text-[64px]">
          Create Amazing Digital Product <br className="hidden lg:block" />
          For Your Business
        </h1>
        <p className="text-white font-normal text-base md:text-lg">
          We are a professional digital agency that has been established since
          2016, we present a variety of <br className=" hidden lg:block" />{" "}
          digital services that can help you solve problems in your business
        </p>
        <Button textButton="Get Started" />
      </header>

      {/* Image */}
      <section className="relative">
        <img
          className="absolute -translate-y-1/2 translate-x-1/2 right-1/2 px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px]"
          src={IMAGES.hero}
          alt="Bubble Bash Image"
        />
      </section>

      {/* statistik */}
      <section className="bg-white px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] pt-[150px] md:pt-[300px] lg:pt-[350px] pb-[70px] flex justify-center">
        <div className="w-full flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-evenly items-center text-textBlack font-opensans text-center">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              1.2K+
            </h2>
            <p className=" text-sm md:text-base lg:text-lg">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              1.1K+
            </h2>
            <p className="text-sm md:text-base lg:text-lg">WorldWide Clients</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              6+
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Years of Experience
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              12+
            </h2>
            <p className="text-sm md:text-base lg:text-lg">Award Winners</p>
          </div>
        </div>
      </section>

      {/* services */}
      <section
        id="services"
        className="bg-slate-50 px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] py-[50px] font-opensans text-textBlack"
      >
        <p className="text-base text-center md:text-start md:text-lg">
          Our Services
        </p>
        <h1 className="text-xl text-center md:text-start md:text-4xl font-semibold">
          We Provide What You Need
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mt-10">
          <CardService
            icon={<FaFigma />}
            judul="UI/UX Designer"
            isi="We are ready to make your website more friendly and efficient in the eyes of users"
          />
          <CardService
            icon={<BsCodeSlash />}
            judul="Web Development"
            isi="Want to create a website that has many features? We have the answer for you. "
          />
          <CardService
            icon={<SiWritedotas />}
            judul="Content Writer"
            isi="We provide interesting content and can attract customers for you"
          />
          <CardService
            icon={<HiOutlinePresentationChartBar />}
            judul="Branding"
            isi="Create visual branding with amazing result, you just sit back and relax"
          />
          <CardService
            icon={<BsCameraVideo />}
            judul="Editing Video"
            isi="Want to create a website that has many features? We have the answer for you. "
          />
          <CardService
            icon={<BsVectorPen />}
            judul="Illustration"
            isi="Create beauty illustrasion as you need, and make it interesting"
          />
        </div>
      </section>

      {/* portfolio */}
      <section
        id="portfolio"
        className="bg-white px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] py-[50px] font-opensans text-textBlack"
      >
        <p className="text-base text-center md:text-start md:text-lg">
          Our Portfolio's
        </p>
        <h1 className="text-xl text-center md:text-start md:text-4xl font-semibold">
          Recent Projects
        </h1>
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center md:items-start mt-10">
          <CardProjects
            image={IMAGES.card1}
            judul="Website My Hospital"
            isi="Create a hospital website with patient, doctor, and drug logistics features that help hospital operations"
          />
          <CardProjects
            image={IMAGES.card2}
            judul="Food & Beverages Corp Logo"
            isi="Create a logo for a food & beverage company, with emphasis on aesthetics and user requests"
          />
          <CardProjects
            image={IMAGES.card3}
            judul="Supermarket Mobile Apps"
            isi="Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features"
          />
        </div>
      </section>

      {/* testimoni */}
      <section
        id="testimonial"
        className="bg-white px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] py-[50px] font-opensans text-textBlack"
      >
        <p className="text-base text-center md:text-start md:text-lg">
          Client Reviews
        </p>
        <h1 className="text-xl text-center md:text-start md:text-4xl font-semibold">
          What Our Happy Client Say About Us
        </h1>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center md:items-start mt-10">
          <CardTesti
            judul="Website My Hospital"
            isi="Very nice to work with Bubble Bash, a reliable and responsive team is very helpful"
            profile={IMAGES.profile1}
            nama="Katty Clock"
            jabatan="CEO My Hospital"
          />
          <CardTesti
            judul="Logo F&B Corp"
            isi="Really the best service we've ever gotten, really looking forward to the next project"
            profile={IMAGES.profile2}
            nama="John Robert"
            jabatan="CEO My Hospital"
          />
          <CardTesti
            judul="Supermarket Mobile Apps"
            isi="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
            profile={IMAGES.profile3}
            nama="Katty Clock"
            jabatan="CEO My Hospital"
          />
        </div>
      </section>

      {/* contact */}
      <section
        id="contact"
        className="bg-primary flex flex-col items-center text-center gap-8 font-opensans px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] py-[70px]"
      >
        <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px] xl:text-5xl">
          Have a project idea and <br className="hidden md:block" />
          want to make it come true?
        </h1>
        <p className="text-white font-normal text-base md:text-lg">
          Please contact us and we will discuss about your project, don't forget
          we are <br className="hidden md:block" /> always here for you
        </p>
        <Button textButton="Contact Us" />
      </section>

      {/* footer */}
      <footer className="px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] pt-[70px] md:pt-[100px] pb-[50px] md:pb-[70px] flex flex-col gap-10 md:gap-0 md:flex-row items-start justify-between font-opensans text-textBlack">
        <div className="space-y-5">
          <img src={IMAGES.logoblack} alt="logo bubble bash" />
          <p className=" md:text-sm lg:text-base">
            Introducing, We are Bubble Bash digital agency company with{" "}
            <br className="hidden lg:block" /> more than 6 years of experience.
            We are committed to serve <br className="hidden lg:block" /> with
            all our heart
          </p>
          <div className="text-3xl text-textBlack flex gap-3 items-center">
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
        </div>
        {/* link */}
        <div className="text-base font-opensans text-textBlack flex flex-wrap md:flex-nowrap items-start gap-10 md:gap-7 lg:gap-16 xl:gap-24">
          <ul className="space-y-4">
            <p className="font-bold">Page</p>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Service</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <ul className="space-y-4">
            <p className="font-bold">Explore</p>
            <li>
              <a href="#">Recources</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Documents</a>
            </li>
          </ul>

          <ul className="space-y-4">
            <p className="font-bold">Company</p>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
