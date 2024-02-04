function DessertsList(props) {
  const myArray = props.data;
  console.log(myArray);
  const filterArray = myArray.filter(obj => {
    if (obj.calories < 500){
    // {const line = `${obj.name} - ${obj.calories} cal`};
    // console.log(line)
    return obj
  }
      // console.log(line)
      // return line
    // return <li>{line}</li >;
    // return obj;
  })
  console.log("Filtereded Array:");
  console.log(filterArray);

  const sortedArray=filterArray.sort((a,b)=>{
    console.log(a);
    console.log(b);
    console.log(a.calories-b.calories);
    // if(a.calories>b.calories)
    // return a
    // else
    // return b
    return a.calories-b.calories
  })
  console.log("Sorted Array:");
  console.log(sortedArray);

  const arrayOfList=sortedArray.map(obj=>{
    return <li>{`${obj.name} - ${obj.calories} cal`}</li >
  })
  console.log("List Array");
  console.log(arrayOfList);
  // Implement the component here.
  return (
    <>
      <ul>
        {arrayOfList}
      </ul>
    </>
  );
}

export default DessertsList;
