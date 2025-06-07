"use client";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="w-full p-5 py-10 flex flex-col items-center gap-10"
    >
      <h1>SERVICES</h1>
      <div className="w-full flex flex-col md:flex-row gap-10">
        <h2 className="w-full md:w-[40%] text-2xl font-playfair">
          Design solutions tailored to your space, style, and lifestyle
        </h2>
        <p className="w-full md:w-[60%]">
          We offer a full range of interior design services to bring your vision
          to life—from concept to completion. Whether you're redesigning a
          single room or renovating your entire home, we craft personalized
          spaces that are both functional and beautiful.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:flex gap-2">
        <ServiceCard
          heading="3D Visualization and space Planning"
          description="See your space before it's built with realistic 3D renders and smart layouts that maximize every square foot.
Image Suggestion: Screen displaying a 3D interior render or side-by-side plan and 3D view"
          src="/space-planning.jpg"
        />
        <ServiceCard
          heading="Resedential Interior Design"
          description="We design personalized, functional homes that reflect your lifestyle—turning every space into a comfortable and stylish retreat"
          src="/living-room-service.jpg"
        />

        <ServiceCard
          heading="Commericial Interior Design"
          description="We create inspiring offices, retail, and hospitality spaces that blend aesthetics with business goals.
Image Suggestion: Modern office space or chic café with people interacting"
          src="/commercial.jpg"
        />
        <ServiceCard
          heading="Sustainable Design"
          description="Eco-friendly interiors using sustainable materials and energy-efficient solutions—where style meets responsibility"
          src="/sustainable.jpg"
        />
      </div>
    </section>
  );
}

export default Services;
