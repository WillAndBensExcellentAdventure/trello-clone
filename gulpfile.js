const gulp = require("gulp");
const log = require("fancy-log");
const path = require("path");
const { exec } = require("child_process");
require("colors");

const serverEntrypoint = path.resolve(__dirname, "server", "server.js");
const serverWatchArea = path.resolve(__dirname, "server", "**", "*.js");
console.log(serverWatchArea);

function routeOutput(proc, outputOptions) {
  proc.stdout.on("data", chunk =>
    process.stdout.write(chunk[outputOptions.out || "green"])
  );
  proc.stderr.on("data", chunk =>
    process.stdout.write(chunk[outputOptions.error || "red"])
  );
}

function destroyProcessClosure(proc) {
  return () => {
    proc.removeAllListeners();
    proc.kill();
  };
}

function runNode(path, outputOptions) {
  proc = exec(`node ${path}`);
  routeOutput(proc, outputOptions);
  return destroyProcessClosure(proc);
}

function runWatch(watchGlob, entry, outputOptions = {}) {
  let killNode;

  return gulp.watch(
    serverWatchArea,
    {
      ignoreInitial: false,
      queue: false
    },
    async () => {
      if (killNode) killNode();
      log(`-- Starting: ${entry} --\n`[outputOptions.log || "blue"]);
      log(
        `
        Output Color Key
          Output: ${outputOptions.out || "green"}
          Error: ${outputOptions.error || "red"}
      `[outputOptions.log || "blue"]
      );
      killNode = runNode(entry, outputOptions);
    }
  );
}

gulp.task("server", () => runWatch(serverWatchArea, serverEntrypoint));
