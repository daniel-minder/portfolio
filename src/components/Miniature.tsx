export const Miniature = ({ image, active, onClick }: { image: string, active: boolean, onClick: () => void }) => {
  return (
    <button onClick={onClick} className="flex-shrink-0 select-none">
      <img src={`${import.meta.env.BASE_URL}miniatures/${image}`} className={`relative aspect-square w-[80px] h-[80px] rounded-full shadow-lg shadow-slate-400 transition-all duration-200 ease-in-out transform ${active ? 'scale-125 grayscale-0' : 'scale-100 grayscale'} hover:grayscale-0`} />
    </button>
  )
}