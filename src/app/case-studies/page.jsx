import Nav from "@/components/Nav/Nav";
import CaseStudiesSlider from "@/components/CaseStudiesSlider/CaseStudiesSlider";

export const metadata = {
  title: "Case Studies & Portfolio",
  description: "Explore our portfolio of successful projects including mobile apps, IoT solutions, and enterprise web platforms. See how we've helped businesses increase revenue and scale faster.",
  openGraph: {
    title: "Case Studies & Portfolio | Rajsera Labs",
    description: "Explore our portfolio of successful projects including mobile apps, IoT solutions, and enterprise web platforms.",
  },
};

const page = () => {
  return (
    <div key="case-studies-page-wrapper">
      <Nav />
      <CaseStudiesSlider />
    </div>
  );
};

export default page;
