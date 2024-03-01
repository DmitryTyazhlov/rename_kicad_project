let fs = require('fs');

let path = "./";

let oldNameProj = "DI4";
let newNameProj = "DI4_AO";

fs.readdir(path, function (err, items) {

  let hasOldName = items.filter(function (item) {
    return item.includes(oldNameProj);
  })

  console.log(hasOldName);

  hasOldName.map((item) => {
    let file = path + item;
    newNameFile = item.replace(oldNameProj, newNameProj);

    fs.rename(file, item.replace(item, newNameFile), err => {
      if (err) throw err; // не удалось переименовать файл
      console.log('Файл успешно переименован');
    });
  })

});