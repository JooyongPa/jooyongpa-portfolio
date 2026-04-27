import { useState } from "react"

function App() {
  
  
  const [selectedImage, setSelectedImage] = useState(null)
  
  const works = [
    {
      title: "Bus Arrival App",
      desc: "실시간 버스 도착 정보를 확인할 수 있는 웹 앱입니다. 정류장 검색, 즐겨찾기 저장, 실시간 도착 정보 확인 기능을 구현했습니다.",
      features: [
        "정류장 검색",
        "즐겨찾기 저장",
        "실시간 도착 정보 확인"
      ],
      tech: "React · Vite · Public API",
      accent: "text-green-400",
      link: "https://my-bus-app-psi.vercel.app/"
    },
  
  {
      title: "Todo App",
      desc: "할 일을 간편하게 추가, 완료, 삭제할 수 있는 심플한 투두 앱입니다. 직관적인 UI와 빠른 반응성을 중심으로 제작했습니다.",
      features: [
        "할 일 추가 / 삭제",
        "완료 체크 기능",
        "심플한 UI"
      ],
      tech: "React · Vite",
      accent: "text-yellow-400",
      link: "https://todo-app-rho-ivory-61.vercel.app/"
    },
    {
      title: "Next Project",
      desc: "다음 바이브 코딩 프로젝트를 준비 중입니다.",
      features: [
        "아이디어 구상 중",
        "개발 준비 중",
        "곧 공개 예정"
      ],
      tech: null,
      accent: "text-white/40",
      link: "#",
      comingSoon: true
    },

  ]
  const musicTracks = [
    {
      title: "Drive Focus Playlist",
      desc: "집중과 이동을 위한 미니멀 그루브 플레이리스트",
      link: "https://www.youtube.com/"
    },
    {
      title: "Deep Focus Flow",
      desc: "작업 몰입을 위한 잔잔한 앰비언트 사운드",
      link: "https://www.youtube.com/"
    },
    {
      title: "Late Night Groove",
      desc: "밤 시간대에 어울리는 로우 텐션 그루브 음악",
      link: "https://www.youtube.com/"
    }
  ]
  const menuItems = ["About", "Vibe Coding Works", "Music Works", "Visual Works", "Contact"]

  return (
    <div className="min-h-screen bg-[#050b18] text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,166,42,0.15),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(30,80,170,0.2),transparent_30%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))] pointer-events-none" />

        <div className="relative z-10 flex">
        <aside className="hidden md:flex fixed left-0 top-0 w-64 h-screen px-10 py-16 flex-col justify-between border-r border-white/5 bg-[#050b18] z-40">
            <div>
            <a 
              href="#home"
              className="block text-[#e6b84f] font-semibold text-xl tracking-wide mb-12 cursor-pointer hover:opacity-80 transition"
              >
                   JooyongPa
            </a>

              <nav className="space-y-4 text-sm text-white/60">
                {menuItems.map((item) => {
                  const href =
                  item === "About"
                    ? "#about"
                    : item === "Vibe Coding Works"
                    ? "#works"
                    : item === "Music Works"
                    ? "#music"
                    : item === "Visual Works"
                    ? "#visuals"
                    : item === "Contact"
                    ? "#contact"
                    : "#"

                  return (
                    <a
                      key={item}
                      href={href}
                      className="block hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  )
                })}
              </nav>
            </div>

            <div className="text-xs text-white/30">© 2025</div>
          </aside>

          <main className="flex-1 md:ml-64">
            <header className="flex items-center justify-between px-6 md:px-10 py-6">
            <a
            href="#home"
            className="md:hidden text-[#e6b84f] font-semibold text-lg cursor-pointer hover:opacity-80 transition"
            >
                JooyongPa
    </a>

              <nav className="ml-auto flex gap-8 text-sm text-white/70">
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
                <a href="#works" className="hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </header>

            <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-yellow-500/20 blur-3xl" />
            <div className="relative z-10 max-w-6xl text-center">
            <h1 className="text-8xl md:text-[10rem] font-bold tracking-[-0.05em] leading-[1.2] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text mb-10">
                JooyongPa
            </h1>


                  <p className="text-lg md:text-[1.9rem] text-white/90 mb-3">
                  AI Creator · Music · Visual · Digital Experiments
                </p>

                <p className="text-sm md:text-[1.05rem] text-white/50 mb-10">
                  AI 창작자 주용파의 AI 창작 포트폴리오
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-2">
                <a
                  href="#works"
                  className="inline-flex items-center justify-center min-w-[170px] px-8 py-4 rounded-lg bg-white/20 hover:bg-white/30 border border-white/20 text-white font-medium transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
                  >
                      View Projects
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center min-w-[170px] px-8 py-4 rounded-lg border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
                  >
                        Explore My Work
                 </a>
                </div>
              </div>
            </section>

            <section id="about" className="px-6 md:px-12 py-24 flex justify-center">
            <div className="max-w-5xl text-center">
    <h2 className="text-4xl md:text-5xl font-semibold mb-10">
      About
    </h2>

    <div className="space-y-8 text-white/75 leading-8 max-w-3xl mx-auto">
  <p>
  AI 기반 창작을 중심으로 음악, 영상, 실험적 프로젝트를 진행하고 있습니다.
    <br />
    Suno, Grok을 중심으로 AI 도구를 활용하여 기획부터 제작, 정리와 운영까지 직접 이어가고 있습니다.
  </p>

  <p>
    음악은 DistroKid를 통해 발매하고 있으며
    <br />
    Spotify에서 감상하실 수 있습니다.
  </p>

  <p>
    단순한 결과물이 아닌
    <br />
    지속 가능한 창작 구조와 브랜드를 만들어가는 과정에 집중하고 있습니다.
  </p>
</div>
    <div className="mt-12">
  <p className="text-xs uppercase tracking-[0.25em] text-[#e6b84f] mb-6">
    Tools
  </p>

  <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">ChatGPT</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Claude</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Gemini</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Midjourney</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Grok</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Kling</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Suno</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">NotebookLM</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">CapCut</span>
    
  </div>
</div>
    <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
  </div>
</section>

            <section id="works" className="px-6 md:px-12 py-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs tracking-[0.3em] uppercase text-blue-300/70 mb-6">
                  Portfolio
                </div>

                <h2 className="text-4xl md:text-6xl font-semibold mb-10">
                  Vibe Coding Works
                </h2>

                <p className="max-w-2xl text-white/55 leading-7 mb-12">
                  AI와 함께 코딩하며 만든 실제 작동하는 프로젝트들. 아이디어에서 배포까지, 바이브 코딩으로 직접 만들어갑니다. 계속 새로운 프로젝트가 추가됩니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {works.map((work) => (
                   <div
                   key={work.title}
                   className={`group rounded-2xl bg-white/[0.03] p-8 md:p-10 min-h-[240px]
                    h-full flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px]
                    hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                    ${work.comingSoon ? "border border-dashed border-white/20" : "border border-white/10"}`}
                 >
  <div className="flex flex-col h-full justify-between">
  <div>
    <div className="flex items-center gap-3 mb-6">
      <h3 className="text-2xl font-semibold group-hover:text-white transition">
        {work.title}
      </h3>
      {work.comingSoon && (
        <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 text-white/40 tracking-widest uppercase">
          Coming Soon
        </span>
      )}
    </div>

    <p className="text-white/60 leading-7">
      {work.desc}
      </p>
      {work.features && (
  <ul className="mt-4 space-y-3 text-sm text-white/70">
    {work.features.map((feature) => (
      <li key={feature} className="flex items-center gap-2">
        <span className={work.comingSoon ? "text-white/30" : "text-green-400"}>
          {work.comingSoon ? "·" : "✔"}
        </span>
        <span>{feature}</span>
      </li>
    ))}
  </ul>
)}
  </div>

  <a
    href={work.link}
    target={work.link.startsWith("http") ? "_blank" : "_self"}
    rel="noreferrer"
    className={`mt-6 text-sm font-medium ${work.accent} ${work.comingSoon ? "cursor-default pointer-events-none" : "group-hover:translate-x-1 group-hover:brightness-125"} transition`}
  >
    {work.comingSoon ? "Coming Soon →" : "View Live →"}
  </a>
</div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
              </div>
            </section>

            <section className="px-6 md:px-12 py-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs tracking-[0.3em] uppercase text-purple-400/70 mb-6">
                  Games
                </div>

                <h2 className="text-4xl md:text-6xl font-semibold mb-10">
                  Vibe Coding Games
                </h2>

                <p className="max-w-2xl text-white/55 leading-7 mb-12">
                  AI와 함께 만든 브라우저 게임들. 직접 플레이할 수 있습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {[
                    {
                      title: "Car Dodge Game",
                      desc: "도로 위를 달리며 장애물을 피하는 아케이드 스타일 자동차 게임입니다.",
                      features: ["키보드 조작", "속도 증가 난이도", "점수 시스템"],
                      link: "https://car-dodge-game-omega.vercel.app/",
                    },
                    {
                      title: "어둠 미로",
                      desc: "어둠 속에서 출구를 찾아가는 미로 탈출 게임입니다.",
                      features: ["시야 제한 탐색", "랜덤 미로 생성", "긴장감 있는 분위기"],
                      link: "https://eodum-miro.vercel.app/",
                    },
                    {
                      title: "To Be Continued",
                      desc: "다음 바이브 코딩 게임을 준비 중입니다.",
                      features: ["아이디어 구상 중", "개발 준비 중", "곧 공개 예정"],
                      link: "#",
                      comingSoon: true,
                    },
                  ].map((game) => (
                    <div
                      key={game.title}
                      className={`group rounded-2xl bg-white/[0.03] p-8 md:p-10 min-h-[240px]
                        h-full flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px]
                        hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]
                        ${game.comingSoon ? "border border-dashed border-white/20" : "border border-purple-400/20"}`}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <h3 className="text-2xl font-semibold group-hover:text-white transition">
                              {game.title}
                            </h3>
                            {game.comingSoon ? (
                              <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 text-white/40 tracking-widest uppercase">
                                Coming Soon
                              </span>
                            ) : (
                              <span className="text-[10px] px-2 py-0.5 rounded-full border border-purple-400/40 text-purple-300 tracking-widest uppercase">
                                GAME
                              </span>
                            )}
                          </div>

                          <p className="text-white/60 leading-7">{game.desc}</p>

                          <ul className="mt-4 space-y-3 text-sm text-white/70">
                            {game.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2">
                                <span className={game.comingSoon ? "text-white/30" : "text-[#a78bfa]"}>
                                  {game.comingSoon ? "·" : "▶"}
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={game.link}
                          target={game.link.startsWith("http") ? "_blank" : "_self"}
                          rel="noreferrer"
                          className={`mt-6 text-sm font-medium text-[#a78bfa] ${game.comingSoon ? "cursor-default pointer-events-none opacity-40" : "group-hover:translate-x-1 group-hover:brightness-125"} transition`}
                        >
                          {game.comingSoon ? "Coming Soon →" : "Play Now →"}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" />
              </div>
            </section>

            <section id="music" className="px-6 md:px-12 py-20">
  <div className="max-w-5xl mx-auto">
    <div className="mb-12">
      <p className="text-sm uppercase tracking-[0.2em] text-[#e6b84f] mb-3">
        Music
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        Music Works
      </h2>
      <p className="text-white/60 max-w-2xl leading-relaxed">
        아티스트 기반 음악 작업과 YouTube 채널 운영 구조를 함께 구성한 포트폴리오입니다.
        음악 제작, 브랜딩, 콘텐츠 운영, 유통까지 연결된 전체 흐름을 보여줍니다.
      </p>
    </div>

    {/* ===== Artists / Releases ===== */}
    <div className="mt-12">
      <h3 className="text-lg text-[#e6b84f] mb-10">Artists / Releases</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* JooyongPa */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold text-white mb-3">JooyongPa</h3>

          <p className="text-white/60 text-sm mb-6">
            Released artist project with AI-based music production and distribution
          </p>

          <div className="flex gap-3 mb-6">
            <a
              href="https://www.youtube.com/@jooyongpa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 border border-white/20 rounded-full hover:bg-white/10"
            >
              YouTube
            </a>

            <a
              href="https://open.spotify.com/artist/3aClvwp9IWq4MKZlbI0p82"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 border border-white/20 rounded-full hover:bg-white/10"
            >
              Spotify
            </a>
          </div>

          <ul className="text-sm text-white/70 space-y-1">
            <li>• 그뿐이야 (That’s All)</li>
            <li>• Clap It Loud</li>
            <li>• Bar Philosophy</li>
          </ul>
        </div>

        {/* Sorionn */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold text-white mb-3">sorionn</h3>

          <p className="text-white/60 text-sm mb-6">
            Emotional K-pop based artist project
          </p>

          <div className="flex gap-3 mb-6">
            <a
              href="https://www.youtube.com/@sorionn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 border border-white/20 rounded-full hover:bg-white/10"
            >
              YouTube
            </a>

            <a
              href="https://open.spotify.com/artist/4FjyBA9KPo5Xr5N5vYl3zD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 border border-white/20 rounded-full hover:bg-white/10"
            >
              Spotify
            </a>
          </div>

          <ul className="text-sm text-white/70 space-y-1">
            <li>• 분홍빛 꽃비</li>
            <li>• Pack Your Bag</li>
            <li>• Not a Goodbye</li>
          </ul>
        </div>
      </div>
    </div>

    {/* ===== YouTube Channels ===== */}
    <div className="mt-16">
      <h3 className="text-lg text-[#e6b84f] mb-10">YouTube Channels</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href="https://www.youtube.com/@JooyongPa_S"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
        >
          <h3 className="text-white font-semibold">Healing Mind Studio</h3>
          <p className="text-white/60 text-sm mt-2">
            Focus / healing playlist-based music channel
          </p>
        </a>

        <a
          href="https://www.youtube.com/@JooyongPa_R"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
        >
          <h3 className="text-white font-semibold">Bluesy Records</h3>
          <p className="text-white/60 text-sm mt-2">
            Vintage blues and old-school hip-hop channel
          </p>
        </a>

        <a
          href="https://www.youtube.com/@sorionn"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
        >
          <h3 className="text-white font-semibold">Sorionn Channel</h3>
          <p className="text-white/60 text-sm mt-2">
            Experimental and emotional sound project channel
          </p>
        </a>
      </div>
    </div>

    {/* ===== Featured Playlist ===== */}
    <div className="mt-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold">Featured Playlist</h3>
          <p className="text-white/60 text-sm mt-2">
            Curated listening flow connecting projects and releases
          </p>
        </div>

        <a
          href="https://open.spotify.com/playlist/2JPO9D2g2003G4UUpIb3ye"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10"
        >
          Open ↗
        </a>
      </div>
    </div>
  </div>
</section>

<section id="visuals" className="px-6 md:px-12 py-20">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-semibold mb-10">
      Visual Works
    </h2>
    <div className="mt-12 space-y-12">
    <div>
    <h3 className="mb-8 text-xl font-semibold text-yellow-400">Video</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="relative group overflow-hidden rounded-xl bg-black">
        <video
          src="/videos/video01.mp4"
          className="w-full h-[240px] object-cover"
          controls
          playsInline
          preload="metadata"
        />
      </div>

      <div className="relative group overflow-hidden rounded-xl bg-black">
        <video
          src="/videos/video02.mp4"
          className="w-full h-[240px] object-cover"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </div>
    </div>

    <div>
    <h3 className="mb-8 text-xl font-semibold text-yellow-400">Cinematic</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src="/images/cinematic1.jpg"
        alt="Cinematic visual 1"
        className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
    </div>

    <div className="relative group overflow-hidden rounded-xl">
      <img
        src="/images/cinematic2.jpg"
        alt="Cinematic visual 2"
        className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
    </div>

    <div className="relative group overflow-hidden rounded-xl">
      <img
        src="/images/cinematic3.jpg"
        alt="Cinematic visual 3"
        className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
    </div>
    </div>
  <div>
  <h3 className="mb-8 text-xl font-semibold text-yellow-400">Character</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[860px] mb-12">
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src="/images/character1.jpg"
        alt="Character visual 1"
        className="w-full h-[240px] object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-300"></div>
    </div>

    <div className="relative group overflow-hidden rounded-xl">
      <img
        src="/images/character2.jpg"
        alt="Character visual 2"
        className="w-full h-[240px] object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-300"></div>
    </div>
  </div>
 </div>

<div>
<h3 className="mb-8 text-xl font-semibold text-yellow-400">Album Art</h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/album1.jpg"
        alt="Album art 1"
        className="w-full aspect-square object-cover transition duration-300 hover:scale-105"
      />
    </div>
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/album2.jpg"
        alt="Album art 2"
        className="w-full aspect-square object-cover transition duration-300 hover:scale-105"
      />
    </div>
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/album3.jpg"
        alt="Album art 3"
        className="w-full aspect-square object-cover transition duration-300 hover:scale-105"
      />
    </div>
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/album4.jpg"
        alt="Album art 4"
        className="w-full aspect-square object-cover transition duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>
</div>
</div>
    </div>
 </section>
<section id="contact" className="px-6 md:px-12 py-20">
  <div className="max-w-5xl mx-auto">
    <div className="mb-12">
      <p className="text-sm uppercase tracking-[0.2em] text-[#e6b84f] mb-3">
        Contact
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        Get in Touch
      </h2>

      <p className="text-white/60 max-w-xl leading-relaxed">
        AI 기반 콘텐츠 제작, 음악, 비주얼 작업 협업 및 문의는 아래 채널을 통해 연락 주세요.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Email */}
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jimmy710101@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
>
  <h3 className="text-white font-semibold">Email</h3>
  <p className="text-white/60 text-sm mt-2">
    jimmy710101@gmail.com
  </p>
</a>

      {/* Blog */}
      <a
        href="https://blog.naver.com/act2lab"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
      >
        <h3 className="text-white font-semibold">Naver Blog</h3>
        <p className="text-white/60 text-sm mt-2">
          AI 콘텐츠와 실험 기록
        </p>
      </a>

      {/* Threads */}
      <a
        href="https://www.threads.com/@jooyongpa"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
      >
        <h3 className="text-white font-semibold">Threads</h3>
        <p className="text-white/60 text-sm mt-2">
          최신 작업 및 업데이트
        </p>
      </a>

    </div>
  </div>
</section>
            {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      className="max-w-[90%] max-h-[90%] rounded-lg"
    />
  </div>
)}

          </main>
        </div>
      </div>
    </div>
  )
}

export default App

