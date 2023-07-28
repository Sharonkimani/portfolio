import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Scipy" },
  { skill: "Latex" },
  { skill: "Markdown" },
  { skill: "MongoDB" },
  { skill: "Python" },
  { skill: "AWS" },
  { skill: "Canva" },
  { skill: "MySQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Trello" },
  { skill: "Tensorflow" },
  { skill: "Keras" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Sharon Kimani, and I am a{" "}
              <span className="font-bold">highly ambitious</span>,
              <span className="font-bold"> self-motivated</span>, and
              <span className="font-bold"> driven</span> Data Scientist and
              Analyst based in Nairobi, Kenya.
            </p>
            <br />
            <p>
              Welcome to my data-driven world! I am a passionate and
              results-oriented data scientist, equipped with a professional data
              science certificate from Moringa School. Armed with a strong
              foundation in statistics, programming, and machine learning, I
              thrive on transforming complex datasets into valuable insights
              that drive informed decision-making. My insatiable curiosity and
              love for problem-solving have led me to explore diverse domains,
              extracting meaningful patterns and trends to unlock hidden
              potentials. With an unwavering commitment to excellence, I
              continuously push the boundaries of innovation to tackle
              real-world challenges head-on.
            </p>
            <br />
            <p>
              As a Moringa School graduate, I am not just armed with technical
              prowess but also possess a profound sense of collaboration and
              adaptability, making me a true asset in any data-driven team.
              Let's embark on an exciting data journey together, where
              possibilities are limitless and the future is data-enriched!
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">never stop growing</span>{" "}
              and that's what I strive to do, I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
