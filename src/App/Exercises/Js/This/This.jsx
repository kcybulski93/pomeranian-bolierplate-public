export const This = () => {
  const myObject = {
    name: 'Jeremy',
    classicGreet: function () {
      console.log(this.name);
    },
    arrowGreet: () => {
      console.log(this.name);
    },
  };

  console.log(myObject.classicGreet());
  console.log(myObject.arrowGreet());

  return <div>Hello This</div>;
};
