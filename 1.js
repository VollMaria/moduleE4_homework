function showOwnProps(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${obj[key]}`);
      }
    }
  }