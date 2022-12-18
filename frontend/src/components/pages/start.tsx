export const Start = () => {
  return (
    <>
      <div className="category-wrapper"></div>

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
