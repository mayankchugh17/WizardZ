"use client";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navbar() {
  const [open, setOpen] = useState(false);
  const h1 = useRef(null);
  const navDiv = useRef(null);
  const button = useRef(null);

  // Registration of Plugin
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  // Rendering
  useEffect(()=>{    
    gsap.from(h1.current,{
      y:-10,
      opacity:0,
      delay:0.75,
      duration:1
    });

    gsap.from(navDiv.current,{
      y:-10,
      opacity:0,
      delay:0.75,
      duration:1
    }) 
  },[])

  return (
    <section className="w-full">
      <nav className="flex justify-between items-center font-semibold py-4 px-6 md:px-10">

        {/* LOGO */}
        <div ref={h1} className="flex items-center gap-3">
          <AutoAwesomeIcon sx={{ fontSize: { xs: "24px", md: "36px" } }} />
          <h1 className="text-2xl md:text-3xl font-bold">WizardZ</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-base" ref={navDiv}>
          <h4 className="cursor-pointer hover:text-gray-600">About Us</h4>
          <h4 className="cursor-pointer hover:text-gray-600">Services</h4>
          <h4 className="cursor-pointer hover:text-gray-600">Use Cases</h4>
          <h4 className="cursor-pointer hover:text-gray-600">Pricing</h4>
          <h4 className="cursor-pointer hover:text-gray-600">Blog</h4>
          <button className="py-2 px-4 rounded-xl border-2 hover:bg-black hover:text-white transition">
            Request a quote
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium">
          <h4>About Us</h4>
          <h4>Services</h4>
          <h4>Use Cases</h4>
          <h4>Pricing</h4>
          <h4>Blog</h4>
          <button className="py-2 px-4 rounded-xl border-2 w-fit">
            Request a quote
          </button>
        </div>
      )}
    </section>
  );
}

export default Navbar;