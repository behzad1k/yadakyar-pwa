import { useEffect, useState } from "react";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";

const SearchSelect = ({ data, setSelected, selected }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [options, setOptions] = useState<any>(data);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={helper.searchSelect}>
      <input
        placeholder={selectedOption}
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(text) =>
          setOptions(
            data.filter((option: any) =>
              option.title.includes(text.target.value)
            )
          )
        }
      />
      <i className={icon.chevronDown} />
      <ul className={!isFocused && helper.dNone}>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setSelected(option.id);
                setSelectedOption(option.title);
              }}
            >
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchSelect;
