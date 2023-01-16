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
    <div className="w-full h-full flex justify-center items-center bg-[#F6F0F0]">
      <div>
        <h3>Mitt konto</h3>

        {user.map((user: IUser) => (
          <div key={user._id}>
            <h3>Welcome {user.email}</h3>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};
