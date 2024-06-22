import Profile from "./assets/avatar-jessica.jpeg";

const App = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-[1rem] bg-darkGrey p-[2rem] rounded-lg items-center text-center">
        <div>
          <img
            src={Profile}
            alt="image"
            className="rounded-[50%] size-[5rem]"
          />
        </div>
        <div>
          <h6 className="text-primaryWhite text-[1.4rem]">Jessica Randall</h6>
          <p className="text-green text-[0.8rem]">London, United Kingdom</p>
        </div>
        <div>
          <p className="text-gray-300 text-[0.8rem] ">
            "Front-end developer and avid reader"
          </p>
        </div>
        <div className="flex flex-col gap-[0.5rem] w-full">
          <button className="bg-grey text-primaryWhite text-[0.8rem] font-semibold w-full py-[0.5rem] rounded-lg hover:bg-green hover:text-darkGrey [transition:all_0.3s]">
            GitHub
          </button>
          <button className="bg-grey text-primaryWhite text-[0.8rem] font-semibold w-full py-[0.5rem] rounded-lg hover:bg-green hover:text-darkGrey [transition:all_0.3s]">
            Frontend Mentor
          </button>
          <button className="bg-grey text-primaryWhite text-[0.8rem] font-semibold w-full py-[0.5rem] rounded-lg hover:bg-green hover:text-darkGrey [transition:all_0.3s]">
            LinkedIn
          </button>
          <button className="bg-grey text-primaryWhite text-[0.8rem] font-semibold w-full py-[0.5rem] rounded-lg hover:bg-green hover:text-darkGrey [transition:all_0.3s]">
            Twitter
          </button>
          <button className="bg-grey text-primaryWhite text-[0.8rem] font-semibold w-full py-[0.5rem] rounded-lg hover:bg-green hover:text-darkGrey [transition:all_0.3s]">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
