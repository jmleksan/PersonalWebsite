import React from "react";

export default function About(){
    return(
        <section id='about'>
            <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hi, I'm Jacob Leksan
                        <br className="hidden lg:inline-block" /> I am a CS Master's Student
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I have interest in AI and backend development
                    </p>
                </div>
                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                    <img 
                        className="object-cover object-center rounded-full shadow-md mx-auto w-96 h-96 md:w-128 md:h-128 lg:w-160 lg:h-160"
                        src={"images/Jacob.jpg"}
                        alt='Jacob'
                    />
                </div>
            </div>
        </section>
    )
}