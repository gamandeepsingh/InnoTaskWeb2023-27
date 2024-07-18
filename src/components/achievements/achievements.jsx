import * as React from 'react';
import img2 from '../winnerSection/assets/img2.jpeg';
import img3 from '../winnerSection/assets/img3.jpeg';
import img4 from '../winnerSection/assets/img4.jpeg';


export default function Achievements() {
  return (
    <div className="">
        <h1 data-aos="fade-down" className="text-6xl max-md:text-4xl py-4 px-4 text-center ml-[80px] max-md:ml-0"  style={{
        fontFamily: "cabin-sketch-regular",
        fontWeight: "400",
        fontStyle: "normal",
        color: "white",
      }}>
        Achievers Of The Month
      </h1>
    
        <div className="flex justify-center md:flex-wrap sm:flex-wrap">
        <div className="justify-center flex align-center p-3">
            <div className="card bg-base-100 w-96 shadow-xl rounded-lg p-2">
                <figure>
                    <img
                        src={img4} // Use the imported image
                        alt="Shoes"/>
                </figure>
                <div class="bg-white rounded-lg overflow-hidden">
                    <div class="px-6 py-4">
                        <h2 class="text-3xl font-bold text-gray-900 mb-2">TEAM DEVSQUARE!</h2>
                        <hr />
                        <p class="text-gray-700 leading-normal mt-2">Congratulations to Team Devsquare for winning HackCBS with the best project on TON! Their innovative work earned them a Rs 10,000/- cash prize and exciting swags. Well done, Team Devsquare!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="justify-center flex align-center p-3 border-2 border-amber-500">
            <div className="card bg-base-100 w-96 shadow-xl rounded-lg p-2 ">
                <figure>
                    <img
                        src={img3}
                        alt="Shoes" />
                </figure>
                <div class="bg-white rounded-lg overflow-hidden">
                    <div class="px-6 py-4">
                        <h2 class="text-3xl font-bold text-gray-900 mb-2">DEBUGGER'S KIET!</h2>
                        <hr />
                        <p class="text-gray-700 leading-normal mt-2">Congratulations to Team Debugger's KIET for their impressive victory at the Smart India Hackathon 2023! Their exceptional project, which earned them a grand prize of Rs 100,000/-, showcases their innovation and dedication. Well done, Team Debugger's KIET!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="justify-center flex align-center p-3">
            <div className="card bg-base-100 w-96 shadow-xl rounded-lg p-2">
                <figure>
                    <img
                        src={img2}
                        alt="Shoes" />
                </figure>
                <div class="bg-white rounded-lg overflow-hidden">
                    <div class="px-6 py-4">
                        <h2 class="text-3xl font-bold text-gray-900 mb-2">TEAM BIT BUSTERS!</h2>
                        <hr />
                        <p class="text-gray-700 leading-normal mt-2">Team Bit Buster triumphed at Lean In Hacks 4.0, securing Rs 5,000/- cash and prizes with their innovative solution. Congratulations to this talented team for their well-deserved victory!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}