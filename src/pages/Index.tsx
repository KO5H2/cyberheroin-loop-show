import VideoBackground from "@/components/VideoBackground";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 noise">
      <VideoBackground />
      
      <div className="relative z-10 flex flex-col items-center gap-12 md:gap-16">
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground text-glow opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          CYBERHEROIN
        </h1>
        
        <SocialLinks />
      </div>
    </main>
  );
};

export default Index;
