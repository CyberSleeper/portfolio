import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  const roles = [
    'Fullstack Developer', 1000,
    'Competitive Programmer', 1000,
    'Software Engineer.', 1000,
    'Problem Solver.', 1000,
    'Lifelong Learner.', 1000
  ];

  return (
    <section className="min-h-screen">
      <div className='flex flex-col justify-center h-screen w-full px-12'>
        <div className='flex flex-col'>
          <h2 className='text-4xl font-bold text-light-secondary dark:text-dark-secondary'>Mahartha Gemilang</h2>
          <h1 className='text-6xl font-bold text-light-primary dark:text-dark-primary'>
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
    </section>
  );
}