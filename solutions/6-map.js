const getChildren = (users) => {
    // BEGIN
    const children = users.flatMap(user => user.children || []);
    return children;
    // END
  };
  
  export default getChildren;