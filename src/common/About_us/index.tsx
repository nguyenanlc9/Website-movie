import React from "react";
import { useTheme } from "@/context/themeContext";
import { cn } from "@/utils/helper";

const AboutUs: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={cn(
        `pt-[100px] pb-[50px] min-h-screen transition-all duration-50`,
        theme === "Dark" ? "bg-dark text-white" : "bg-light text-black"
      )}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our company! We are committed to delivering the best
          products and services to our customers. Our dedicated team of
          professionals works tirelessly to meet your needs and exceed your
          expectations.
        </p>

        <section className="mission mb-8">
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is to lead with innovation, deliver high-quality
            products, and provide outstanding customer service. We strive to
            make a positive impact in every community we serve.
          </p>
        </section>

        <section className="team mb-8">
          <h2 className="text-3xl font-semibold mb-2">Meet Our Team</h2>
          <p>
            Our team is made up of creative, talented, and driven individuals
            who share a passion for excellence. Together, we work to bring you
            the best solutions to meet your goals.
          </p>
          Luong Quynh Nhu / Nguyen Tien Anh / Nguyen Huynh Tuong An
        </section>

        <section className="contact">
          <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions, feel free to{" "}
            <a href="/contact" className="text-blue-500 underline">
              contact us
            </a>
            . We’re here to help!
          </p>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
