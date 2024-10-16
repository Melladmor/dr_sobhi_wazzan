import About from "@/components/About/About";
import Consultation from "@/components/Consultation/Consultation";
import Courses from "@/components/Courses/Courses";
import CustomBox from "@/components/CustomBox";
import Expertise from "@/components/Expertise/Expertise";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurMission from "@/components/OurMission/OurMission";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="bg-blurGradient_normal">
        <CustomBox htmlAttr={{ id: "home" }}>
          <Hero />
        </CustomBox>
      </section>
      <CustomBox htmlAttr={{ id: "about" }} withCustomBg>
        <About />
      </CustomBox>
      <CustomBox withCustomBg>
        <Expertise />
      </CustomBox>
      <CustomBox withCustomBg>
        <OurMission />
      </CustomBox>
      <CustomBox withCustomBg htmlAttr={{ id: "consultation" }}>
        <Consultation />
      </CustomBox>
      <CustomBox withCustomBg htmlAttr={{ id: "testimonials" }}>
        <Testimonials />
      </CustomBox>

      <CustomBox withCustomBg htmlAttr={{ id: "courses" }}>
        <Courses />
      </CustomBox>
    </main>
  );
}
