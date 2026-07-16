// 탐험의 흔적들 — 브랜드 발표 사이트에서 흡수한 콘텐츠
// 카드를 추가하려면 이 배열에 객체만 추가하면 됩니다.
const trailCards = [
  {
    icon: "🎵",
    title: "AI 음악 발매",
    desc: "JooyongPa & Sorionn — 글로벌 스트리밍 유통",
    detail:
      "JooyongPa(블루스/올드힙합)와 Sorionn(K-pop/발라드) 두 아티스트 명의로 음악을 제작하고 DistroKid를 통해 Spotify, Apple Music 등 글로벌 스트리밍에 유통 중입니다.",
    links: [
      { label: "JooyongPa ↗", url: "https://www.youtube.com/@JooyongPa", color: "#ff6b6b" },
      { label: "Sorionn ↗", url: "https://www.youtube.com/@sorionn", color: "#ff6b6b" },
    ],
  },
  {
    icon: "📺",
    title: "유튜브 채널 2개",
    desc: "Healing Mind Studio / Bluesy Records",
    detail:
      "힐링/포커스 음악 채널(Healing Mind Studio)과 빈티지 블루스 채널(Bluesy Records)을 직접 기획·제작·운영 중입니다.",
    links: [
      { label: "힐링마인드 ↗", url: "https://www.youtube.com/@JooyongPa_S", color: "#ff6b6b" },
      { label: "블루지레코드 ↗", url: "https://www.youtube.com/@JooyongPa_R", color: "#c98a4b" },
    ],
  },
  {
    icon: "📱",
    title: "바이브 코딩 앱 배포",
    desc: "버스앱 · 투두앱 — 실제 작동하는 서비스",
    detail:
      "React + Vite + Vercel 스택으로 실제 배포된 앱을 직접 만들었습니다. 코드를 몰라도 AI와 함께라면 가능하다는 걸 보여주는 프로젝트들입니다.",
    links: [
      { label: "투두앱 ↗", url: "https://todo-app-rho-ivory-61.vercel.app/", color: "#ffd166" },
      { label: "버스정류장 ↗", url: "https://my-bus-app-psi.vercel.app/", color: "#4ea8de" },
      { label: "마이버스 ↗", url: "https://bus-route-app-ten.vercel.app/", color: "#52c785" },
    ],
  },
  {
    icon: "📜",
    title: "자격취득",
    desc: "AI&GPT 전문가 2급 · Gemini 교육 전문가 · 정보처리기사",
    detail:
      "AI 활용 디지털 마케팅 실무 200시간 정규과정 수료 후 AI&GPT 전문가 2급 취득. Google for Education 공인 Gemini 교육 전문가 인증 보유(2026.05~2029.05). 정보처리기사 자격도 함께 보유하고 있습니다.",
    certList: ["AI&GPT 전문가 2급", "Gemini 교육 전문가", "정보처리기사"],
  },
  {
    icon: "🛠️",
    title: "바이브 코딩 도구",
    desc: "Claude Code · Cursor · GitHub · Vercel · VS Code",
    detail:
      "Claude Code · Cursor · Windsurf로 코딩하고, GitHub으로 버전관리, Vercel로 배포, VS Code로 편집합니다. Codex CLI(OpenAI), Gemini CLI(Google)도 상황에 맞게 활용합니다.",
    links: [],
  },
  {
    icon: "🤖",
    title: "AI 도구 활용",
    desc: "10개+ AI 도구를 상황에 맞게 조합 사용",
    detail:
      "ChatGPT · Claude · Gemini · Midjourney · Grok · Kling · Suno · NotebookLM · CapCut 등 10개 이상의 AI 도구를 실전에서 상황에 맞게 조합해 사용합니다.",
    links: [],
  },
  {
    icon: "🏢",
    title: "AI 자동화 팀",
    desc: "맥 메뉴바에 상주하는 AI 직원들의 가상 사무실, H.M Studio",
    detail:
      "클님(AI 총괄 매니저)을 필두로, 주용파님은 매일 픽5·화요일 디지털 브리핑·목요일 대한뉴스를 발송하고, 헤디님은 우편을 감시하며, 곰파파님은 주말 에세이를 담당합니다. 맥 메뉴바에 상주하는 이 가상 사무실은 이벤트가 발생할 때마다 슬랙으로 자동 보고하며, 방문자 라운지도 함께 운영하고 있습니다. 수탉·비버 등 새 팀원도 계속 채용 중이에요. (직급 없는 수평 조직이라지만, 사실 거의 다 클님이 하고 있어요.)",
    links: [
      { label: "방문자 라운지 ↗", url: "https://hm-news.vercel.app/visit", color: "#4ea8de" },
    ],
  },
  {
    icon: "🗂️",
    title: "카드뉴스 허브",
    desc: "매일 발행하는 카드뉴스를 한곳에 모아 관리",
    detail:
      "주용파픽5·디지털뉴스·대한뉴스·곰파파 에세이 등 매일 쏟아지는 카드뉴스를 홈페이지 형태로 모아 관리하는 프로젝트입니다. 계속 개발 중입니다.",
    links: [
      { label: "hm-news 보기 ↗", url: "https://hm-news.vercel.app/", color: "#4ea8de" },
    ],
  },
]

export default trailCards
