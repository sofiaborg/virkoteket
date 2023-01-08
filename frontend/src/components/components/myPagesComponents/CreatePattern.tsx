import { useState, useEffect } from "react";
import { getCurrentUser } from "../../../interfaces/IProps";

export const CreatePattern = () => {
  const [typeCrochet, setTypeCrochet] = useState<Boolean>(false);
  const [typeKnit, setTypeKnit] = useState<Boolean>(false);

  const [title, setTitle] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [image, setImage] = useState<string>("");
  const [pattern, setPattern] = useState<string>("");
  const [category, setCategory] = useState<String>("");
  const [type, setType] = useState<String>("");
  const [difficulty, setDifficulty] = useState<String>("");
  const [yarn, setYarn] = useState<String>("");
  const [hook, setHook] = useState<String>("");
  const [needle, setNeedle] = useState<String>("");

  const convertImgFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: String = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  const convertPdfFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: String = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setPattern(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  const handleCreatePattern = async (e: any) => {
    const user = getCurrentUser();

    e.preventDefault();
    await fetch(
      "http://localhost:8000/user/createpost",

      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
          user: user.id,
        },

        body: JSON.stringify({
          title,
          image,
          pattern,
          description,
          type,
          difficulty,
          yarn,
          hook,
          needle,
          category,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Pattern title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            placeholder="IMAGE"
            onChange={(e) => convertImgFile(e.target.files)}
          />
          {image.indexOf("image/") > -1 && (
            <img src={image} alt="img" width={300} />
          )}
          <input
            type="file"
            placeholder="PDF"
            onChange={(e) => convertPdfFile(e.target.files)}
          />

          <h3>Categories</h3>
          <label>Choose category:</label>
          <select name="x" id="x" onChange={(e) => setCategory(e.target.value)}>
            <option selected disabled>
              Category
            </option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Kids">Kids</option>
            <option value="Baby">Baby</option>
            <option value="Pets">Pets</option>
            <option value="Home">Home</option>
            <option value="Holidays">Holidays</option>
          </select>

          <h3>FILTER</h3>

          <label>Main filter:</label>
          <select
            onChange={(e) => {
              if (e.target.value === "Crochet") {
                setTypeCrochet(true);
                setTypeKnit(false);
                setType(e.target.value);
              } else if (e.target.value === "Knit") {
                setTypeCrochet(false);
                setTypeKnit(true);
                setType(e.target.value);
              }
            }}
          >
            <option selected disabled>
              Type
            </option>
            <option value="Crochet">Crochet</option>
            <option value="Knit">Knit</option>
          </select>

          {typeCrochet && (
            <div>
              <select
                name="x"
                id="x"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option selected disabled>
                  Difficulty
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Interemediate">Interemediate</option>
                <option value="Experienced">Experienced</option>
              </select>
              <select name="x" id="x" onChange={(e) => setHook(e.target.value)}>
                <option selected disabled>
                  Hook
                </option>
                <option value="2-2.5 mm">2-2.5 mm</option>
                <option value="3-3.5 mm">3-3.5 mm</option>
                <option value="4-4.5 mm">4-4.5 mm</option>
                <option value="6-6.5 mm">6-6.5 mm</option>
                <option value="7-8 mm">7-8 mm</option>
                <option value="9-10 mm">9-10 mm</option>
                <option value="12-20 mm">12-20 mm</option>
              </select>

              <select name="x" id="x" onChange={(e) => setYarn(e.target.value)}>
                <option selected disabled>
                  Yarn
                </option>
                <option value="Mohair">Mohair</option>
                <option value="Fine cotton">Fine cotton</option>
                <option value="Wool">Wool</option>
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
                  Difficulty
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Interemediate">Interemediate</option>
                <option value="Experienced">Experienced</option>
              </select>
              <select
                name="x"
                id="x"
                onChange={(e) => setNeedle(e.target.value)}
              >
                <option selected disabled>
                  Needle
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

              <select name="x" id="x" onChange={(e) => setYarn(e.target.value)}>
                <option selected disabled>
                  Yarn
                </option>
                <option value="Mohair">Mohair</option>
                <option value="Fine cotton">Fine cotton</option>
                <option value="Wool">Wool</option>
              </select>
            </div>
          )}
        </form>
        <button onClick={handleCreatePattern}>Upload pattern</button>
      </div>

      <div></div>
    </>
  );
};
