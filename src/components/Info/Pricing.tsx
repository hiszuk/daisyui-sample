import PriceCard from "../Cards/PriceCard"

export const Pricing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <div className="badge badge-primary">
            Brand new
          </div>
        </div>
        <h2 className="max-w-4xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          Choose your way. Advance everyday.
        </h2>
        <p className="text-base md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <PriceCard 
          title='Basic'
          description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque.'
          imageUrl="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          price={12}
        />

        <PriceCard 
          title='Advanced'
          description='A flower in my garden, a mystery in my panties. Heart attack never was so close.'
          imageUrl="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          price={38}
          choosen
        />

        <PriceCard 
          title='Pro'
          description='We never had the chance to. Maybe it was the eleven months he spent in the womb.'
          imageUrl="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          price={78}
        />

      </div>
    </div>
  );
};