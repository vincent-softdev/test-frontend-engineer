
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";

const AboutPage = () => {
    return (
        <section className="bg-gray-900 text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2">
            <p className="text-yellow-500">Hello, Welcome</p>
            <h1 className="text-4xl font-bold mt-2">I'm Vincent Ly</h1>
            <p className="text-gray-300 mt-4">
            I am a Full Stack Developer with over two years of experiences, specialising in React.js, Next.js, Flutter, and TypeScript. I excel in fast-paced environments and team-driven projects where I can improve and learn. I enthusiastically communicate and build strong connections with team members to streamline development and proactively resolve potential conflicts. My previous role strengthened my communication skills, creativity and initiative, as I contributed not only to full-stack development but also to ideation and teaching junior members.
            </p>
            <SocialLinks />
          </div>
    
          {/* Right Profile Image */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <Image
              src="/vincent_ly.jpg"
              alt="Vincent Ly"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      );
}

export default AboutPage