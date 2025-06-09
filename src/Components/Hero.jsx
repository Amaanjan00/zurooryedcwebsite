import { useRef } from "react";

function Hero() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // pixels to scroll
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
    
  return (
    <>
      <div>
        <div className='pb-10 pt-3 w-full'>

          <div ref={scrollRef} className="flex overflow-x-scroll gap-1 whitespace-nowrap no-scrollbar scroll-smooth snap-center justify-center">

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

            <div className="relative shrink-0">
              <img src="https://placehold.co/300x500" alt="" />
              <div className="absolute w-full bottom-0 p-4">
                <h1>abcdesfghijklmnopqrst</h1>
                <p>sfdsadfasf</p>
                <a href=""></a>
              </div>
            </div>

          </div>

          <div className="flex justify-end mx-4 mt-2">

            <div className="bg-black/10 h-10 w-10 flex items-center justify-center rounded-full m-2">
              <button onClick={() => scroll('left')}>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/>
              </button>
            </div>

            <div className="bg-black/10 h-10 w-10 flex items-center justify-center rounded-full m-2">
              <button onClick={() => scroll('right')}>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1"/>
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Hero
