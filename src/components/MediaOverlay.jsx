// 이미지/영상 확대보기 오버레이. media = { type: "image"|"video", src, title }
export default function MediaOverlay({ media, onClose }) {
  if (!media) return null

  return (
    <div
      className="fixed inset-0 bg-black/85 flex flex-col items-center justify-center z-50 cursor-pointer px-6"
      onClick={onClose}
    >
      {media.type === "video" ? (
        <video
          src={media.src}
          autoPlay
          controls
          className="max-w-[92%] max-h-[82vh] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          src={media.src}
          alt={media.title || ""}
          className="max-w-[92%] max-h-[82vh] rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      )}
      {media.title && (
        <p className="text-white/70 text-sm mt-4">{media.title}</p>
      )}
      <p className="text-white/30 text-xs mt-2">화면을 클릭하면 닫힙니다</p>
    </div>
  )
}
