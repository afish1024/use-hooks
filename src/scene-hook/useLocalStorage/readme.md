
useLocalStorage

将状态同步到本地存储，以便在页面刷新期间持续存在。用法与 useState 类似，不同之处在于我们传入本地存储密钥，以便我们可以在页面加载时默认为该值，而不是指定的初始值。

由于本地存储 API 在服务器呈现环境中不可用，因此我们会对其进行检查，以使 SSR 和 SSG 正常工作。typeof window !== "undefined"

- [use-persisted-state](https://github.com/donavon/use-persisted-state) - 一种在选项卡和浏览器窗口之间同步的更高级的实现。