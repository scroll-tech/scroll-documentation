import { platform, exit, argv, stdout } from "process";
import { spawn } from "child_process";

const PORT = ":3000";
const IGNORE_FILES_PATH = `${process.cwd()}/scripts/ignoredfiles.txt`;

const server = spawn("npm", ["run", "preview"], {
  stdio: ["ignore", "pipe", "ignore"],
});

let external = false;
if (argv.includes("-e")) {
  external = true;
}

let output = "";
server.stdout.on("data", (data) => {
  const dataStr = data.toString();
  stdout.write(dataStr);
  output += dataStr;

  if (output.includes("use --host to expose")) {
    const program = getProgramName(platform);
    console.log(__dirname, process.cwd());

    const args = [PORT, "--skip-file", IGNORE_FILES_PATH];
    if (external) {
      args.push("-e");
      console.log("Also checking external links.");
    }

    const checker = spawn(program, args, {
      stdio: ["ignore", "pipe", "ignore"],
    });

    checker.stdout.on("data", (checkerData) => {
      stdout.write(checkerData.toString());
    });

    checker.on("exit", handleCheckerExit);
  }
});

function getProgramName(platform) {
  switch (platform) {
    case "linux":
      return "linkcheck-linux";
    case "darwin":
      return "linkcheck";
    default:
      return "linkcheck-win";
  }
}

function handleCheckerExit(code, other) {
  console.log("linkcheck finished");
  server.stdout.destroy();
  server.kill();
  checker.stdout.destroy();
  checker.kill();

  const result = code === null ? undefined : code;
  exit(result);
}
