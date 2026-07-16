import { useState } from "react"

// 클릭하면 펼쳐지는 카드. 탐험의 흔적들 / 카드뉴스 / 계획 섹션에서 공통으로 사용합니다.
// 새 항목은 데이터 배열(src/data/*.js)에 추가하면 이 컴포넌트가 자동으로 렌더링합니다.
//
// 기본은 각 카드가 스스로 열림/닫힘을 관리하는 독립 모드입니다.
// open / onToggle을 함께 넘기면(제어 모드) 부모가 "한 번에 하나만 열리게" 같은 로직을 제어할 수 있습니다.
export default function ExpandableCard({
  icon, title, desc, detail, links, certImgs, certList,
  onImageClick, open: controlledOpen, onToggle,
}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  function handleClick() {
    if (isControlled) {
      onToggle?.()
    } else {
      setInternalOpen((v) => !v)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`group rounded-2xl bg-white/[0.03] p-8 cursor-pointer transition-all duration-300
        hover:bg-white/[0.06] hover:translate-y-[-2px]
        ${open ? "border border-[#e6b84f]/50 bg-white/[0.05]" : "border border-white/10"}`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition">{title}</h3>
      <p className="text-white/55 text-sm leading-6">{desc}</p>

      {open && (
        <div className="mt-4 pt-4 border-t border-white/10 animate-[expandIn_0.3s_ease]">
          <p className="text-white/70 text-sm leading-7 mb-4">{detail}</p>

          {certList && certList.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {certList.map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          {certImgs && certImgs.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-3">
              {certImgs.map((ci) => (
                <div key={ci.label}>
                  <img
                    src={ci.src}
                    alt={ci.label}
                    onClick={(e) => { e.stopPropagation(); onImageClick?.(ci.src) }}
                    className="w-full rounded-lg cursor-pointer hover:opacity-80 transition object-cover aspect-[4/3]"
                  />
                  <p className="text-[10px] text-white/40 text-center mt-1">{ci.label}</p>
                </div>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/10 transition"
                  style={{ color: l.color }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
