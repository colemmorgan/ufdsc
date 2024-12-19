export default function Terminal() {
  return (
    <div className="h-44 w-full border border-b-0 border-gray rounded-md overflow-hidden rounded-b-none">
        <div className="py-2 w-full bg-off-white flex items-center px-3 gap-2">
            <div className="bg-red h-2 w-2 rounded-full"/>
            <div className="bg-yellow h-2 w-2 rounded-full"/>
            <div className="bg-green h-2 w-2 rounded-full"/>
        </div>
        <div className="p-3 text-[#898989] text-xs font-light  tracking-wider">
            <p>Cole Morgan created a repository "new project"</p>
        </div>
    </div>
  )
}
