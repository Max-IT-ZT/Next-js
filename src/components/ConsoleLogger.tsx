"use client";

export default function ConsoleLogger() {
  const handleInfo = () => {
    console.info("Це інформаційне повідомлення");
  };

  const handleWarning = () => {
    console.warn("Це попередження");
  };

  const handleError = () => {
    console.error("Це помилка");
  };

  const handleDebug = () => {
    console.log("Debug: користувач натиснув кнопку");
    console.info("Info: операція виконана");
  };

  return (
    <div>
      <button onClick={handleInfo}>Інфо</button>
      <button onClick={handleWarning}>Попередження</button>
      <button onClick={handleError}>Помилка</button>
      <button onClick={handleDebug}>Debug</button>
    </div>
  );
}
