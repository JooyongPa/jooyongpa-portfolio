import { useState } from "react"

function App() {
  
  
  const [selectedImage, setSelectedImage] = useState(null)
  
  const works = [
    {
      title: "Bus Arrival App",
      desc: "실시간 버스 도착 정보를 확인할 수 있는 웹 앱입니다. 정류장 검색, 즐겨찾기, 도착 정보 확인 기능을 구현했습니다.",
      accent: "text-green-400",
      link: "https://my-bus-app-psi.vercel.app/"
    }
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
  const menuItems = ["About", "Featured Works", "Music", "Visuals", "Contact"]

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
                    : item === "Featured Works"
                    ? "#works"
                    : item === "Music"
                    ? "#music"
                    : item === "Visuals"
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

              <nav className="ml-auto flex gap-6 text-sm text-white/70">
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
            <h1 className="text-8xl md:text-[10rem] font-bold tracking-[-0.05em] leading-[1.2] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text mb-8">
                JooyongPa
            </h1>


                  <p className="text-lg md:text-[1.9rem] text-white/90 mb-3">
                  AI Creator · Music · Visual · Digital Experiments
                </p>

                <p className="text-sm md:text-[1.05rem] text-white/50 mb-8">
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
      JooyongPa is an AI creator focused on music, visuals, and digital experimentation.
      <br />
      음악, 비주얼, 디지털 실험을 중심으로 작업하는 AI 크리에이터입니다.
    </p>

    <p>
      Through projects such as Healing Mind Studio and Bluesy Records, <br />
      he develops music-based content, <br />
      visual experiments, and channel-driven creative systems. <br />
      Healing Mind Studio와 Bluesy Records를 통해 음악 기반 콘텐츠, 비주얼 실험, <br />
      창작 중심의 채널 운영 시스템을 구축하고 있습니다.
</p>

    <p>
      This portfolio highlights selected works, creative direction, and ongoing experiments built with AI tools. <br />
      이 포트폴리오는 대표 작업, 창작 방향, 그리고 AI 도구 기반 실험 흐름을 정리한 공간입니다.
    </p>
    </div>
    <div className="mt-12">
  <p className="text-xs uppercase tracking-[0.25em] text-[#e6b84f] mb-4">
    Tools
  </p>

  <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">ChatGPT</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Claude</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Gemini</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Grok</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Midjourney</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Suno</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">Kling</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">NotebookLM</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">CapCut</span>
    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition">AI Tools</span>
  </div>
</div>
    <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
  </div>
</section>

            <section id="works" className="px-6 md:px-12 py-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs tracking-[0.3em] uppercase text-blue-300/70 mb-4">
                  Portfolio
                </div>

                <h2 className="text-4xl md:text-6xl font-semibold mb-6">
                  Featured Works
                </h2>

                <p className="max-w-2xl text-white/55 leading-7 mb-12">
                  음악, 비주얼, 영상, 실험 프로젝트를 중심으로 정리한 포트폴리오
                  섹션입니다. AI 도구를 활용한 창작 흐름과 브랜드 구축 방향을 함께
                  보여줍니다.
                </p>

                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                  {works.map((work) => (
                   <div
                   key={work.title}
                   className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 min-h-[240px]
h-full flex flex-col justify-between
transition-all duration-300 hover:translate-y-[-2px]
hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                 >
                      

                      <div className="flex flex-col h-full justify-between">
  <div>
    <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition">
      {work.title}
    </h3>

    <p className="text-white/60 leading-7">
      {work.desc}
    </p>
  </div>

  <a
    href={work.link}
    target={work.link.startsWith("http") ? "_blank" : "_self"}
    rel="noreferrer"
    className={`mt-6 text-sm font-medium ${work.accent} group-hover:translate-x-1 group-hover:brightness-125 transition`}
  >
    Open App →
  </a>
</div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
              </div>
            </section>
            <section id="music" className="px-6 md:px-12 py-20">
            <div className="max-w-6xl mx-auto">
  <div className="mb-12">
    <p className="text-sm uppercase tracking-[0.2em] text-[#e6b84f] mb-3">
      Music
    </p>
    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
      Music Projects
    </h2>
    <p className="text-white/60 max-w-2xl leading-relaxed">
      채널과 프로젝트 성격에 따라 음악 작업을 분리해 운영하고 있습니다.
      힐링·집중용 플레이리스트부터 블루스 기반 사운드, 실험적 프로젝트,
      그리고 실제 발표곡까지 한눈에 볼 수 있도록 구성했습니다.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 1 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <p className="text-xs text-[#e6b84f] mb-2">01</p>
      <h3 className="text-xl font-semibold text-white mb-2">
        Healing Mind Studio
      </h3>
      <p className="text-white/60 text-sm">
        집중·휴식·드라이브용 플레이리스트 중심 힐링 음악 프로젝트
      </p>
    </div>

    {/* 2 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <p className="text-xs text-[#e6b84f] mb-2">02</p>
      <h3 className="text-xl font-semibold text-white mb-2">
        Bluesy Records
      </h3>
      <p className="text-white/60 text-sm">
        빈티지 블루스와 올드스쿨 힙합 감성 기반 사운드 프로젝트
      </p>
    </div>

    {/* 3 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <p className="text-xs text-[#e6b84f] mb-2">03</p>
      <h3 className="text-xl font-semibold text-white mb-2">
        Sorion
      </h3>
      <p className="text-white/60 text-sm">
        실험적 음악과 사운드를 위한 독립 프로젝트 공간
      </p>
    </div>

    {/* 4 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <p className="text-xs text-[#e6b84f] mb-2">04</p>
      <h3 className="text-xl font-semibold text-white mb-2">
        Released Tracks
      </h3>
      <p className="text-white/60 text-sm">
        Spotify 등 플랫폼에 정식 발매된 곡 모음
      </p>
    </div>

  </div>
</div>
</section>
<section id="visuals" className="px-6 md:px-12 py-20">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
      Visuals
    </h2>

    <p className="text-white/60 mb-12 max-w-2xl">
      AI 이미지 생성, 캐릭터 디자인, 시네마틱 비주얼 실험 작업을 정리한 영역입니다.
      앞으로 대표 이미지와 비주얼 프로젝트를 이 섹션에 추가할 예정입니다.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:scale-[1.02] transition-all duration-300">
    <img
  src="https://picsum.photos/400/300"
  onClick={() => setSelectedImage("https://picsum.photos/800/600")}
  className="h-[180px] w-full object-cover cursor-pointer"
/>
  <div className="p-6">
    <div className="text-blue-400 text-sm mb-2">
      Visual Experiments
    </div>

    <h3 className="text-xl font-semibold mb-3">
      Cinematic Image Studies
    </h3>

    <p className="text-white/60 text-sm leading-6">
      AI 이미지 생성, 콘셉트 비주얼, 시네마틱 연출을 실험하는 작업입니다.
    </p>
  </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:scale-[1.02] transition-all duration-300">
<img
  src="https://picsum.photos/401/300"
  onClick={() => setSelectedImage("https://picsum.photos/801/600")}
  className="h-[180px] w-full object-cover cursor-pointer"
/>
  <div className="p-6">
    <div className="text-yellow-400 text-sm mb-2">
      Character & Concept
    </div>

    <h3 className="text-xl font-semibold mb-3">
      Character-based Visual Work
    </h3>

    <p className="text-white/60 text-sm leading-6">
      캐릭터 중심 이미지, 브랜딩 콘셉트, 스타일 기반 시각 작업을 진행합니다.
    </p>
  </div>
</div>
    </div>
  </div>
</section>
            <section id="contact" className="px-6 md:px-12 py-24 flex justify-center">
              <div className="max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                  Contact
                </h2>

                <p className="text-white/60 leading-8 mb-10">
                  협업, 포트폴리오 문의, 창작 프로젝트 연결용 영역입니다.
                  아래 링크를 통해 작업물과 채널을 확인하실 수 있습니다.
                </p>

                <div className="flex flex-col gap-4 text-white/80">
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jimmy710101@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-center"
>
  📧 Email · jimmy710101@gmail.com
</a>

                  <a
                    href="https://www.youtube.com/@jooyongpa"
                  
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-center"
                  >
                    YouTube · JooyongPa
                  </a>

                  <a
                    href="https://blog.naver.com/act2lab"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Naver Blog · act2lab
                  </a>

                  <a
                    href="https://www.threads.com/@healingmindstudio"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Threads · @healingmindstudio
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