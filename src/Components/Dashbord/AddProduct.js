import { ArrowNarrowLeftIcon,UploadIcon } from "@heroicons/react/solid";
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
        <div>
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4  "
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
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name mb-2"
          >
            Upload media
          </label>
          <div className="flex  items-center border-2   md:shadow-sm">
            <input
              className="flex-grow bg-transparent outline-none pl-5 text-base"
              id="inline-full-name"
              type="text"
              // value="Enter title here "
              placeholder="Enter title here"
            />

            <UploadIcon className=" h-10 w-10 text-black-500 inline-block justify-items-center pr-2 cursor-pointer" />
          </div>

          <div className="mt-3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name mb-2"
            >
              SEO Meta Detail
            </label>
            <div className="flex  items-center border-2   md:shadow-sm mb-3">
              <input
                className=" bg-transparent outline-none pl-5 text-base"
                id="inline-full-name"
                type="text"
                // value="Enter title here "
                placeholder="Enter title here"
              />
            </div>
            <div className="flex  items-center border-2   md:shadow-sm">
              <input
                className=" bg-transparent outline-none pl-5 text-base pb-48"
                id="inline-full-name"
                type="text"
                // value="Enter title here "
                placeholder="Enter title here"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddProduct
