"use client";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Navbar() {
  return (
    <section className="relative w-100% h-100">
      <nav className="flex justify-between items-center font-semibold py-4 px-7">
        <div className="flex justify-center items-center gap-4">
          <AutoAwesomeIcon sx={{ fontSize: {sm:"20px", md:"40px"} }} />
          <h1 className="text-3xl md:text-4xl font-bold"> WizardZ</h1>
        </div>
        <div className="hidden md:flex justify-center items-center gap-8 text-md">
          <h4>About Us</h4>
          <h4>Services</h4>
          <h4>Use Cases</h4>
          <h4>Pricing</h4>
          <h4>Blog</h4>
          <button className="py-2 px-4 text-md rounded-xl border-2">
            Request a quote
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
