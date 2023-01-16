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
    <div className="w-full h-full flex justify-center items-center bg-[#F6F0F0]">
      <div className="w-3/5 py-20 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              className="p-1 w-full text-sm text-gray-900 bg-gray-50"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{titleError}</p>
          </div>
          <div>
            <textarea
              className="block p-1 w-full text-sm text-gray-900 bg-gray-50"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p>{descriptionError}</p>
          </div>
          <div>
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              Choose image. PNG, JPG or JPG (MAX. 0.5MB).
            </p>
            <input
              className=" block p-1 w-full text-sm text-gray-900"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={(e) => convertImgFile(e.target.files)}
            />

            <p>{imageError}</p>

            {image.indexOf("image/") > -1 && (
              <img src={image} alt="img" width={200} />
            )}
          </div>

          <div>
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              Choose file. PDF (MAX. 0.5MB).
            </p>
            <input type="file" onChange={handleChange} accept="" />
            <p>{patternError}</p>
          </div>

          <div>
            <select
              className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50 "
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled>
                Category
              </option>
              {categoryList.map((category) => (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
            <p>{categoryError}</p>
          </div>

          <div>
            {mainFiltersList.map((type) => (
              <div key={type.title}>
                <select
                  className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50 "
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
                    {type.title}
                  </option>
                  {type.options.map((option) => (
                    <option key={option.title} value={option.title}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <p>{typeError}</p>
          </div>

          {typeCrochet && (
            <div className="flex flex-col gap-1">
              <div>
                <select
                  className="p-1 cursor-pointer w-full text-sm text-gray-900 bg-gray-50 "
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option className="py-7" selected disabled>
                    Difficulty
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Interemediate">Interemediate</option>
                  <option value="Experienced">Experienced</option>
                </select>
                <p>{difficultyError}</p>
              </div>

              <div>
                <select
                  className="p-1 w-full cursor-pointer  text-sm text-gray-900 bg-gray-50  "
                  onChange={(e) => setHook(e.target.value)}
                >
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
                <p>{hookError}</p>
              </div>

              <select
                className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50  "
                onChange={(e) => setYarn(e.target.value)}
              >
                <option selected disabled>
                  Yarn
                </option>
                <option value="Mohair">Mohair</option>
                <option value="Fine cotton">Fine cotton</option>
                <option value="Wool">Wool</option>
              </select>
              <p>{yarnError}</p>
            </div>
          )}
          {typeKnit && (
            <div className="flex flex-col gap-1">
              <div>
                <select
                  className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option selected disabled>
                    Difficulty
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Interemediate">Interemediate</option>
                  <option value="Experienced">Experienced</option>
                </select>
                <p>{difficultyError}</p>
              </div>
              <div>
                <select
                  className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50  "
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

                <p>{needleError}</p>
              </div>

              <div>
                <select
                  className="p-1 w-full cursor-pointer  text-sm text-gray-900 bg-gray-50 "
                  onChange={(e) => setYarn(e.target.value)}
                >
                  <option selected disabled>
                    Yarn
                  </option>
                  <option value="Mohair">Mohair</option>
                  <option value="Fine cotton">Fine cotton</option>
                  <option value="Wool">Wool</option>
                </select>
                <p>{yarnError}</p>
              </div>
            </div>
          )}

          <button
            className="bg-[#ed9999] hover:bg-[#da9090] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload pattern
          </button>
        </form>
        {validationFail ? (
          <h1>Failed to upload pattern, please try again</h1>
        ) : (
          <div></div>
        )}

        <div className="flex justify-center items-center pt-5"></div>
      </div>
    </div>
  );
};
