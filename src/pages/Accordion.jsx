export default function Accordion() {
  return (
    <div className="flex flex-col items-center bg-green-700 pb-96">
      <div className="container mx-auto my-4 px-2 font-medium">
        <h1>Add Product</h1>
      </div>
      <div className="container mx-auto">
        <div className="border border-slate-300">
          <div className="mx-4">
            <div className="flex items-center border-b-2 border-slate-200/60 p-3 text-base font-medium">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              Upload Product
            </div>
            <div className="grid grid-rows-6 justify-center gap-32 bg-red-900 lg:grid-cols-6">
              <div className="col-span-2">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Photos</div>
                    <div class="ml-2 rounded-md bg-slate-900 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    <div>
                      The image format is .jpg .jpeg .png and a minimum size of
                      300 x 300 pixels (For optimal images use a minimum size of
                      700 x 700 pixels).
                    </div>
                    <div class="mt-2">
                      Select product photos or drag and drop up to 5 photos at
                      once here. Include min. 3 attractive photos to make the
                      product more attractive to buyers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis porro, ducimus eveniet quis quos iure architecto
                  tenetur perferendis harum odit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
