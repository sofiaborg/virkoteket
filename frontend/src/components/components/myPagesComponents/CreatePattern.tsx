import { useState, useEffect } from "react";
import {
  getCurrentUser,
  categoryList,
  mainFiltersList,
  startFilter,
  crochetFilter,
  knitFilter,
} from "../../../interfaces/IProps";
import storage from "../../../firebase/firebaseConfig";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const validationSchema = z.object({
  title: z.string().min(5, { message: "Title is required" }),
  description: z.string().min(25, { message: "Description is required" }),
  image: z.string().min(25, { message: "Image is required" }),
  pattern: z.string().min(25, { message: "Pattern file is required" }),
  category: z.string().min(25, { message: "Category is required" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

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

  const [file, setFile] = useState<File>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

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

  const onSubmit: SubmitHandler<ValidationSchema> = async () => {
    const user = getCurrentUser();
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

    window.location.href = "http://localhost:3000/mypages/mypatterns";
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#F6F0F0]">
      <div className="w-3/5 py-20 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              id="title"
              className="p-1 w-full text-sm text-gray-900 bg-gray-50"
              type="text"
              {...register("title")}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.title?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="block p-1 w-full text-sm text-gray-900 bg-gray-50"
              {...register("description")}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.description?.message}
              </p>
            )}
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
              {...register("image")}
              onChange={(e) => convertImgFile(e.target.files)}
            />

            {image.indexOf("image/") > -1 && (
              <img src={image} alt="img" width={200} />
            )}

            {errors.image && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.image?.message}
              </p>
            )}
          </div>

          <div>
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              Choose file. PDF (MAX. 0.5MB).
            </p>
            <input
              type="file"
              {...register("pattern")}
              onChange={handleChange}
              accept=""
            />
            {errors.pattern && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.pattern?.message}
              </p>
            )}
          </div>

          <div>
            <select
              className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50 "
              {...register("category")}
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

            {errors.category && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.category?.message}
              </p>
            )}
          </div>

          <div>
            {mainFiltersList.map((type) => (
              <div key={type.title}>
                <label>{type.title}</label>

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
          </div>

          <div>
            {startFilter.map((filter) => (
              <div key={filter.title}>
                <select
                  className="p-1 cursor-pointer w-full text-sm text-gray-900 bg-gray-50 "
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option className="py-7" selected disabled>
                    {filter.title}
                  </option>
                  {filter.options.map((option) => (
                    <option key={option.title} value={option.title}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {typeCrochet && (
            <div className="flex flex-col gap-1">
              <select
                className="p-1 w-full cursor-pointer  text-sm text-gray-900 bg-gray-50  "
                onChange={(e) => setHook(e.target.value)}
              >
                <option selected disabled>
                  Hook
                </option>

                {crochetFilter.map((filter) => (
                  <option key={filter.title} value={filter.title}>
                    {filter.title}
                  </option>
                ))}
              </select>
            </div>
          )}
          {typeKnit && (
            <div className="flex flex-col gap-1">
              <select
                className="p-1 w-full cursor-pointer text-sm text-gray-900 bg-gray-50  "
                onChange={(e) => setNeedle(e.target.value)}
              >
                <option selected disabled>
                  Needle
                </option>
                {knitFilter.map((filter) => (
                  <option key={filter.title} value={filter.title}>
                    {filter.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            {" "}
            <button
              className="bg-[#ed9999] hover:bg-[#da9090] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Upload pattern
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center pt-5"></div>
      </div>
    </div>
  );
};
