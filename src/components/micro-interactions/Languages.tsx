const src = ["angular-logo.png","firebase-logo.webp", "gcp-logo.png", "git-logo.png", "pytorch-logo.png", "python-logo.png","js-logo.png","docker-logo.png"]
export default function Languages() {
  return (
    <div className="grid w-full max-w-60 grid-cols-4 gap-1.5">
        {src.map((src) => (
            <figure key={src} className="col-span-1 aspect-square bg-[#f9f9f9] rounded-xl border border-gray flex items-center justify-center p-3 shadow-sm overflow-hidden group">
                <img src={`/photos/language-icons/${src}`} alt="" className="transition-all group-hover:scale-110"/>
            </figure>
        ))}
     
    </div>
  )
}
