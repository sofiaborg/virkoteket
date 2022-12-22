import { showPage } from "../../../interfaces/IProps";

export const MyPatterns = (props: showPage) => {
  return (
    <>
      {props.show ? (
        <div>
          <h3>Mina mönster</h3>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
