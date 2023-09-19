import { defineConfig } from '@tarojs/cli';
const getConfig = require("@zyy/config/taroConfig/index")

const config = defineConfig({
  projectName: "lottery-tool",
  date: "2023-5-22",
});

module.exports = function (merge) {
  const value = getConfig(merge)
  // if (process.env.NODE_ENV === "development") {
  //   return merge({}, value, require("./dev"));
  // }
  // return merge({}, value, require("./prod"));
  return merge({}, value, config)
};
