const fs = require('fs');
const path = require('path');
const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

const bodyStart = index.indexOf('<body>') + 6;
const bodyEnd = index.lastIndexOf('</body>');
const bodyContent = index.substring(bodyStart, bodyEnd);

// Extract head (everything between <head> and </head>)
const headMatch = index.match(/<head>([\s\S]*?)<\/head>/);
let head = headMatch ? '<head>' + headMatch[1] + '</head>' : '<head></head>';

// Clean up dynamic asset version scripts and redundant tags
head = head.replace(/<script>\s*window\.__wanjuanAssetVersion[\s\S]*?<\/script>\s*/g, '');

let out = '<!doctype html>\n<html lang="zh-CN">\n' + head + '\n';
out += '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
out += '<title>数据监控 - 万卷</title>\n';
out += '<style>' + css + '</style>\n';
out += '</head>\n<body>\n';
out += bodyContent;
// Remove old dynamic script tags that reference external assets
out = out.replace(/<script src=[^>]+><\/script>\s*/g, '');
out = out.replace(/<script>\s*document\.documentElement\.dataset\.assetVersion[\s\S]*?<\/script>\s*<\/body>/, '</body>');
out += '<script src="./reference/iconpark-41579.js"><\/script>\n';
out += '<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"><\/script>\n';
out += '<script>' + js + '<\/script>\n';
out += '</body></html>';

fs.writeFileSync(path.join(__dirname, 'build.html'), out);
console.log('build.html size:', out.length, 'bytes');
