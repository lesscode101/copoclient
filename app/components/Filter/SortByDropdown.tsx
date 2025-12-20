"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import "./SortByDropdown.css";

type Option = { name: string; value: string };
interface SortByDropdownProps { onSelect: (value: string) => void; }

const options: Option[] = [
  { name: "A → Z", value: "az" },
  { name: "Price: Low to High", value: "priceLowHigh" },
  { name: "Price: High to Low", value: "priceHighLow" },
];

const SortByDropdown = ({ onSelect }: SortByDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(options[0]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onSelect(option.value);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="label-txt">Sort By:</span>
      <div className="select">
        <button className="select-title" onClick={() => setOpen(!open)}>
          {selected.name}
          <span className={`icon ${open ? "active" : ""}`}><i className="icon-dark-chevron"></i></span>
        </button>
        {open && (
          <div className="content">
            {options.map((option) => (
              <span
                key={option.value}
                className={`line ${option.value === selected.value ? "active" : ""}`}
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortByDropdown;
