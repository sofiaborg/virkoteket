export const NotFound = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#F6F0F0] flex flex-col md:flex-row items-center px-20">
        <div className="container w-full ms:w-3/6 flex flex-col md:flex-row items-center justify-center text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal font-sans font-family: sans-open pb-2">
              Something got tangled up...{" "}
            </p>
            <p className="mb-8 font-sans font-family: sans-open ">
              But dont worry, you can get untangled by clicking the button
              below.
            </p>

            <button className="bg-[#ffa3a3] hover:bg-[#ff9290] text-white text-sm w-40 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans font-family: sans-open">
              Back to homepage
            </button>
          </div>
        </div>
        <div className="pt-20 md:pt-0 w-5/6 flex justify-start md:justify-center">
          <img
            className="w-60"
            src="https://firebasestorage.googleapis.com/v0/b/virkoteket.appspot.com/o/files%2Fkitty-cute.gif?alt=media&token=6af6c495-725f-4f8d-8832-54f6da784bb2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
