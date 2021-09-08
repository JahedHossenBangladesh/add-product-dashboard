import { ArrowNarrowLeftIcon, UploadIcon } from "@heroicons/react/solid";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
function AddProduct() {

const editor = useRef(null);
const [content, setContent] = useState("");

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};






    return (
      <div className="ml-5">
        <div className="border-b-2  pb-2 pr-5">
          <h1 className="space-x-4 inline-block font-semibold text-2xl pr-5">
            {" "}
            <ArrowNarrowLeftIcon className=" h-10 w-10 text-black-500 inline-block justify-items-center pr-2 cursor-pointer" />
            Add New Product
          </h1>
        </div>
        <div className="">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4 flex"
            for="inline-full-name"
          >
            Product title
          </label>

          {/* class="md:w-2/3" */}
          <input
            className="bg-transparent outline-none pl-5 text-base border-2 pr-96 py-2"
            id="inline-full-name"
            type="text"
            // value="Enter title here "
            placeholder="Enter title here"
          />
        </div>

        <div className="mt-3">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4 flex"
            for="inline-full-name mb-2"
          >
            Product description
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </div>
        <div className="mt-3">
          <div className=" items-center   md:shadow-sm">
            {/* <input
              className="flex-grow bg-transparent outline-none pl-5 text-base"
              id="inline-full-name"
              type="file"
              // value="Enter title here "
              placeholder="Enter file here"
            /> */}
            <label
              class="block font-bold md:text-right mb-1 md:mb-0 pr-4 flex"
              for="file"
            >
              Upload media
            </label>

            <input
              type="file"
              className="flex-grow  border-2  bg-transparent outline-none pl-5"
              id="file"
              style={{ display: "none" }}
              name="image"
              accept="image/gif,image/jpeg,image/jpg,image/png"
              multiple=""
              data-original-title="upload photos"
            />

            <UploadIcon className=" h-10 w-10 text-black-500 inline-block justify-items-center pr-2 cursor-pointer" />
          </div>
          <div className="mt-3">
            <label
              class="block font-bold md:text-right mb-1 md:mb-0 pr-4 flex"
              for="file"
            >
              Product variant
            </label>
            <p className="text-gray-600 text-sm">
              This product has multiple options,like different sizes or colors{" "}
            </p>
            <button class="text-gray-50 text-xs hover:bg-blue-700 text-white  py-2 px-4 bg-gray-800  rounded-md mt-3">
              Add Variant Option
            </button>
          </div>
          <div className="mt-3">
            <label
              class="block font-bold md:text-right mb-1 pr-4 flex"
              for="file"
            >
              SEO Meta Detail
            </label>
            <div className="flex  items-center border-2   md:shadow-sm mb-2">
              <input
                className=" bg-transparent outline-none pl-5 text-base"
                id="inline-full-name"
                type="text"
                // value="Enter title here "
                placeholder="SEO Title"
              />
            </div>
            <div className="flex  items-center border-2   md:shadow-sm">
              <input
                className=" bg-transparent outline-none pl-5 text-base pb-48"
                id="inline-full-name"
                type="text"
                // value="Enter title here "
                placeholder="SEO Description"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddProduct
