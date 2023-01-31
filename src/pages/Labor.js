import { useAppContext } from "../context/AppProvider";

const Labor = () => {
  const [app, setApp] = useAppContext();
  const laborCalculator = app.labor;
  const { sqft, width, length, total } = laborCalculator;
  const updateSqft = ({ target }) => {
    return setApp({
      ...app,
      labor: { ...laborCalculator, sqft: target.value },
    });
  };
  const updateWidth = ({ target }) => {
    return setApp({
      ...app,
      labor: { ...laborCalculator, width: target.value },
    });
  };
  const updateLength = ({ target }) => {
    return setApp({
      ...app,
      labor: { ...laborCalculator, length: target.value },
    });
  };
  const updateTotal = () =>
    setApp({
      ...app,
      labor: { ...laborCalculator, total: (sqft / width) * length },
    });

  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-cols-2 justify-items-start gap-2">
        <label>SQFT</label>
        <input type="text" className="border" onChange={updateSqft}></input>
        <label>Width</label>
        <input type="text" className="border" onChange={updateWidth}></input>
        <label>Length</label>
        <input type="text" className="border" onChange={updateLength}></input>
        <button type="button" onClick={updateTotal} className="border-8">
          Submit
        </button>
      </div>
      <div>
        <label className="text-lg">${total}</label>
      </div>
    </div>
  );
};
export default Labor;
