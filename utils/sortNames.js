import ObjExist from "./ObjExist";

 const sortNames = (a, b,keys=['name']) => {
    if (ObjExist(a,keys,'') > ObjExist(b,keys,'')) {
      return 1;
    }
    if (ObjExist(a,keys,'') < ObjExist(b,keys,'')) {
      return -1;
    }
    // a must be equal to b
  };
  export default sortNames;