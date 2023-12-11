import { getInput } from "@actions/core"
import { context } from "@actions/github"
import { Context } from "@actions/github/lib/context"
import { type } from "os"

type GithubContext = typeof context;

const inputName = getInput("name")

greet(inputName, getRepoUrl(context));

function greet (name: String, repoUrl: String) {
    console.log(`'Hello, ${name}! You are running GitHub actions in ${repoUrl}'`)
}

function getRepoUrl({repo, serverUrl}: GithubContext): string {
    return `${serverUrl}/${repo.owner}/${repo.repo}`
}