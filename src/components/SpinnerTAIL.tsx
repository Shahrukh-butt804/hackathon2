export default function Spinner() {
    return (

    <div className="flex items-center gap-2">
      <h2 className="text-xl">Loading...</h2>
      <div>
      <span className="relative flex h-10 w-10">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
     </span>
      </div>
    </div>
    );
  }
  

  