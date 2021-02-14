const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')

const questions = [
    {
        name: 'problemName',
        type: 'input',
        message: `Enter problem name:`,
    },
    {
        name: 'userName',
        type: 'input',
        message: `Enter your name:`,
    },

]

const rootDir = path.resolve(__dirname, '..')
const targetRootPath = path.resolve(rootDir, 'src')
const problemsRootPath = path.resolve(rootDir, 'scripts/templates/problems')

const createDirectoryFromTemplate = (templatePath, destPath) => {
    const filesToCreate = fs.readdirSync(templatePath)

    filesToCreate.forEach((file) => {
        const origFilePath = path.resolve(templatePath, file)
        const destFilePath = path.resolve(destPath, file)

        const stats = fs.statSync(origFilePath)
        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8')

            fs.writeFileSync(destFilePath, contents, 'utf8')
        } else if (stats.isDirectory()) {
            fs.mkdirSync(destFilePath)

            createDirectoryFromTemplate(
                origFilePath,
                destFilePath
            )
        }
    })
}

inquirer.prompt(questions).then(async ({ problemName, userName }) => {
    const userFolderName = userName.toLowerCase()

    const templatePath = path.resolve(problemsRootPath, problemName)
    const userDirPath = path.resolve(targetRootPath, userName)
    const destPath = path.resolve(userDirPath, problemName)

    if (!fs.existsSync(templatePath)) {
        console.log(`${problemsRootPath} problem not found`)
        return
    }

    if (fs.existsSync(destPath)) {
        console.log(`${dest} already exists.`)
        return
    }

    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath)
    }

    fs.mkdirSync(destPath)
    createDirectoryFromTemplate(
        templatePath,
        destPath,
    )
})
