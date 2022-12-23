import { useState } from "react";
import { showPage } from "../../../interfaces/IProps";

export const CreatePattern = (props: showPage) => {
  const [typeCrochet, setTypeCrochet] = useState<Boolean>(false);
  const [typeKnit, setTypeKnit] = useState<Boolean>(false);

  const [title, setTitle] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [image, setImage] = useState<String>("");
  const [pattern, setPattern] = useState<String>("");
  const [category, setCategory] = useState<String>("");
  const [type, setType] = useState<String>("");
  const [difficulty, setDifficulty] = useState<String>("");
  const [yarn, setYarn] = useState<String>("");
  const [hook, setHook] = useState<String>("");
  const [needle, setNeedle] = useState<String>("");

  const handleCreatePattern = async (e: any) => {
    e.preventDefault();
    await fetch("http://localhost:8000/user/createpost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        title,
        description,
        image,
        pattern,
        category,
        type,
        difficulty,
        yarn,
        hook,
        needle,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      {props.show ? (
        <div>
          <form action="#">
            <input
              type="text"
              placeholder="Namn på mönster"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Beskrivning"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="file"
              placeholder="ladda upp bild"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="file"
              placeholder="Ladda upp mönster som pdf"
              onChange={(e) => setPattern(e.target.value)}
            />
            <h3>KATEGORIER</h3>
            <label>Välj passande kategori:</label>
            <select
              name="x"
              id="x"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled>
                Kategori
              </option>
              <option value="Dam">Dam</option>
              <option value="Herr">Herr</option>
              <option value="Barn">Barn</option>
              <option value="Baby">Baby</option>
              <option value="Djur">Djur</option>
              <option value="Hem">Hem</option>
              <option value="Högtider">Högtider</option>
            </select>

            <h3>FILTER</h3>

            <label>Huvudfilter:</label>
            <select
              onChange={(e) => {
                if (e.target.value === "Virka") {
                  setTypeCrochet(true);
                  setTypeKnit(false);
                  setType(e.target.value);
                } else if (e.target.value === "Sticka") {
                  setTypeCrochet(false);
                  setTypeKnit(true);
                  setType(e.target.value);
                }
              }}
            >
              <option selected disabled>
                Typ
              </option>
              <option value="Virka">Virka</option>
              <option value="Sticka">Sticka</option>
            </select>

            {typeCrochet && (
              <div>
                <select
                  name="x"
                  id="x"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option selected disabled>
                    Svårighetsgrad
                  </option>
                  <option value="Nybörjare">Nybörjare</option>
                  <option value="Normal">Normal</option>
                  <option value="Erfaren">Erfaren</option>
                </select>
                <select
                  name="x"
                  id="x"
                  onChange={(e) => setHook(e.target.value)}
                >
                  <option selected disabled>
                    Virknål
                  </option>
                  <option value="2-2.5 mm">2-2.5 mm</option>
                  <option value="3-3.5 mm">3-3.5 mm</option>
                  <option value="4-4.5 mm">4-4.5 mm</option>
                  <option value="6-6.5 mm">6-6.5 mm</option>
                  <option value="7-8 mm">7-8 mm</option>
                  <option value="9-10 mm">9-10 mm</option>
                  <option value="12-20 mm">12-20 mm</option>
                </select>

                <select
                  name="x"
                  id="x"
                  onChange={(e) => setYarn(e.target.value)}
                >
                  <option selected disabled>
                    Garntyp
                  </option>
                  <option value="Mohair">Mohair</option>
                  <option value="Fin bomull">Fin bomull</option>
                  <option value="Ull">Ull</option>
                </select>
              </div>
            )}

            {typeKnit && (
              <div>
                <select
                  name="x"
                  id="x"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option selected disabled>
                    Svårighetsgrad
                  </option>
                  <option value="Nybörjare">Nybörjare</option>
                  <option value="Normal">Normal</option>
                  <option value="Erfaren">Erfaren</option>
                </select>
                <select
                  name="x"
                  id="x"
                  onChange={(e) => setNeedle(e.target.value)}
                >
                  <option selected disabled>
                    Stickfasthet
                  </option>
                  <option value="2-2.5 mm">2-2.5 mm</option>
                  <option value="2.5-3.5 mm">.25-3.5 mm</option>
                  <option value="3.5-4 mm">3.5-4 mm</option>
                  <option value="4-4.5 mm">4-4.5 mm</option>
                  <option value="5-5.5 mm">5-5.5 mm</option>
                  <option value="6-7 mm">6-7 mm</option>
                  <option value="8-10-20 mm">8-10 mm</option>
                  <option value="12-20 mm">12-20 mm</option>
                </select>

                <select
                  name="x"
                  id="x"
                  onChange={(e) => setYarn(e.target.value)}
                >
                  <option selected disabled>
                    Garntyp
                  </option>
                  <option value="Mohair">Mohair</option>
                  <option value="Fin bomull">Fin bomull</option>
                  <option value="Ull">Ull</option>
                </select>
              </div>
            )}
          </form>
          <button onClick={handleCreatePattern}>Ladda upp mönster</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
