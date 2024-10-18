import About from "@/components/About/About";
import Consultation from "@/components/Consultation/Consultation";
import Courses from "@/components/Courses/Courses";
import CustomBox from "@/components/CustomBox";
import Expertise from "@/components/Expertise/Expertise";
import Hero from "@/components/Hero/Hero";
import OurMission from "@/components/OurMission/OurMission";
import Testimonials from "@/components/Testimonials/Testimonials";
import useActiveHash from "@/hooks/useActiveHash";

export default function Home() {
  return (
    <main>
      <section className="bg-blurGradient_normal">
        <CustomBox hash="home" htmlAttr={{ id: "home" }}>
          <Hero />
        </CustomBox>
      </section>
      <CustomBox hash="about" htmlAttr={{ id: "about" }} withCustomBg>
        <About />
      </CustomBox>
      <CustomBox hash="expertise" withCustomBg htmlAttr={{ id: "expertise" }}>
        <Expertise />
      </CustomBox>
      <CustomBox hash="ourmission" withCustomBg>
        <OurMission />
      </CustomBox>
      <CustomBox
        hash="consultation"
        withCustomBg
        htmlAttr={{ id: "consultation" }}>
        <Consultation />
      </CustomBox>
      <CustomBox
        hash="testimonials"
        withCustomBg
        htmlAttr={{ id: "testimonials" }}>
        <Testimonials />
      </CustomBox>

      <CustomBox hash="courses" withCustomBg htmlAttr={{ id: "courses" }}>
        <Courses />
      </CustomBox>
    </main>
  );
}
