const Todo = () => {
  return (
    <>
      <div className="w-[1000px] mx-auto mt-20 p-4">
        <h1 className="text-2xl font-semibold">ALL TODO LIST</h1>
        <ul>
          <li className="flex justify-between w-[700px] p-4 rounded-sm bg-slate-50">
            <h2>name</h2>
            <span className="flex gap-1">
              <button className="border-none rounded-full bg-orange-400 p-1 font-bold">
                Pending
              </button>
              <button className="border-none rounded-full bg-sky-500 p-1 font-bold">
                Processing
              </button>
              <button className="border-none rounded-full bg-green-500 p-1  font-bold">
                Done
              </button>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Todo;
