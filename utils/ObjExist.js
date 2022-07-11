const ObjExist = (obj, keys = [],defaultReturn='') => {

	let value = defaultReturn;

	if (!obj) return "";

	var currentObj = obj;

	for (let index = 0; index < keys.length; index++) {

	  const current = keys[index];
	  
	  if (typeof currentObj[current] == "boolean")return currentObj[current]?1:0;

	  if (!currentObj[current]) return defaultReturn;

	  value = (index, currentObj[current]);
	  currentObj = currentObj[current];

	}
	
	return value;
};

export default ObjExist;
