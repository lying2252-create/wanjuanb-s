# Overrides

该目录用于后续高保真 UI 局部更新。

默认情况下，本地服务会把所有请求代理到线上系统，确保 1:1。

如果后续需要覆盖某个线上文件，可在本目录中放置同路径文件。例如：

- `overrides/css/custom.css`
- `overrides/js/custom.js`
- `overrides/index.html`

服务会优先返回 `overrides/` 中的同路径文件。没有覆盖文件时，继续使用线上原始资源。

