import { useState, useEffect, useContext } from "react";
import { getCurrentUser } from "../../../interfaces/IProps";
import { IUser } from "../../../interfaces/IProps";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth-context";

export const MyAccount = () => {
  const [user, setUser] = useState([]);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    async function fetchInfo() {
      const response = await fetch(`http://localhost:8000/user/myinfo`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
          user: user.id,
        },
      });
      const data = await response.json();
      setUser(data);
    }
    fetchInfo();
  }, [user]);
  return (
    <div className="w-full h-full flex bg-[#F6F0F0] pb-40 px-12 py-8">
      <div>
        <h3 className="font-sans font-family: sans-open pb-4">My account</h3>

        {user.map((user: IUser) => (
          <div key={user._id}>
            <p className="font-sans font-family: sans-open text-xs pb-4">
              Welcome {user.username}!
            </p>
            <p className="font-sans font-family: sans-open text-xs pb-12">
              Here at The Crochet Club we aim to have a strong community with
              happy users. To make sure that we have the correct information
              about you, please confirm email below.
            </p>

            <p className="font-sans font-family: sans-open text-xs pb-2">
              Registered email: {user.email}
            </p>
            <button className="flex justify-center items-center text-white hover:bg-[#ff9290] cursor-pointer rounded-full p-1 w-40 text-xs text-gray-900 font-sans font-family: sans-open bg-[#ffa3a3]">
              I confirm this is my email!
            </button>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};
