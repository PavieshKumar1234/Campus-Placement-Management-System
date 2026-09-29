'use client';

import { useEffect, useRef, useState } from 'react';

export default function EntryVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.currentTime = 0;

        const startVideo = async () => {
            try {
                await video.play();
            } catch {
                // Muted autoplay is normally allowed.
            }
        };

        startVideo();
    }, []);

    const closeIntro = () => {
        if (fading) return;

        setFading(true);

        window.setTimeout(() => {
            setVisible(false);
        }, 700);
    };

    if (!visible) {
        return null;
    }

    return (
        <div
            className={`entry-video-overlay ${fading ? 'entry-video-overlay-fading' : ''
                }`}
        >
            <video
                ref={videoRef}
                src="/campus-entry.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={closeIntro}
                className="entry-video-player"
            />

            <button
                type="button"
                onClick={closeIntro}
                className="entry-video-skip"
                aria-label="Skip intro"
            >
                Skip Intro
            </button>
        </div>
    );
}