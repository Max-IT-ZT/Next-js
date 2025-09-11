"use client";
import React, { useState } from "react";

export interface CheckboxProps {
  label?: string;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({
  label = "Приймаю умови",
  onChange,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="cursor-pointer"
      />
      {label}
    </label>
  );
}
