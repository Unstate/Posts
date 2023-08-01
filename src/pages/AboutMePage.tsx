import Header from "../components/Header";
import photo from "./../assets/myPhoto.jpg";
import gitHub from "./../assets/github.svg";
import hh from "./../assets/hh.png";
import telegram from "./../assets/telegram.svg";
import vk from "./../assets/vk.svg";

const AboutMePage = () => {
  return (
    <>
      <Header value="" setValue={() => {}} placeholder="" />
      <p className="text-[3vw]">Hi there! I am Fetisov Roman</p>
      <section className="flex w-1/2 items-center justify-center gap-7 text-[1vw]">
        <img className="w-1/2 rounded-3xl" src={photo} />
        <div>
          <p className="mb-5">
            I am 19 years old, I am a web developer. I am currently a 3rd year
            ISPU student majoring in Applied Computer Science. Created a
            university website development team. There are 4 people in the team
            now: frontend (Me), backend, mobile developers and UI/UX designer
          </p>
          <div className="flex flex-col gap-y-3">
            <p>References to:</p>
            <div className="flex gap-1">
              <img className=" w-1/12" src={gitHub}></img>
              <p className="transition-colors ease-in hover:cursor-pointer hover:text-cyan-500">
                <a href="https://github.com/Unstate">GitHub</a>
              </p>
            </div>
            <div className="flex gap-1">
              <img className=" w-1/12" src={hh}></img>
              <p className="transition-colors ease-in hover:cursor-pointer hover:text-cyan-500">
                <a href="https://hh.ru/resume/648fce89ff0bbbed720039ed1f485545486371">
                  HH
                </a>
              </p>
            </div>
            <div className="flex gap-1">
              <img className=" w-1/12" src={telegram}></img>
              <p className="transition-colors ease-in hover:cursor-pointer hover:text-cyan-500">
                <a href="https://t.me/Unstate">Telegram</a>
              </p>
            </div>
            <div className="flex gap-1">
              <img className=" w-1/12" src={vk}></img>
              <p className="transition-colors ease-in hover:cursor-pointer hover:text-cyan-500">
                <a href="https://vk.com/r.fetisov92">VK</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
