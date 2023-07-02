"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value);

  return (
    <div>
      value:{value}
      <br />
      debounced:{debouncedValue}
      <p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
    </div>
  );
};

export default SearchInput;
