const mapByProperty = (arr, objectProperty)=> {
    return arr.reduce((acc, item)=>{
      return {
        ...acc,
        [item[objectProperty]]: item
      }
    },{})
  }

  export default mapByProperty;