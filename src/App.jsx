import { useState } from "react"
import trailCards from "./data/trailCards"
import futureItems from "./data/futureItems"
import cardNews from "./data/cardNews"
import characterImages from "./data/characterImages"
import characterVideos from "./data/characterVideos"
import introVideos from "./data/introVideos"
import imageWorks from "./data/imageWorks"
import ExpandableCard from "./components/ExpandableCard"
import MediaOverlay from "./components/MediaOverlay"

function App() {
  
  
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [openTrail, setOpenTrail] = useState(null)
  
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
      title: "AI 브랜드 발표 사이트",
      desc: "곰파파와 함께하는 인터랙티브 브랜드 스토리텔링 사이트입니다. 탐험 기록부터 앞으로의 계획까지, 발표 형식으로 직접 만들었습니다.",
      features: [
        "인터랙티브 스토리텔링",
        "캐릭터 브랜딩 (곰파파)",
        "발표용 내레이션 & 배경음악"
      ],
      tech: "React · Vite · Vercel",
      accent: "text-[#ff8c42]",
      link: "https://jooyongpa-brand-presentation.vercel.app/"
    },
    {
      title: "일어 회화 공부 앱",
      desc: "일본어 회화 학습을 위한 앱을 준비 중입니다.",
      features: [
        "상황별 회화 연습",
        "개발 준비 중",
        "곧 공개 예정"
      ],
      tech: null,
      accent: "text-white/40",
      link: "#",
      comingSoon: true
    },
    {
      title: "지하철 타이핑 공부 앱",
      desc: "지하철에서 짧게 즐기는 타이핑 연습 앱을 준비 중입니다.",
      features: [
        "짧은 세션 학습",
        "개발 준비 중",
        "곧 공개 예정"
      ],
      tech: null,
      accent: "text-white/40",
      link: "#",
      comingSoon: true
    },

  ]
  const menuItems = ["About", "Trail", "Card News", "Vibe Coding Works", "Music Works", "Visual Works", "Roadmap", "Contact"]

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
              className="block text-[#e6b84f] font-semibold text-xl tracking-wide mb-6 cursor-pointer hover:opacity-80 transition"
              >
                   JooyongPa
            </a>

              <a
                href="https://jooyoungpa-app-library.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group mb-9 flex h-11 w-[120px] items-center justify-between rounded-lg border border-white/20 bg-white/[0.025] pl-2.5 pr-3 text-[13px] text-[#e6b84f] transition-all duration-300 hover:-translate-y-px hover:border-[#e6b84f]/55 hover:bg-[#e6b84f]/[0.05]"
              >
                <span>App Library</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
              </a>

              <nav className="space-y-4 text-sm text-white/60">
                {menuItems.map((item) => {
                  const href =
                  item === "About"
                    ? "#about"
                    : item === "Trail"
                    ? "#trail"
                    : item === "Card News"
                    ? "#cardnews"
                    : item === "Vibe Coding Works"
                    ? "#works"
                    : item === "Music Works"
                    ? "#music"
                    : item === "Visual Works"
                    ? "#visuals"
                    : item === "Roadmap"
                    ? "#future"
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

            <div className="text-xs text-white/30">© {new Date().getFullYear()} JooyongPa</div>
          </aside>

          <main className="flex-1 md:ml-64">
            <header className="flex items-center justify-between px-6 md:px-10 py-6">
            <a
            href="#home"
            className="md:hidden text-[#e6b84f] font-semibold text-lg cursor-pointer hover:opacity-80 transition"
            >
                JooyongPa
    </a>

              <nav className="ml-auto flex items-center gap-3 text-sm text-white/70 md:gap-8">
                <a
                  href="https://jooyoungpa-app-library.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 px-3 py-2 text-xs text-[#e6b84f] transition-all hover:border-[#e6b84f]/60 hover:bg-[#e6b84f]/[0.06] md:hidden"
                >
                  Library ↗
                </a>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
                <a href="#works" className="hidden hover:text-white transition-colors sm:block">
                  Projects
                </a>
                <a href="#contact" className="hidden hover:text-white transition-colors sm:block">
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
                  AI Explorer · Creator · Brand Builder
                </p>

                <p className="text-sm md:text-[1.05rem] text-white/50 mb-10">
                  AI 탐험가 주용파의 탐험 기록
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
    AI Explorer, 주용파입니다.
    <br />
    AI라는 낯선 길을 조금 먼저 걷고 탐험하고 있는 사람입니다.
  </p>

  <p>
    음악을 만들고, 코드를 짜고, 캐릭터를 그리고, 콘텐츠를 매일 자동으로 발행하면서
    <br />
    AI로 할 수 있는 것들을 하나씩 직접 실험하고 있습니다.
  </p>

  <p>
    거창한 정답을 주는 사람이 아니라, 옆에서 같이 헤매고 같이 찾아가는 사람이 되고 싶습니다.
    <br />
    그 경험을 워크숍과 강의로 나누며, 이 포트폴리오에 계속 기록해가고 있습니다.
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

            <section id="trail" className="px-6 md:px-12 py-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs tracking-[0.3em] uppercase text-[#e6b84f]/70 mb-6">
                  Trail
                </div>

                <h2 className="text-4xl md:text-6xl font-semibold mb-4">
                  탐험의 흔적들 🗺️
                </h2>

                <p className="max-w-2xl text-white/55 leading-7 mb-12">
                  AI를 도구로 삼아 하나씩 쌓아온 기록들입니다. 카드를 클릭하면 자세한 이야기가 펼쳐져요.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trailCards.map((card) => (
                    <ExpandableCard
                      key={card.title}
                      {...card}
                      open={openTrail === card.title}
                      onToggle={() => setOpenTrail(openTrail === card.title ? null : card.title)}
                      onImageClick={(src) => setSelectedMedia({ type: "image", src })}
                    />
                  ))}
                </div>

                <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
              </div>
            </section>

            <section id="cardnews" className="px-6 md:px-12 py-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs tracking-[0.3em] uppercase text-[#e6b84f]/70 mb-6">
                  Card News
                </div>

                <h2 className="text-4xl md:text-6xl font-semibold mb-4">
                  콘텐츠 자동화
                </h2>

                <p className="max-w-2xl text-white/55 leading-7 mb-12">
                  요일마다 정기 발행되는 카드뉴스 시리즈입니다. 토요일 편은 곰파파가 진행을 맡고 있어요.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cardNews.map((item) => (
                    <ExpandableCard
                      key={item.title}
                      {...item}
                      onImageClick={(src) => setSelectedMedia({ type: "image", src })}
                    />
                  ))}
                </div>

                <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
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
                <div className="flex items-center gap-4 mb-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                  <span className="text-xs tracking-[0.3em] uppercase text-purple-400/70 whitespace-nowrap">🎮 GAMES</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                </div>

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
            <li>• 그뿐이야 (That's All)</li>
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
    <div className="mt-12 space-y-16">

    {/* ===== 자기소개 ===== */}
    <div>
      <h3 className="mb-6 text-xl font-semibold text-yellow-400">자기소개</h3>
      <div className="flex flex-wrap gap-4">
        {introVideos.map((v) => (
          <button
            key={v.src}
            onClick={() => setSelectedMedia({ type: "video", src: v.src, title: v.title })}
            className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/80 hover:bg-white/[0.08] hover:border-white/20 transition"
          >
            ▶ {v.title}
          </button>
        ))}
      </div>
    </div>

    {/* ===== Character ===== */}
    <div>
      <h3 className="mb-3 text-xl font-semibold text-yellow-400">Character — 주용파 &amp; 곰파파</h3>
      <p className="text-white/50 text-sm leading-6 mb-8 max-w-2xl">
        AI로 직접 만든 캐릭터 IP입니다. 주용파의 여러 스타일과, 같은 캐릭터의 곰 버전인 곰파파까지 함께 소개합니다.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {characterImages.map((img) => (
          <div
            key={img.src}
            className="cursor-pointer group"
            onClick={() => setSelectedMedia({ type: "image", src: img.src, title: img.label })}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-[160px] object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-300" />
            </div>
            <p className="text-[11px] text-white/40 text-center mt-2">{img.label}</p>
          </div>
        ))}

        <div className="rounded-xl border border-dashed border-white/20 h-[160px] flex flex-col items-center justify-center text-center px-3">
          <span className="text-2xl mb-1">✨</span>
          <p className="text-[11px] text-white/40 leading-tight">
            더 새로운 AI 탐험의 동반자<br />To Be Continued
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {characterVideos.map((v) => (
          <button
            key={v.src}
            onClick={() => setSelectedMedia({ type: "video", src: v.src, title: v.title })}
            className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/70 hover:bg-white/[0.08] hover:border-white/20 transition"
          >
            ▶ {v.title}
          </button>
        ))}
      </div>
    </div>

    {/* ===== Image (구 Cinematic 통합) ===== */}
    <div>
      <h3 className="mb-8 text-xl font-semibold text-yellow-400">Image</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {imageWorks.map((img) => (
          <div
            key={img.src}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedMedia({ type: "image", src: img.src, title: img.label })}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300" />
          </div>
        ))}
      </div>
    </div>

    {/* ===== Album Art ===== */}
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
 </section>

<section id="future" className="px-6 md:px-12 py-20">
  <div className="max-w-5xl mx-auto">
    <div className="text-xs tracking-[0.3em] uppercase text-[#e6b84f]/70 mb-6">
      What's Next
    </div>

    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      앞으로의 계획
    </h2>

    <p className="max-w-2xl text-white/55 leading-7 mb-4">
      워크숍 → 당근모임 → 강의 → 브랜드, 이 순서로 성장해나갈 계획입니다. 카드를 클릭하면 자세한 이야기가 펼쳐져요.
    </p>

    <div className="mb-12 inline-block rounded-2xl border border-[#e6b84f]/30 bg-[#e6b84f]/[0.06] px-8 py-6 max-w-xl">
      <p className="text-xl md:text-2xl font-semibold text-[#e6b84f] leading-relaxed">
        "국가대표 아니어도 됨 —<br />같이 길 찾아주는 사람"이 되고 싶어요.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {futureItems.map((item, i) => (
        <div key={item.title} className="relative">
          <span className="absolute -top-3 -left-3 z-10 w-7 h-7 rounded-full bg-[#e6b84f] text-[#050b18] text-xs font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <ExpandableCard {...item} />
        </div>
      ))}
    </div>

    <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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

      {/* Littly - 모든 채널 모음 */}
      <a
        href="https://litt.ly/h.m.studio"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
      >
        <h3 className="text-white font-semibold">🔗 litt.ly/h.m.studio</h3>
        <p className="text-white/60 text-sm mt-2">
          블로그 · 스레드 · SNS 채널 모음
        </p>
      </a>

    </div>

    <div className="mt-14 flex flex-col items-center gap-3">
      <img
        src="/images/business-card.png"
        alt="디지털 명함"
        className="w-full max-w-[280px] rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition"
        onClick={() => setSelectedMedia({ type: "image", src: "/images/business-card.png" })}
      />
      <p className="text-white/30 text-xs">디지털 명함 — 클릭하면 크게 보기</p>
    </div>
  </div>
</section>
            <MediaOverlay media={selectedMedia} onClose={() => setSelectedMedia(null)} />

          </main>
        </div>
      </div>
    </div>
  )
}

export default App
