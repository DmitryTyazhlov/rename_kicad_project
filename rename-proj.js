const fs = require('fs');
const readline = require('readline');
const nodeProcess = require('process')

const { stdin: input, stdout: output } = nodeProcess;
const rl = readline.createInterface({ input, output });

const ROOT_PATH = "./";

const renameFiles = (newNameProj) => {
  fs.readdir(ROOT_PATH, (_, items) => {

    const nameFileProj = items.filter((item) => item.includes('.pro'))[0];
    const nameProj = nameFileProj.split('.')[0];
    
    const fileList = items.filter((item) => item.includes(nameProj));
    
    console.log(fileList);
    console.log(nameProj);

    fileList.map((item) => {
      const file = ROOT_PATH + item;
      const newNameFile = item.replace(nameProj, newNameProj);
      
      fs.rename(file, item.replace(item, newNameFile), (err) => {
        if (err) throw err; // не удалось переименовать файл
        console.log('Файл успешно переименован');
      });

    })

  });
}


// main
(async function () {

  const newNameProj = await new Promise(resolve => {
    rl.question("Новое название проекта: ", resolve)
  })

  rl.close();

  renameFiles(newNameProj)

})()