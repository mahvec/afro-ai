import back from "/about-us.jpg";

export default function ExploreJob() {
  return (
    <main
      style={{ backgroundImage: `url(${back})` }}
      className="h-[50vh] bg-cover bg-no-repeat w-screen bg-center"
    >
      <div className="container flex items-center h-full text-[48px] mx-auto font-bold">
        <p className="flex items-center gap-4 text-white">
          <span>About</span>
          <span className="text-[#67e8bc]">Afro AI</span>
        </p>
      </div>
    </main>
  );
}
