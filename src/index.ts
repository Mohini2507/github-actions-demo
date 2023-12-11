import { getInput } from "@actions/core"

const inputName = getInput("name")

greet(inputName)

function greet (name: String) {
    console.log(`'Hello, ${name}!'`)
}
