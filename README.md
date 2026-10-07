# Nairy Baghramian — 研究档案

这是一个可直接部署到 GitHub Pages 的静态交互式网页，内容以中文为主，保留英文关键标题、时间线交互、作品与展览筛选，以及指向原始来源的链接。

## 上传到 GitHub

1. 在 GitHub 新建一个仓库。
2. 将这个文件夹中的全部内容上传到仓库根目录：`index.html`、`styles.css`、`app.js` 和 `assets/`。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 选择 `main` 分支和 `/ (root)`，保存后等待 GitHub Pages 发布。

## 本地预览

在本文件夹中运行：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 文件说明

- `index.html`：页面结构、中文内容与原始来源链接
- `styles.css`：白色背景与红色档案视觉系统
- `app.js`：时间线切换、筛选和交互逻辑
- `assets/`：网站使用的图片资源

图片与文字的来源链接已经保留在页面中；如需修改内容，可直接编辑 `index.html` 和 `app.js`。
