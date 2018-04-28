// let config = {
//     entry: {
//         'index':'./entryBuild/index.js',
//         'shop':'./entryBuild/shop.js'
//     },
//     resolve: {
//         extensions: [".js", ".json", ".jsx", ".css",".pcss"],
//     }
// };

// module.exports = config;

// 批量引入entry文件
const entry = require("./webpack.entry.conf");
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".pcss"],
    }
};
module.exports = config;