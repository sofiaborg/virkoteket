import { showPage } from "../../../interfaces/IProps";

export const MyAccount = (props: showPage) => {
  return (
    <>
      {props.show ? (
        <div>
          <h3>Mitt konto</h3>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
