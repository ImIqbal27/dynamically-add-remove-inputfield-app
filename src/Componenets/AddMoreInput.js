import React, { useState } from "react";

const AddMoreInput = () => {
  const [inputlist, setInputlist] = useState([{ firstName: "", lastName: "" }]);

  console.log("inputlist...", inputlist);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputlist];
    list[index][name] = value;
    setInputlist(list);
  };

  const handleAdd = (e) => {
    setInputlist([...inputlist, { firstName: "", lastName: "" }]);
  };

  const handleRemove = (index) => {
    console.log("remove..", index);
    const list = [...inputlist];
    list.splice(index, 1);
    setInputlist(list);
  };

  return (
    <div>
      <div>
        {inputlist.map((x, i) => {
          return (
            <>
              <div className="mt-10">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Type here  your first name"
                  className="input input-info w-full max-w-xs mx-3"
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Type here your last name"
                  className="input  input-info w-full max-w-xs  mx-3"
                  onChange={(e) => handleInputChange(e, i)}
                />
                {inputlist.length !== 1 && (
                  <button
                    onClick={() => handleRemove(i)}
                    className="btn btn-outline btn-ghost">
                    <span className="text-2xl"> - </span>
                  </button>
                )}

                {inputlist.length - 1 === i && (
                  <button
                    onClick={handleAdd}
                    className="btn btn-outline btn-primary">
                    <span className="text-2xl"> + </span>
                  </button>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AddMoreInput;
