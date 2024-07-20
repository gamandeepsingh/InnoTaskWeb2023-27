import classImg from "./images/classes.jpg";

const achievements = [
  {
    title: "Achiever 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea reprehenderit quae voluptates facere! Consequuntur eum incidunt velit earum odit?",
    img: classImg
  },
  {
    title: "Achiever 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea reprehenderit quae voluptates facere! Consequuntur eum incidunt velit earum odit?",
    img: classImg
  },{
    title: "Achiever 1",
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
        <div className="flex items-center justify-center gap-20">
          {
            achievements.map(achievement => (
              <div data-aos="flip-left" className="card-wrapper rounded-xl bg-gradient-to-br from-[#17a2b2] to-[#3700ff]">
                <div className="w-[250px] h-[350px] p-2 rounded-xl flex flex-col group bg-[#1d1724] overflow-hidden hover:scale-[0.98] transition-all duration-300">
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