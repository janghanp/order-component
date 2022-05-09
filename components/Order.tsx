import Image from "next/image";

const Order = () => {
  return (
    <div className="h-[700px] w-[327px] overflow-hidden rounded-3xl bg-white shadow-lg md:w-[450px]">
      <Image
        src={"/assets/illustration-hero.svg"}
        alt="listeing to music"
        width={450}
        height={220}
      />
      <div className="mx-5 my-5 flex flex-col items-center justify-center md:mx-11 md:my-11">
        <h1 className="mb-5 text-3xl font-bold text-darkBlue">Order Summary</h1>
        <p className="text-center text-desaturatedBlue">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="mt-5 flex w-full flex-row items-center justify-between rounded-xl bg-veryPaleBlue p-6">
          <div className="flex flex-row items-center">
            <div className="h-[48px] w-[48px] overflow-hidden">
              <Image
                src={"/assets/icon-music.svg"}
                alt="listeing to music"
                width={48}
                height={48}
              />
            </div>
            <div className="ml-5 flex flex-col">
              <h2 className="text-sm font-bold text-darkBlue md:text-lg">
                Annual Plan
              </h2>
              <span className="text-sm text-desaturatedBlue md:text-base">
                $59.99/year
              </span>
            </div>
          </div>
          <span className="text-sm font-semibold text-brightBlue underline hover:cursor-pointer hover:text-indigo-500 md:text-base">
            Change
          </span>
        </div>
        <button className="mt-7 w-full rounded-xl bg-brightBlue py-[13px] font-bold text-white shadow-xl hover:cursor-pointer hover:bg-indigo-500">
          Proceed to Payment
        </button>
        <span className="mt-8 font-bold text-desaturatedBlue hover:cursor-pointer hover:text-gray-800">
          Cancel Order
        </span>
      </div>
    </div>
  );
};

export default Order;
