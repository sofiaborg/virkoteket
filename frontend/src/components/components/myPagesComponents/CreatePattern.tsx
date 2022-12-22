import { showPage } from "../../../interfaces/IProps";

export const CreatePattern = (props: showPage) => {
  return (
    <>
      {props.show ? (
        <div>
          <form action="#">
            <input type="text" placeholder="Namn på mösnter" />
            <input type="text" placeholder="Beskrining" />
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
            <select name="x" id="x">
              <option selected disabled>
                Typ
              </option>
              <option value="x">Virka</option>
              <option value="x">Sticka</option>
            </select>
            <h3>Beroende på valt huvudfilter får man olika filter här:</h3>
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
          </form>
          <button>Ladda upp mönster</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
