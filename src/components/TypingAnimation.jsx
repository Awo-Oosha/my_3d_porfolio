import { TypeAnimation } from 'react-type-animation';

const HeroTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '3D Visuals Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1000,
        'Back-end Developer',
        1000,
        'Web Applications Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export {HeroTyping} ;