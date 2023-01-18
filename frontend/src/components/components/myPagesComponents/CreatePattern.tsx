import { useState, useEffect } from "react";
import {
  getCurrentUser,
  categoryList,
  mainFiltersList,
} from "../../../interfaces/IProps";
import storage from "../../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const CreatePattern = () => {
  const navigate = useNavigate();

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

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imageError, setImageError] = useState("");
  const [patternError, setPatternError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [difficultyError, setDifficultyError] = useState("");
  const [yarnError, setYarnError] = useState("");
  const [hookError, setHookError] = useState("");
  const [needleError, setNeedleError] = useState("");
  const [validationFail, setValidationFail] = useState(false);

  const [file, setFile] = useState<File>();

  const convertImgFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: String = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  //VALIDATION

  function validateForm() {
    let error = false;

    if (title.trim() === "" || null) {
      setTitleError("Title is required");
      error = true;
    } else {
      setTitleError("");
    }

    if (description.trim() === "" || null) {
      setDescriptionError("Description is required");
      error = true;
    } else {
      setDescriptionError("");
    }

    if (image.trim() === "" || null) {
      setImageError("An image is required");
      error = true;
    } else {
      setImageError("");
    }

    if (pattern.trim() === "" || null) {
      setPatternError("Please add a pattern");
      error = true;
    } else {
      setPatternError("");
    }

    if (category.trim() === "" || null) {
      setCategoryError("Category is required");
      error = true;
    } else {
      setCategoryError("");
    }

    if (type.trim() === "" || null) {
      setTypeError("Type is required");
      error = true;
    } else {
      setTypeError("");
    }

    if (difficulty.trim() === "" || null) {
      setDifficultyError("Difficulty is required");
      error = true;
    } else {
      setDifficultyError("");
    }

    if (yarn.trim() === "" || null) {
      setYarnError("Yarn is required");
      error = true;
    } else {
      setYarnError("");
    }

    if (!error) {
      return true;
    } else {
      return false;
    }
  }

  // Handle file upload event and update pattern-state
  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setPattern(url);
          });
        }
      );
    }
  }, [file]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = getCurrentUser();

    if (validateForm()) {
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
      ).then((response) => {
        if (response.status === 200) {
          navigate("/mypages/mypatterns");
        } else if (response.status === 500) {
          console.log("fail");
        }
      });
    } else {
      console.log("gick ej hallå");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#f2eded]">
      <div className="w-5/6 pb-20 pt-8">
        <h1 className="font-sans font-family: sans-open pb-6">
          Create pattern
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex h-full">
            <input
              id="title"
              placeholder="Pattern title..."
              className="p-1 w-3/6 text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />

            <p className="flex items-center justify-end pl-2 h-4/4 w-3/6 italic text-xs text-red-500">
              {titleError}
            </p>
          </div>
          <div className="flex h-full">
            <textarea
              id="description"
              placeholder="Short description of the pattern..."
              className="block p-1 w-3/6  text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
              {descriptionError}
            </p>
          </div>
          <div className="flex h-full">
            <div className="w-3/6">
              <label
                htmlFor="imgFile"
                className="flex justify-center text-white items-center cursor-pointer hover:bg-[#ff9290] rounded-full p-1 w-20 text-xs text-gray-900 font-sans font-family: sans-open bg-[#ffa3a3]"
              >
                Add image
              </label>
              <input
                className="hidden"
                aria-describedby="file_input_help"
                id="imgFile"
                type="file"
                onChange={(e) => convertImgFile(e.target.files)}
              />
            </div>

            <p className="flex items-center pl-2 h-4/4 w-3/6 italic text-xs text-red-500 justify-end ">
              {imageError}
            </p>
          </div>
          {image.indexOf("image/") > -1 && (
            <img src={image} alt="img" width={200} />
          )}

          <div className="flex h-full">
            <div className="w-3/6">
              <label
                htmlFor="patternFile"
                className="flex justify-center items-center text-white hover:bg-[#ff9290] cursor-pointer rounded-full p-1 w-20 text-xs text-gray-900 font-sans font-family: sans-open bg-[#ffa3a3]"
              >
                Add pattern
              </label>
              <input
                id="patternFile"
                className="hidden"
                type="file"
                onChange={handleChange}
                accept=""
              />
            </div>

            <p className="flex items-center pl-2 h-4/4 w-3/6 italic text-xs text-red-500 justify-end ">
              {patternError}
            </p>
          </div>
          <p className=" text-xs text-gray-500 italic">{pattern}</p>

          <div className="flex h-full">
            <select
              id="category"
              className="p-1 w-3/6 cursor-pointer text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open "
              onChange={(e) => setCategory(e.target.value)}
            >
              <option
                className="font-sans font-family: sans-open text-xs"
                selected
                disabled
              >
                Category
              </option>
              {categoryList.map((category) => (
                <option
                  className="font-sans font-family: sans-open text-xs"
                  key={category.title}
                  value={category.title}
                >
                  {category.title}
                </option>
              ))}
            </select>
            <p className="flex items-center pl-2 h-4/4 w-3/6 italic text-xs text-red-500 justify-end ">
              {categoryError}
            </p>
          </div>

          <div className="flex h-full">
            {mainFiltersList.map((type) => (
              <div className="w-3/6" key={type.title}>
                <select
                  id="type"
                  className="p-1 w-3/6  cursor-pointer text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open"
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
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    selected
                    disabled
                  >
                    {type.title}
                  </option>
                  {type.options.map((option) => (
                    <option
                      className="font-sans font-family: sans-open text-xs"
                      key={option.title}
                      value={option.title}
                    >
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
              {typeError}
            </p>
          </div>

          {typeCrochet && (
            <div className="flex flex-col gap-1">
              <div className="flex h-full">
                <select
                  className="p-1 cursor-pointer w-3/6  text-gray-900 bg-gray-50 font-sans font-family: sans-open text-xs"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option
                    className="font-sans font-family: sans-open text-xs py-7"
                    selected
                    disabled
                  >
                    Difficulty
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Beginner"
                  >
                    Beginner
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Interemediate"
                  >
                    Interemediate
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Experienced"
                  >
                    Experienced
                  </option>
                </select>
                <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
                  {difficultyError}
                </p>
              </div>

              <div className="flex h-full">
                <select
                  className="p-1 w-3/6  cursor-pointer  text-xs text-gray-900 bg-gray-50  font-sans font-family: sans-open"
                  onChange={(e) => setHook(e.target.value)}
                >
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    selected
                    disabled
                  >
                    Hook
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="2-2.5 mm"
                  >
                    2-2.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="3-3.5 mm"
                  >
                    3-3.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="4-4.5 mm"
                  >
                    4-4.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="6-6.5 mm"
                  >
                    6-6.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="7-8 mm"
                  >
                    7-8 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="9-10 mm"
                  >
                    9-10 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="12-20 mm"
                  >
                    12-20 mm
                  </option>
                </select>
                <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
                  {hookError}
                </p>
              </div>
              <div className="flex h-full">
                <select
                  className="p-1 w-3/6  cursor-pointer text-xs text-gray-900 bg-gray-50  font-sans font-family: sans-open"
                  onChange={(e) => setYarn(e.target.value)}
                >
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    selected
                    disabled
                  >
                    Yarn
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Mohair"
                  >
                    Mohair
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Fine cotton"
                  >
                    Fine cotton
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Wool"
                  >
                    Wool
                  </option>
                </select>
                <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
                  {yarnError}
                </p>
              </div>
            </div>
          )}
          {typeKnit && (
            <div className="flex flex-col gap-1">
              <div className="flex h-full">
                <select
                  className="p-1 w-3/6 cursor-pointer text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    selected
                    disabled
                  >
                    Difficulty
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Beginner"
                  >
                    Beginner
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Interemediate"
                  >
                    Interemediate
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Experienced"
                  >
                    Experienced
                  </option>
                </select>
                <p className="flex items-center pl-2 h-4/4 w-3/6 italic text-xs text-red-500 justify-end ">
                  {difficultyError}
                </p>
              </div>
              <div className="flex h-full">
                <select
                  className="p-1 w-3/6 cursor-pointer text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open "
                  onChange={(e) => setNeedle(e.target.value)}
                >
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    selected
                    disabled
                  >
                    Needle
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="2-2.5 mm"
                  >
                    2-2.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="2.5-3.5 mm"
                  >
                    .25-3.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="3.5-4 mm"
                  >
                    3.5-4 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="4-4.5 mm"
                  >
                    4-4.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="5-5.5 mm"
                  >
                    5-5.5 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="6-7 mm"
                  >
                    6-7 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="8-10-20 mm"
                  >
                    8-10 mm
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="12-20 mm"
                  >
                    12-20 mm
                  </option>
                </select>

                <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
                  {needleError}
                </p>
              </div>

              <div className="flex h-full">
                <select
                  className="p-1 w-3/6 cursor-pointer  text-xs text-gray-900 bg-gray-50 font-sans font-family: sans-open"
                  onChange={(e) => setYarn(e.target.value)}
                >
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    selected
                    disabled
                  >
                    Yarn
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Mohair"
                  >
                    Mohair
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Fine cotton"
                  >
                    Fine cotton
                  </option>
                  <option
                    className="font-sans font-family: sans-open text-xs"
                    value="Wool"
                  >
                    Wool
                  </option>
                </select>
                <p className="flex items-center pl-2 h-4/4 w-3/6  italic text-xs text-red-500 justify-end ">
                  {yarnError}
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-start md:justify-end w-full pt-10">
            <button
              id="create-pattern"
              className="bg-[#ffa3a3] hover:bg-[#ff9290] text-white text-sm w-32 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans font-family: sans-open"
              type="submit"
            >
              Upload pattern
            </button>
          </div>
        </form>
        {validationFail ? (
          <p className="flex items-center pl-2 h-4/4 w-full md:w-2/6 italic text-xs text-red-500">
            Failed to upload pattern, please try again
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
