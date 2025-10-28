'use client';

import Sidebar from "./components/Sidebar";
import TextType from "@/components/TextType";
import PixelTransition from "@/components/PixelTransition";
import TechStack from "./components/TechStack";

export default function Home() {
  

  return (
    <div className="flex min-h-screen bg-primary">
      <Sidebar />
      <main className="ml-[40vh] flex min-h-screen w-full max-w-full flex-col items-center py-24 px-16 bg-primmary sm:items-start">
        <h1 className="text-3xl font-bold">Hendra Sutrisno</h1>
        <h5 className="">Pati, Central Java</h5>
        <div className="mt-5 flex items-center justify-center gap-3">
          <p className="text-2xl font-bold">I'm a 
            
          </p>
          <TextType className="font-bold text-2xl text-gray-300"
              text={["Web Developer", "Machine Learning Engineer", ""]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="●"
            />
        </div>
        <div className="w-full h-[20em] flex gap-4 ">
          <div className="w-3/4 h-full glass-item p-5 rounded-md mt-10">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-justify">lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text-justify">lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="w-1/4 h-full flex justify-center items-center rounded-md mt-10">
            <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111"
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello!</p>
                  </div>
                }
                secondContent={
                  
                  <img
                    src="/me.jpeg"
                    alt="default pixel transition content, a cat!"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
          </div>
        </div>

        <div className="w-full mt-10 mb-10">
          <TechStack />
        </div>
        

      </main>
    </div>
  );
}
