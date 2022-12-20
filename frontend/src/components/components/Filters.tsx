export const Filters = () => {
  return (
    <>
      {" "}
      <div className="mainfilter-wrapper">
        <div>Virka</div>
        <div>Sticka</div>
      </div>
      <div className="filter-wrapper">
        <ul>
          <li>
            Svårighetsgrad
            <ul>
              {" "}
              <li>Nybörjare</li>
              <li>Mellan</li>
              <li>Erfaren</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            Stickfasthet
            <ul>
              {" "}
              <li>2-2.5 mm</li>
              <li>2.5-3.5 mm</li>
              <li>3.5-4 mm</li>
              <li>4-4.5 mm</li>
              <li>5-5.5 mm</li>
              <li>6-7 mm</li>
              <li>8-10 mm</li>
              <li>12-20 mm</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            Virknål
            <ul>
              {" "}
              <li>2-2.5 mm</li>
              <li>3-3.5 mm</li>
              <li>4-4.5 mm</li>
              <li>6-6.5 mm</li>
              <li>7-8 mm</li>
              <li>9-10 mm</li>
              <li>12-20 mm</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            Garntyp
            <ul>
              {" "}
              <li>Mohair</li>
              <li>Fin bomull</li>
              <li>Ull</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
