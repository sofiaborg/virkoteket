export const categoryFilter = () => {
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
      </div>
    </>
  );
};
