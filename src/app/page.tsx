import About from "@/components/About/About";
import Consultation from "@/components/Consultation/Consultation";
import Courses from "@/components/Courses/Courses";
import CustomBox from "@/components/CustomBox";
import Expertise from "@/components/Expertise/Expertise";
import Hero from "@/components/Hero/Hero";
import OurMission from "@/components/OurMission/OurMission";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
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

      <Consultation />
      <CustomBox
        hash="testimonials"
        withCustomBg
        htmlAttr={{ id: "testimonials" }}>
        <Testimonials />
      </CustomBox>

      <CustomBox
        className="pb-[240px]"
        hash="courses"
        withCustomBg
        htmlAttr={{ id: "courses" }}>
        <Courses />
      </CustomBox>
    </main>
  );
}
