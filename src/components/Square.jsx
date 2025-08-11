// Square.jsx
// Component for rendering a single Sudoku cell

const keyDownHandler = (e) => {
  // Prevent entering 'e', 'E', or '0'
  if (["e", "E", "0"].includes(e.key)) {
    e.preventDefault();
  }
};

const inputHandler = (e) => {
  const value = e.target.value;

  // Clear if not a number
  if (Number.isNaN(+value)) {
    e.target.value = "";
  }
  // If greater than 9, only keep the last digit
  else if (+value > 9) {
    e.target.value = value.slice(-1);
  }

  // Move focus to the next cell automatically
  e.target.nextElementSibling?.focus();
};

const Square = ({ value = "", i, j, highlight }) => {  
  return (
    <input
      className={
        "h-8 w-8 p-2.5 text-base outline-1 outline outline-gray-400" +
        (highlight ? " bg-blue-200" : "")
      }
      type="number"
      min="1"
      max="9"
      data-i={i}
      data-j={j}
      onKeyDown={keyDownHandler}
      onInput={inputHandler}
      value={value}
    />
  );
};

export default Square;
