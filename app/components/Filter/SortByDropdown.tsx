"use client";

import { useState, useRef, useEffect } from "react";
import "./SortByDropdown.css";
import { usePathname } from "next/navigation";

type Option = {
  name: string;
  name_ar: string;
  name_fr: string;
  value: string;
};

interface SortByDropdownProps {
  onSelect: (value: string) => void;
}

const SortByDropdown = ({ onSelect }: SortByDropdownProps) => {
  const options: Option[] = [
    {
      name: "A → Z",
      name_ar: "من الألف إلى الياء",
      name_fr: "A → Z",
      value: "az",
    },
    {
      name: "Price: Low to High",
      name_ar: "السعر: من الأقل إلى الأعلى",
      name_fr: "Prix : bas à haut",
      value: "priceLowHigh",
    },
    {
      name: "Price: High to Low",
      name_ar: "السعر: من الأعلى إلى الأقل",
      name_fr: "Prix : haut à bas",
      value: "priceHighLow",
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option>(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLang(storedLang);

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pathname]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onSelect(option.value);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      {lang === "en" && <span className="label-txt">Sort By:</span>}
      {lang === "fr" && <span className="label-txt">Trier par:</span>}
      {lang === "ar" && <span className="label-txt ar">فرز حسب:</span>}

      <div className="select">
        <button className="select-title" onClick={() => setOpen(!open)}>
          {lang === "ar" && <span>{selected.name_ar}</span>}
          {lang === "en" && <span>{selected.name}</span>}
          {lang === "fr" && <span>{selected.name_fr}</span>}

          <span className={`icon ${open ? "active" : ""}`}>
            <i className="icon-dark-chevron"></i>
          </span>
        </button>

        {open && (
          <div className="content">
            {options.map((option) => (
              <span
                key={option.value}
                className={`line ${option.value === selected.value ? "active" : ""}`}
                onClick={() => handleSelect(option)}
              >
                {lang === "ar" && <button>{option.name_ar}</button>}
                {lang === "en" && <button>{option.name}</button>}
                {lang === "fr" && <button>{option.name_fr}</button>}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortByDropdown;
