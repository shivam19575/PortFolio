
const HomeTopLast = () => {
  return (
    // this is the parent of all home

    <div className="homeLastBox w-full min-h-[600px] h-auto flex justify-center items-center gap-5 m-auto mb-20   ">
      {/* this is the left section of the home */}

      <div className="left w-1/2 min-h-full h-auto flex flex-col gap-5 justify-center items-center m-auto  relative">
        <div className="topdataFade">
          <h2 className="text-blue-800 text-xl capitalize">
            the software engineer
          </h2>
        </div>
        <div className="boxFade   flex items-center m-auto justify-center absolute mb-10"></div>
        <h1 className="text-blue-700 text-6xl font-bold mb-4 capitalize">
          welcome!{" "}
        </h1>
        <h1 className="text-blue-700 text-6xl font-bold mb-12 capitalize ">
          hello,<span className="text-orange-500">I'm shivam <span className="text-slate-500">pandey</span></span>{" "}
          <span className="text-teal-400 text-6xl font-bold mb-12 capitalize">
            work <span className="text-green-400">as software <span className="text-blue-400">engineer</span></span>
          </span>
        </h1>
        <div className="downDataHome w-2/3 h-15  m-auto absolute ">
          <p className="text-xl text-slate-600 capitalize mb-5">
            from prayagraj of uttar pradesh district in, India. currently I am
            looking for a software Engineer job role. wanna hire me? just click
            on hire button given below!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default HomeTopLast;
