const gulp = require("gulp");
const log = require("fancy-log");
const path = require("path");
const { exec, execSync } = require("child_process");
require("colors");

const serverEntrypoint = path.resolve(__dirname, "server", "server.js");
const serverWatchArea = path.resolve(__dirname, "server", "**", "*.js");
const clientEntrypoint = path.resolve(__dirname, "app", "webpack.config.js");
const clientWatchArea = path.resolve(__dirname, "app", "webpack.config.js");
const webpackDevServerBin = path.resolve(
  __dirname,
  "app/node_modules/webpack-dev-server/bin/webpack-dev-server.js"
);

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
    execSync(`killall ${proc.pid}`);
  };
}

function runNode(cmd, outputOptions) {
  proc = exec(cmd);
  routeOutput(proc, outputOptions);
  return destroyProcessClosure(proc);
}

function runWatch(watchGlob, cmd, outputOptions = {}) {
  let killNode;

  return gulp.watch(
    serverWatchArea,
    {
      ignoreInitial: false,
      queue: false
    },
    async () => {
      if (killNode) {
        killNode();
        killNode = undefined;
      } else
        log(
          `
          Output Color Key
            Output: ${outputOptions.out || "green"}
            Error: ${outputOptions.error || "red"}
        `[outputOptions.log || "blue"]
        );

      log(`-- Starting: ${cmd} --`[outputOptions.log || "blue"].bold);
      killNode = runNode(cmd, outputOptions);
    }
  );
}

gulp.task("server", () =>
  runWatch(serverWatchArea, `node ${serverEntrypoint}`)
);

gulp.task("client", () =>
  runWatch(
    clientWatchArea,
    `cd app && node ${webpackDevServerBin} --config ${clientEntrypoint} --mode development`,
    {
      out: "bgBlack",
      error: "yellow",
      log: "cyan"
    }
  )
);

gulp.task("dev", gulp.parallel("server", "client"));
