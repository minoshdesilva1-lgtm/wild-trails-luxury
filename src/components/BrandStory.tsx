const BrandStory = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-[850px] mx-auto text-center space-y-8">
        {[
          <>Born in 2007 from a lifelong love for Sri Lanka's wild landscapes,{' '}<strong className="text-near-black">Wild Trails by Mili</strong> is more than a campsite — it is a curated journey into the heart of Yala.</>,
          <>What began during intimate photography expeditions evolved into a vision: to create a form of luxury glamping in Yala, Sri Lanka that honors the raw beauty of the wilderness while offering the comfort discerning travelers expect.</>,
          <>Here, canvas meets craftsmanship. Our bespoke tents — once hand-crafted using locally sourced materials — reflect years of dedication to perfecting the art of glamping. Every detail is intentionally designed to preserve authenticity while delivering understated elegance.</>,
          <>Wake to the distant call of wildlife. Dine under starlit skies. Immerse yourself in nature without surrendering comfort.</>,
        ].map((text, i) => (
          <p key={i} className="font-body text-lg leading-[1.9] text-near-black/70">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default BrandStory;
