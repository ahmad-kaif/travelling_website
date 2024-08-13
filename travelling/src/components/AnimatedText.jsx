import React, { useEffect, useState } from 'react';

function AnimatedText({ phrases, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const phrase = phrases[currentPhraseIndex];
    if (!phrase) return;

    let index = 0;
    setDisplayedText('');
    setIsFadingOut(false);

    // Typewriter effect
    const typingInterval = setInterval(() => {
      setDisplayedText(prev => prev + phrase[index]);
      index++;
      if (index >= phrase.length-1) clearInterval(typingInterval);
    }, 100); // Adjust typing speed here

    // Fade out after phrase is fully typed
    const fadeOutTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, (phrase.length * 100) + 1000); // Adjust delay before fading out

    // Transition to the next phrase
    const nextPhraseTimeout = setTimeout(() => {
      setIsFadingOut(false);
      setDisplayedText('');
      setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
    }, (phrase.length * 100) + 3000); // Adjust transition time here

    return () => {
      clearInterval(typingInterval);
      clearTimeout(fadeOutTimeout);
      clearTimeout(nextPhraseTimeout);
    };
  }, [currentPhraseIndex, phrases]);

  return (
    <p
      className={`${className} ${isFadingOut ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100 transition-opacity duration-1000'}`}
    >
      {displayedText}
    </p>
  );
}

export default AnimatedText;
