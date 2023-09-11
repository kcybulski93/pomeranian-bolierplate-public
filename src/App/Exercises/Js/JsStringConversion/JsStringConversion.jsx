export const JsStringConversion = () => {
  function calcResolution(x, y) {
    const clearedX = x.replace('px', '');
    const clearedY = y.replace('px', '');

    return (+clearedX * +clearedY).toString();
  }

  function isEmpty(input) {
    return (!!input).toString();
  }

  return (
    <div>
      <p>calcResolution: {calcResolution('1080px', '1920px')}</p>
      <p>{isEmpty(777)}</p>
    </div>
  );
};
