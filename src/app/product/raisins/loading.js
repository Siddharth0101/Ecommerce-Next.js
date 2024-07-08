export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse flex flex-col items-center gap-6 w-80">
        <div>
          <div className="w-64 h-8 bg-slate-400 rounded-md"></div>
          <div className="w-36 h-5 bg-slate-400 mx-auto mt-4 rounded-md"></div>
        </div>
        <div className="h-9 bg-slate-400 w-full rounded-md"></div>
        <div className="h-9 bg-slate-400 w-full rounded-md"></div>
        <div className="h-9 bg-slate-400 w-full rounded-md"></div>
        <div className="h-9 bg-slate-400 w-2/3 rounded-md"></div>
      </div>
    </div>
  );
}
