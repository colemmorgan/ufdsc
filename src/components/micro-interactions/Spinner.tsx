export default function Spinner() {
  return (
    <figure className="relative flex translate-y-32 items-center justify-center p-8">
      <img src="/dsc.png" alt="" className="w-10" />
      <div className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray" />
      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray opacity-75" />
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray opacity-25" />

      <div className="circular-container">
        <figure className="circular circular1 flex h-11 w-11 items-center justify-center rounded-full border border-gray bg-white shadow-md">
          <img src="/photos/language-icons/pytorch-logo.png" className="c-img1 h-7 w-7" />
        </figure>
      </div>

      <div className="circular-container-2">
        <figure className="circular circular2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-gray bg-white shadow-md">
          <img src="/photos/language-icons/firebase-logo.webp" className="c-img2 h-7 w-7" />
        </figure>
      </div>

      <div className="circular-container-3">
        <figure className="circular circular3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gray bg-white shadow-md">
          <img src="/photos/language-icons/angular-logo.png" className="c-img3 h-5 w-5" />
        </figure>
      </div>
    </figure>
  );
}
