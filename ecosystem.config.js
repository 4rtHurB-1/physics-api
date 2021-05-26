module.exports = {
  apps : [{
      "name": "physics-api",
      "args": [
          "index.js"
      ],
      "script": "node",
      "max_memory_restart": "400M",
      "node_args": [],
      "exec_interpreter": "none",
      "exec_mode": "fork",
      "log_file": "logs.log"
  }],
};
