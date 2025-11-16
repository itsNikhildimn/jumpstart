import w1 from '../../assets/w1.png'
import expert from '../../assets/expert.png'
import test from '../../assets/taketest.png'
import result from '../../assets/results.png'



export default function HowWorks() {
  const steps = [
    {
      icon: test,
      title: "Take the Test",
      desc: "Complete our psychology-designed aptitude tests at your own pace."
    },
    {
      icon: result,
      title: "Get Results",
      desc: "Receive detailed analysis of your strengths, interests, and career matches."
    },
    {
      icon: expert,
      title: "Expert Counselling",
      desc: "Book one-on-one sessions with psychologists for personalized guidance."
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-[#0B0C0E] text-center !text-[48px]">
          How Jumpstart Works
        </h2>
        <p className="text-gray-500 mt-2 text-center">
          A simple, scientifically-backed process to discover your ideal career
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
  {steps.map((step, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
    >
      {/* Icon */}
      <div className="flex items-center justify-start">
        <img 
          src={step.icon} 
          alt={step.title} 
          className="h-10 w-10 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#0B0C0E] mt-4 !text-[20px]">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 leading-relaxed !text-[14px]">
        {step.desc}
      </p>

      {/* Bottom Image */}
      <div className="mt-[26px]">
        <img src={w1} alt="visual" className="rounded-xl" />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
