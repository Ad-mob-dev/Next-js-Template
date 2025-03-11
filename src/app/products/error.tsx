"use client";

export default function ErrorBoundary({error , reset} : {error : Error; reset : ()=> void;}) {
    return  <div className="h-[100vh] text-center bg-teal-950 text-white">
        {error.message}
        <button onClick={reset}>Try Again</button>
        </div>
  }
  