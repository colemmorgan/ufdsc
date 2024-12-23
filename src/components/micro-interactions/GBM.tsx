export default function GBM() {
  return (
    <div className="mx-auto grid w-full max-w-md sm:grid-cols-2 gap-1 mt-12 px-3 sm:px-0">
      <div className="h-16 rounded-xl border border-gray bg-[#f9f9f9] p-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-blue" />
          <p className="text-sm">Free Food</p>
        </div>
        <p className="pt-1 text-xs text-dull"> Find free food at our GBMs.</p>
      </div>

      <div className="h-16 rounded-xl border border-gray bg-[#f9f9f9] p-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-red" />
          <p className="text-sm">Club Updates</p>
        </div>
        <p className="pt-1 text-xs text-dull">Learn about the club's future</p>
      </div>

      <div className="h-16 rounded-xl border border-gray bg-[#f9f9f9] p-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-yellow" />
          <p className="text-sm">Make Connections</p>
        </div>
        <p className="pt-1 text-xs text-dull">Meet like-minded individuals.</p>
      </div>

      <div className="h-16 rounded-xl border border-gray bg-[#f9f9f9] p-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-green" />
          <p className="text-sm">Suggest Ideas</p>
        </div>
        <p className="pt-1 text-xs text-dull">We listen to all feedback!</p>
      </div>
    </div>
  );
}
