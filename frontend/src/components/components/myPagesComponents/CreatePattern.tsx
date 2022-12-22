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
  const [level, setLevel] = useState<String>("");
  const [yarn, setYarn] = useState<String>("");
  const [hooks, setHook] = useState<String>("");
  const [needle, setNeedle] = useState<String>("");

  return (
    <>
      {props.show ? (
        <div>
          <form action="#">
            <input type="text" placeholder="Namn på mösnter" />
            <input type="text" placeholder="Beskrivning" />
            <input type="file" placeholder="ladda upp bild" />
            <input type="file" placeholder="Ladda upp mönster som pdf" />
            <h3>KATEGORIER</h3>
            <label>Välj passande kategori:</label>
            <select name="x" id="x">
              <option selected disabled>
                Kategori
              </option>
              <option value="x">Dam</option>
              <option value="x">Herr</option>
              <option value="x">Barn</option>
              <option value="x">Baby</option>
              <option value="x">Djur</option>
              <option value="x">Hem</option>
              <option value="x">Högtider</option>
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
                <select name="x" id="x">
                  <option selected disabled>
                    Svårighetsgrad
                  </option>
                  <option value="x">Nybörjare</option>
                  <option value="x">Normal</option>
                  <option value="x">Erfaren</option>
                </select>
                <select name="x" id="x">
                  <option selected disabled>
                    Virknål
                  </option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                </select>

                <select name="x" id="x">
                  <option selected disabled>
                    Garntyp
                  </option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                </select>
              </div>
            )}

            {typeKnit && (
              <div>
                <select name="x" id="x">
                  <option selected disabled>
                    Svårighetsgrad
                  </option>
                  <option value="x">Nybörjare</option>
                  <option value="x">Normal</option>
                  <option value="x">Erfaren</option>
                </select>
                <select name="x" id="x">
                  <option selected disabled>
                    Stickfasthet
                  </option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                </select>

                <select name="x" id="x">
                  <option selected disabled>
                    Garntyp
                  </option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                  <option value="x">x</option>
                </select>
              </div>
            )}
          </form>
          <button>Ladda upp mönster</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
