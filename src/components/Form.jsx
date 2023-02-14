import React, { memo, useState } from "react";
import { useEffect } from "react";
import "./Form.css";

const Form = (props) => {
  const [serachCountry, setSearchCountry] = useState("");
  //const [name, setName] = useState('')
  const { getSearchdata } = props;

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  useEffect(() => {
    getSearchdata(serachCountry.toLowerCase());
  }, [serachCountry, getSearchdata]);

  return (
    <div>
      <input
        type="text"
        value={serachCountry}
        placeholder="Enter country"
        onChange={handleSearch}
      />
    </div>
  );
};

export default memo(Form);
