# AI（辅助）编程工具概览

目前主流的 AI 编程工具主要有两种形态：可以集成至现有 IDE 的插件和独立的 IDE。本文将从这两种形态展开介绍一些常见的 AI 辅助编程工具。

## 插件

### GitHub Copilot <Badge type="tip" text="推荐" /> <Badge type="warning" text="闭源" /> <Badge type="warning" text="基础免费" /> <Badge type="tip" text="教育用途免费" /> <Badge type="tip" text="开源用途免费" /> <Badge type="warning" text="需申请认证" />

::: info
适用语言：几乎全部

适用 IDE/编辑器：VS Code、VS、JetBrains IDEs、Xcode 等

官方网站：https://copilot.github.com/
:::

GitHub Copilot 是由 GitHub 和 OpenAI 合作开发的一款 AI 编程助手，旨在通过自动代码生成功能来提升开发者的编码效率和质量。自2021年10月正式推出以来，GitHub Copilot 已经成为了众多开发者日常工作中不可或缺的一部分，尤其是在提高编码速度、减少重复性劳动和学习新编程语言或框架方面表现尤为突出。

::: tip
2024 年 12 月 19 日更新：GitHub Copilot 现已支持免费使用，使用政策为每月 2000 条代码建议、50 条 Copilot Chat 消息，支持 Claude 3.5 Sonnet 或 GPT-4o 模型。
:::

::: warning 教育认证申请
申请 GitHub 校园认证需要提供外币卡（Visa、MasterCard 等）或 PayPal 账号，银联卡无法绑定。
:::

::: tip 开源认证申请
GitHub Copilot 不需要单独申请开源认证。直接选择试用 GitHub 便会根据账户贡献活跃度等信息自动开放 Copilot 功能。（也可能 GitHub 评估后选择不开放）
:::

### CodeGeeX <Badge type="danger" text="不推荐" /> <Badge type="tip" text="开源" /> <Badge type="tip" text="免费" />

::: info
适用语言：几乎全部

适用 IDE/编辑器：VS Code、VS、JetBrains IDEs、HBuilderX 等

官方网站：https://codegeex.cn/
:::

智谱清言开发，功能较全，模型太蠢。

### 通义灵码 <Badge type="danger" text="不推荐" /> <Badge type="tip" text="开源" /> <Badge type="tip" text="免费" />

::: info
适用语言：几乎全部

适用 IDE/编辑器：VS Code、JetBrains IDEs 等

官方网站：https://tongyi.aliyun.com/lingma/
:::

阿里云开发，功能较全，模型太蠢。

### 文心快码 <Badge type="danger" text="不推荐" /> <Badge type="warning" text="闭源" /> <Badge type="tip" text="免费" />

::: info
适用语言：几乎全部

适用 IDE/编辑器：VS Code、JetBrains IDEs 等

官方网站：https://comate.baidu.com/
:::

百度开发，功能不全，模型也蠢。

### MarsCode <Badge type="warning" text="闭源" /> <Badge type="tip" text="免费" />

::: info
适用语言：几乎全部

适用 IDE/编辑器：VS Code、JetBrains IDEs

官方网站：https://marscode.cn/
:::

字节开发，功能较少，界面有 bug，剩下的没仔细试，估计模型也不聪明。

## 独立 IDE

### Cursor <Badge type="tip" text="推荐" /> <Badge type="warning" text="闭源" /> <Badge type="tip" text="基础免费" />

::: info
适用语言：几乎全部

官方网站：https://www.cursor.com/
:::

Cursor 是一款集成了先进语言模型（LLM）如 GPT-4 和 Claude 3.5 的智能代码编辑器，旨在为开发者提供高效的编程辅助。它不仅仅是一款代码编辑工具，更是一个集成了人工智能技术的强大开发平台，能够显著提高开发者的生产力和代码质量。Cursor 的设计理念是将 AI 辅助编程与传统的 IDE（集成开发环境）功能相结合，为用户提供一个更加智能化的编程体验。

<video src="./overview/cursor.mp4" controls></video>

::: tip
这个项目很能代表我对独立 IDE 这种形态的看法——看起来，它和 VS code 加插件没啥区别；实际上，它也基于 VS code 开发……

~~我为什么不用 VS code 加插件呢？~~

红豆泥私密马赛，我检讨，我道歉，在没有 GitHub Copilot 的情况下，这就是在国内能免费用到的最强工具。
:::

### WindSurf <Badge type="tip" text="推荐" /> <Badge type="warning" text="闭源" /> <Badge type="tip" text="基础免费" />

::: info
适用语言：几乎全部

官方网站：https://codeium.com/windsurf
:::

使用体验基本类似 Cursor，有独特的 Agent 功能，支持 AI 自主决策终端调用。

::: tip
会员试用期间可使用 Cursor 同款模型，可尝试删除账号重新注册以继续试用。
:::

### bolt <Badge type="warning" text="闭源" /> <Badge type="tip" text="基础免费" />

::: info
适用语言：Web

官方网站：https://bolt.new/
:::

Bolt.new 是一款由 StackBlitz 开发的先进全栈 Web 开发平台，它集成了最前沿的人工智能技术与 WebContainers 技术，为用户提供了一个强大的工具来创建、编辑、运行和部署全栈 Web 应用程序，这一切都可以在浏览器中完成，无需任何本地开发环境或配置。

::: tip Congratulations!
下面，我们会以 CodeGeeX 为例介绍在 VS Code/JetBrains IDEs 中安装、配置和使用 AI 编程工具的方法。
:::
