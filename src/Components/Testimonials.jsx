import { useRef } from "react";

function Testimonials() {

    const testimonials = [
        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300" 
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300" 
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },

        {
            name: "Amaan Jan",
            review: "lorem epsums. The quick brown fox jumped over the building",
            image: "https://picsum.photos/seed/picsum/200/300"
        },
    ]

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
        <div className='p-4 flex flex-col gap-5 md:px-20'>
            <h1 className='text-5xl font-extrabold uppercase'>Testimonials</h1>
            <div>
                <div ref={scrollRef} className='flex whitespace-nowrap gap-2 overflow-x-scroll no-scrollbar'>

                    {testimonials.map((testimonial, index) => (
                        <div className="flex flex-col gap-2 w-60 shrink-0" key={index}>

                            <div className='bg-blue-500 h-60 w-full flex shrink-0 items-center'>
                                <img className="object-cover w-full h-full" src={testimonial.image} alt="" />
                            </div>

                            <div className="w-full flex flex-col whitespace-normal">
                                <h1>{testimonial.name}</h1>
                                <p>{testimonial.review}</p>
                            </div>

                        </div>
                    ))}

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

export default Testimonials
