export const CategoryFilter = () => {
  return (
    <>
      <div className="category-wrapper">
        <ul>
          <li>
            {" "}
            <h3>Dam</h3>
          </li>
          <li>
            <h3>Herr</h3>
          </li>
          <li>
            <h3>Barn</h3>
          </li>
          <li>
            <h3>Baby</h3>
          </li>
          <li>
            <h3>Djur</h3>
          </li>
          <li>
            <h3>Hem</h3>
          </li>
          <li>
            <h3>Högtider</h3>
          </li>
        </ul>
      </div>

      <div className="maincategory-wrapper">
        <div>Virka</div>
        <div>Sticka</div>
      </div>

      <div className="filter-wrapper">
        <label>Svårighetsgrad:</label>

        <select name="cars" id="cars">
          <option value="x">Nybörjare</option>
          <option value="x">Mellan</option>
          <option value="x">Erfaren</option>
        </select>
        <label>Stickfasthet:</label>

        <select name="cars" id="cars">
          <option value="x">2-2.5 mm</option>
          <option value="x">2.5-3.5 mm</option>
          <option value="x">3.5-4 mm</option>
          <option value="x">4-4.5 mm</option>
          <option value="x">5-5.5 mm</option>
          <option value="x">3.5-4 mm</option>
          <option value="x">6-7 mm</option>
          <option value="x">8-10 mm</option>
          <option value="x">12-20 mm</option>
        </select>
        <label>Virknål:</label>

        <select name="x" id="x">
          <option value="x">2-2.5 mm</option>
          <option value="x">3-3.5 mm</option>
          <option value="x">4-4.5 mm</option>

          <option value="x">5-6.5 mm</option>
          <option value="x">7-8 mm</option>
          <option value="x">9-10 mm</option>
          <option value="x">12-20 mm</option>
        </select>
        <label>Garntyp:</label>

        <select name="x" id="x">
          <option value="x">Mohair</option>
          <option value="x">Fin bomull</option>
          <option value="x">Ull</option>
        </select>
      </div>
    </>
  );
};
