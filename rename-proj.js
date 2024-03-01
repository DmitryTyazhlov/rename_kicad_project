const fs = require('fs');
const readline = require('readline');
const nodeProcess = require('process')

const { stdin: input, stdout: output } = nodeProcess;
const rl = readline.createInterface({ input, output });

const ROOT_PATH = "./";

const renameFiles = (oldNameProj, newNameProj) => {
  fs.readdir(ROOT_PATH, (_, items) => {

    const fileList = items.filter((item) => item.includes(oldNameProj))

    console.log(fileList);

    fileList.map((item) => {
      const file = ROOT_PATH + item;
      const newNameFile = item.replace(oldNameProj, newNameProj);

      fs.rename(file, item.replace(item, newNameFile), (err) => {
        if (err) throw err; // не удалось переименовать файл
        console.log('Файл успешно переименован');
      });

    })

  });
}

// main
(async function () {
  // получили старое название файла
  const oldNameProj = await new Promise(resolve => {
    rl.question("Старое название файла: ", resolve)
  })
  // получили новое название файла
  const newNameProj = await new Promise(resolve => {
    rl.question("Новое название файла: ", resolve)
  })

  rl.close();

  renameFiles(oldNameProj, newNameProj)

})()