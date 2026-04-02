"use client";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./Hero2.css";

export default function Hero2(){
    return (
        <section className="mx-30 mt-10">
            <div className="flex items-center justify-start gap-5 ">
                <h3 className="bg-[#bcd960] px-6 py-2 text-4xl font-semibold rounded-xl">Services</h3>
                <p className="w-[40%] text-lg">Lorem ipsum dolor sit inventore nostrum accusantium facere vero itaque est atque?</p>
            </div>

             <div className="container">
                <div className="elem ">
                    <div className="elem-part1">
                        <h2>Search Engine Optimization</h2>
                        <h4> <ArrowOutwardIcon className=''/>  Learn More</h4>
                    </div>
                    <div className='elem-part2'>
                        <img src="/1.avif" alt='img' />
                    </div>
                </div>    
                <div className="elem black line1">
                    <div className="elem-part1">
                        <h2 style={{backgroundColor:"white"}}>Pay per click advertisement</h2>
                        <h4> <ArrowOutwardIcon className=''/>  Learn More</h4>
                    </div>
                    <div className='elem-part2'>
                        <img src="/1.avif" alt='img' />
                    </div>
                </div>    
                <div className="elem black line2">
                    <div className="elem-part1">
                        <h2 style={{backgroundColor:"white"}}>Social media marketing</h2>
                        <h4> <ArrowOutwardIcon className=''/>  Learn More</h4>
                    </div>
                    <div className='elem-part2'>
                        <img src="/1.avif" alt='img' />
                    </div>
                </div>    
                <div className="elem">
                    <div className="elem-part1">
                        <h2>E-mail Marketing</h2>
                        <h4> <ArrowOutwardIcon className=''/>  Learn More</h4>
                    </div>
                    <div className='elem-part2'>
                        <img src="/1.avif" alt='img' />
                    </div>
                </div>    
            </div>   

            {/* <div className="grid grid-cols-4 justify-center items-center gap-15">
                <div className="bg-red-500 border rounded-xl w-[20%] h-[30%]"> helo</div>
                <div className="bg-red-500 border rounded-xl w-[20%] h-[30%]"> helo</div>
                <div className="bg-red-500 border rounded-xl w-[20%] h-[30%]"> helo</div>
                <div className="bg-red-500 border rounded-xl w-[20%] h-[30%]"> helo</div>
            </div>  */}
        </section>
    )
}