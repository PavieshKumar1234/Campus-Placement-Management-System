'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EntryPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Browser autoplay restriction.
        // The video is muted, so autoplay should normally work.
      }
    };

    playVideo();
  }, []);

  const goToDashboard = () => {
    if (leaving) return;

    setLeaving(true);

    window.setTimeout(() => {
      router.replace('/admin/dashboard');
    }, 700);
  };

  return (
    <main className={`entry-page ${leaving ? 'entry-page-exit' : ''}`}>
      <video
        ref={videoRef}
        className="entry-fullscreen-video"
        src="/campus-entry.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={goToDashboard}
      />

      <button
        type="button"
        className="entry-skip-button"
        onClick={goToDashboard}
        aria-label="Skip intro"
      >
        Skip Intro
      </button>
    </main>
  );
}