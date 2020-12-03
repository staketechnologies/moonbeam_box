const { exec } = require("child_process");

const start = async () => {
  // Start Node
  exec(
    "docker run --rm -it -d --name plasm-node -p 9933:9933 -p 9944:9944 -p 9615:9615 staketechnologies/plasm-node --rpc-external --rpc-cors all --dev",
    (error, stdout, stderr) => {
      if (error) {
        if (error.message.includes("permission denied")) {
          console.log(
            `Connect: permission denied. Permission issues, try again with sudo`
          );
        } else {
          console.log(`Error: ${error.message}`);
        }
        return;
      }
      if (stderr) {
        console.log(`Error: ${stderr}`);
        return;
      }
      console.log(
        `Node has started - Endpoints: HTTP http://127.0.0.1:9933  WS ws://127.0.0.1:9944 - Container ID ${stdout.substr(
          0,
          12
        )} \n`
      );
    }
  );
};

module.exports = start;
