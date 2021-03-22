import React from "react";
import { SelectChoice } from "./SelectMenu";

interface SelectMenuItemProps {
  choice: SelectChoice;
  onSelectChoice: (choice: SelectChoice) => void;
}

const SelectMenuItem: React.FC<SelectMenuItemProps> = ({
  choice,
  onSelectChoice,
}) => {
  return (
    <li
      id={choice.id}
      className="hover:bg-tertiary text-gray-900 hover:text-primary rounded-lg cursor-default select-none relative py-1 my-1 pl-2 ml-2 pr-9 mr-2"
    >
      <span
        className="font-normal block truncate"
        onClick={() => onSelectChoice(choice)}
      >
        {choice.display}
      </span>
    </li>
  );
};

export default SelectMenuItem;
