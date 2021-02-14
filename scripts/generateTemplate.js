const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')

const questions = [
    {
        name: 'problemName',
        type: 'input',
        message: `Enter problem name:`,
    },

]

const rootDir = path.resolve(__dirname, '..')
const problemsTemplatesPath = path.resolve(rootDir, 'scripts/templates/problems')
const masterTemplatePath = path.resolve(rootDir, 'scripts/templates/masterTemplate')

const getFixer = (newProblemName) => (contents) => contents.replace(/masterTemplate/g, newProblemName)
const createDirectoryFromTemplate = (templatePath, destPath, fixer) => {
    const filesToCreate = fs.readdirSync(templatePath)

    filesToCreate.forEach((file) => {
        const newFileName = fixer(file)
        const origFilePath = path.resolve(templatePath, file)
        const destFilePath = path.resolve(destPath, newFileName)
        console.log('from -> to', origFilePath, destFilePath)

        const stats = fs.statSync(origFilePath)
        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8')

            const fixedContents = fixer(contents)

            fs.writeFileSync(destFilePath, fixedContents, 'utf8')
        } else if (stats.isDirectory()) {
            fs.mkdirSync(destFilePath)

            createDirectoryFromTemplate(
                origFilePath,
                destFilePath,
                fixer
            )
        }
    })
}

inquirer.prompt(questions).then(async ({ problemName }) => {
    const destPath = path.resolve(problemsTemplatesPath, problemName)

    if (fs.existsSync(destPath)) {
        console.log(`${dest} already exists.`)
        return
    }

    fs.mkdirSync(destPath)
    createDirectoryFromTemplate(
        masterTemplatePath,
        destPath,
        getFixer(problemName)
    )
})
