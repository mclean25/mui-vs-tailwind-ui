import React, { useEffect, useRef, useState } from "react";

interface SelectChoice {
  display: string;
  id: string;
}

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
      className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
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

const DropdownMenu: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<
    SelectChoice | undefined
  >(undefined);
  const [showDropdown, setShowDropdown] = useState(false);
  const selectMenuNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      if (
        !(selectMenuNode.current as HTMLDivElement).contains(
          event.target as Node
        )
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      // Unbind the event listener on clean up1`
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [selectMenuNode]);

  const onSelectChoice = (selectedChoice: SelectChoice) => {
    setSelectedChoice(selectedChoice);
    setShowDropdown(false);
  };

  return (
    <div ref={selectMenuNode}>
      <label
        id="listbox-label"
        className="block text-sm font-medium text-gray-700"
      >
        Assigned to
      </label>
      <div className="mt-1 relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="block truncate">
            {selectedChoice ? selectedChoice.display : "Select one..."}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* <!-- Heroicon name: solid/selector --> */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        {showDropdown && (
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              <SelectMenuItem
                choice={{ display: "Hello", id: "hello" }}
                onSelectChoice={onSelectChoice}
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
