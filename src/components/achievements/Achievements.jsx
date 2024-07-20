import classImg from "./images/classes.jpg";

const achievements = [
  {
    title: "Achiever 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea reprehenderit quae voluptates facere! Consequuntur eum incidunt velit earum odit?",
    img: classImg,
    url: "https://github.com"
  },
  {
    title: "Achiever 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea reprehenderit quae voluptates facere! Consequuntur eum incidunt velit earum odit?",
    img: classImg,
    url: "https://github.com"
  },
  {
    title: "Achiever 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea reprehenderit quae voluptates facere! Consequuntur eum incidunt velit earum odit?",
    img: classImg
  }
]

const Achievements = () => {
    return (
      <section id='achievements' className='ml-[80px] max-md:ml-0'>
        <h1 data-aos="fade-down" className="mt-[120px] text-6xl max-md:text-4xl py-4 px-6 text-center max-md:ml-0  text-white w-screen items-center"
        style={{
          fontFamily: "cabin-sketch-regular",
          fontWeight: "400",
          fontStyle: "normal",
          color: "white",
        }}>
          Achievers of the Month
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap sm:gap-20">
          {
            achievements.map((achievement, idx) => (
              <div key={idx} data-aos="flip-left" className="card-wrapper rounded-xl bg-gradient-to-br from-[#17a2b2] to-[#3700ff]">
                <div className="w-[250px] h-[350px] p-2 rounded-xl flex flex-col group bg-[#1d1724] overflow-hidden hover:scale-[0.98] transition-all duration-300 relative">
                  <div className="links absolute top-4 right-4">
                    {
                      achievement.url && (
                        <button className=" p-1 bg-[#1d1724] rounded opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <a href={achievement.url} className="text-[#17a2b2]" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                          </a>
                        </button>
                      )
                    }
                  </div>

                  <div className="flex-grow h-full bg-cover bg-center rounded-lg group-hover:h-1/2 group-hover:flex-grow-0 transition-all duration-500" style={{ backgroundImage: `url(${achievement.img})` }}></div>
                  <div className="pt-1">
                    <div className="text-3xl text-center text-[#17a2b2]" style={{
                  fontFamily: "cabin-sketch-regular"
                }}>{ achievement.title }</div>
                    <div className="h-0 text-transparent group-hover:text-white transition-colors duration-500 pb-2 text-center">{ achievement.description }</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    )
}

export default Achievements