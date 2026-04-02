export default function Button({ texto, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {texto}
    </button>
  );
}
