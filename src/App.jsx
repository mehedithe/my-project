import ParticlesBackground from "./components/ParticlesBackground"



function App() {


  return (
  <>
<div className="relative w-screen h-screen">
      <ParticlesBackground />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-cyan-600">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </div>
    </div>
  </>
  )
}

export default App
