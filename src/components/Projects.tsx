import Image from "next/image";
import React from "react";
import Work from "./Work";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-10 flex flex-col items-center gap-10"
    >
      <h1 className="w-fit mx-auto">RECENT PROJECTS</h1>
      <div className="w-full">
        <Work
          heading="Modern Gray Haven"
          description="A cozy and stylish living room featuring a sleek gray L-shaped sofa, warm brown accents, and curated wall art—designed for comfort, simplicity, and everyday elegance"
          year="Jan, 2025"
          src="/living-room.jpg"
          sides="md:flex-row"
        />
        <Work
          heading="Serene Minimalist Bedroom"
          description="A peaceful bedroom with soft white and gray tones, highlighted by a unique triangular roof design. The minimal interior creates a calm, airy atmosphere—perfect for relaxation and everyday comfort"
          year="March, 2025"
          src="/bedroom.jpg"
          sides="md:flex-row-reverse"
        />
        <Work
          heading="Bold Monochrome Kitchen"
          description="A striking black-and-white kitchen that blends clean lines with bold contrast. Sleek surfaces and delicate pendant lights add a touch of elegance, creating a space that feels both modern and timeless"
          year="December, 2024"
          src="/kitchen.jpg"
          sides="md:flex-row"
        />
        <Work
          heading="Calm Marble Bathroom"
          description="A tranquil bathroom featuring sleek white fixtures, soft greenery, and a striking gray marble backdrop. The natural textures and subtle tones create a spa-like atmosphere that blends modern design with organic serenity"
          year="December, 2024"
          src="/bathroom.jpg"
          sides="md:flex-row-reverse"
        />
      </div>
    </section>
  );
}

export default Projects;
