"use client";
import React, { useState } from "react";

export default function MessageSender({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) {
  const [value, setValue] = useState("");
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Текст повідомлення"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}
