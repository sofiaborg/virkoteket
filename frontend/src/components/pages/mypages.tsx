import React from "react";
import { Wrapper } from "../components/StyledComponents/StyledWrappers";

export const Mypages = () => {
  //OBS denna funkar ej. Fixa
  const handleLogout = async () => {
    await fetch("http://localhost:8000/auth/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("utloggad yay");
        } else {
          console.log("funkade ej");
        }
      });
  };

  return (
    <>
      <Wrapper>
        <h1>Mina sidor</h1>
        <div className="sidebar-wrapper">
          <div>
            <h2>Mina mönster</h2>
            <div>
              <div>
                <h2>Mitt konto</h2>
              </div>
              <div>
                <button onClick={handleLogout}>Logga ut</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainbar-wrapper">
          <h3>
            Om mönster finns, loopa ut dem här. "Skapa mönster"-knapp ligger
            längst ner på sidan
          </h3>
          <button>Skapa mönster</button>
          <h3>Om inga mönster är skapade ännu ska detta form visas direkt</h3>

          <form action="#">
            <input type="text" placeholder="Namn på mösnter" />
            <input type="text" placeholder="Beskrining" />
            <input type="file" placeholder="ladda upp bild" />
            <input type="file" placeholder="Ladda upp mönster som pdf" />
            <label>Kategori:</label>

            <select name="cars" id="cars">
              <option value="volvo">Virka</option>
              <option value="saab">Sticka</option>
            </select>

            <h3>Beroende på vald kategori får man olika filter här:</h3>
            <label>Svårighetsgrad:</label>

            <select name="cars" id="cars">
              <option value="volvo">Nybörjare</option>
              <option value="saab">Normal</option>
              <option value="saab">Erfaren</option>
            </select>
            <label>Stickfasthet:</label>

            <select name="cars" id="cars">
              <option value="volvo">x</option>
              <option value="saab">x</option>
              <option value="saab">x</option>
            </select>
            <label>Virknål:</label>

            <select name="cars" id="cars">
              <option value="volvo">x</option>
              <option value="saab">x</option>
              <option value="saab">x</option>
            </select>
            <label>Garntyp:</label>

            <select name="cars" id="cars">
              <option value="volvo">x</option>
              <option value="saab">x</option>
              <option value="saab">x</option>
            </select>
          </form>

          <button>Ladda upp mönster</button>
        </div>
      </Wrapper>
    </>
  );
};
