const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/video/cyberheroin-love.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 video-overlay" />
    </div>
  );
};

export default VideoBackground;
