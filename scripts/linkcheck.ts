import { platform, exit, argv, stdout } from "process"

import { spawn } from "child_process"

const server = spawn("npm", ["run", "preview"], {
  stdio: ["ignore", "pipe", "ignore"],
})

let external = false
if (argv[argv.length - 1] === "-e") {
  external = true
}

let output = ""
server.stdout.on("data", (data) => {
  stdout.write(data.toString())
  output = output + data.toString()
  if (output.indexOf("use --host to expose") !== -1) {
    let program
    if (platform === "linux") {
      program = "linkcheck-linux"
    } else if (platform === "darwin") {
      program = "linkcheck"
    } else {
      program = "linkcheck-win"
    }
    console.log(__dirname, process.cwd())
    const args = [":3000", "--skip-file", `${process.cwd()}/scripts/ignoredfiles.txt`]
    if (external) {
      args.push("-e")
      console.log("Also checking external links.")
    }
    const checker = spawn(program, args, {
      stdio: ["ignore", "pipe", "ignore"],
    })
    checker.stdout.on("data", (checkerData) => {
      stdout.write(checkerData.toString())
    })
    checker.on("exit", (code, other) => {
      console.log("linkcheck finished")
      server.stdout.destroy()
      server.kill()
      checker.stdout.destroy()
      checker.kill()
      let result
      if (code === null) {
        result = undefined
      } else {
        result = code
      }
      exit(result)
    })
  }
})
