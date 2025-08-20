"use client";
import React, { useState } from "react";

export default function Calculate() {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstOperand, setFirstOperand] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const handleNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDot = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (nextOperator: string) => {
    if (operator && !waitingForOperand) {
      const result = calculate(Number(firstOperand), Number(display), operator);
      setDisplay(String(result));
      setFirstOperand(String(result));
    } else {
      setFirstOperand(display);
    }
    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleEqual = () => {
    if (operator && firstOperand !== null) {
      const result = calculate(Number(firstOperand), Number(display), operator);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setOperator(null);
    setFirstOperand(null);
    setWaitingForOperand(false);
  };

  const handleSign = () => {
    setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);
  };

  const handlePercent = () => {
    setDisplay(String(Number(display) / 100));
  };

  function calculate(a: number, b: number, op: string) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b !== 0 ? a / b : "Error";
      default:
        return b;
    }
  }

  const buttons = [
    { label: "C", onClick: handleClear, className: "function" },
    { label: "+/-", onClick: handleSign, className: "function" },
    { label: "%", onClick: handlePercent, className: "function" },
    { label: "÷", onClick: () => handleOperator("÷"), className: "operator" },
    { label: "7", onClick: () => handleNumber("7") },
    { label: "8", onClick: () => handleNumber("8") },
    { label: "9", onClick: () => handleNumber("9") },
    { label: "×", onClick: () => handleOperator("×"), className: "operator" },
    { label: "4", onClick: () => handleNumber("4") },
    { label: "5", onClick: () => handleNumber("5") },
    { label: "6", onClick: () => handleNumber("6") },
    { label: "-", onClick: () => handleOperator("-"), className: "operator" },
    { label: "1", onClick: () => handleNumber("1") },
    { label: "2", onClick: () => handleNumber("2") },
    { label: "3", onClick: () => handleNumber("3") },
    { label: "+", onClick: () => handleOperator("+"), className: "operator" },
    { label: "0", onClick: () => handleNumber("0"), className: "zero" },
    { label: ".", onClick: handleDot },
    { label: "=", onClick: handleEqual, className: "operator" },
  ];

  return (
    <div
      style={{
        width: 320,
        margin: "40px auto",
        background: "#222",
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        padding: 24,
        color: "#fff",
      }}
    >
      <div
        style={{
          minHeight: 60,
          fontSize: 48,
          textAlign: "right",
          marginBottom: 16,
          padding: "0 8px",
          overflowX: "auto",
        }}
      >
        {display}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={btn.onClick}
            style={{
              gridColumn: btn.className === "zero" ? "span 2" : undefined,
              height: 56,
              fontSize: 24,
              borderRadius: 28,
              border: "none",
              background:
                btn.className === "operator"
                  ? "#ff9500"
                  : btn.className === "function"
                  ? "#a5a5a5"
                  : "#333",
              color: btn.className === "function" ? "#000" : "#fff",
              cursor: "pointer",
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
