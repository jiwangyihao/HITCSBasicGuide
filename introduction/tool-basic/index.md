# 常用现代编程工具概览

## 代码编辑器 & IDE

### 什么是代码编辑器？

你也许听说过，所谓的「编程/程序设计」又被称为写代码，相应的，「程序员」往往被称为「码农」。

『这里的「代码」，指的是一种特殊的文本文件，其中包含了一系列的指令，这些指令被计算机识别并执行，从而实现了我们所期望的功能。』

——也许你在许多地方看到过这样的介绍，但我觉得这看起来还是有点太神秘了。在我看来，「程序设计」就是设计一套由若干个步骤组成的自动化流程（比如，把大象装进冰箱只需要三步：打开冰箱门、把大象放进去、关上冰箱门），而「写代码」就是把这套流程用计算机能够理解的「语言」向计算机准确描述出来。这套语言/使用这样的语言书写的文字，就被称为代码。

而「代码编辑器」，就是用来编辑这些代码（或者说，仅仅是文字）的工具。它们通常提供了一些便捷的功能，比如代码高亮、自动补全、代码折叠等，以帮助程序员更高效地书写代码。

这些功能里有一些看起来很直观，比如自动补全，另一些则看起来有点不明所以，比如代码折叠。不过，不用担心，在后续的体验中，你会逐渐理解这些功能的作用。

::: tip
不要给自己太大的负担，即使有些功能最后你也不知道有什么用，又怎么样呢？

这只能说明一件事：对你来说这个功能的设计是失败的，这软件就是不行，这东西就是没用，不是吗？

不要被工具绑架，更不要被工具吓到，偶尔遇到不好用的工具是正常的，这种时候只要痛骂他然后物色下一个好用的工具就好了（笑）

叠甲：每个人适合的工具可能各有不同，本指南中的好恶评价仅代表个人感受，纯主观勿杠（

当然，本指南中推荐的工具算是我个人认为还算好用的（（（
:::

### 那么，什么是 IDE？

IDE 是 Integrated Development Environment 的缩写，翻译过来就是「集成开发环境」。IDE 通常包含了代码编辑器、编译器、调试器等一系列开发工具，以帮助程序员更高效地进行软件开发。

一下子出现了许多不认识的词汇？在这一阶段，你只需要知道，IDE 是一种功能更加强大的开发工具，它包含了代码编辑器的所有功能，并且还提供了更多比如编译、调试等功能。通常来说，IDE 是针对某一种编程语言或者某一种开发环境进行优化的，使用对应语言的 IDE 往往可以极大简化环境配置流程，提高开发效率。

### 常见的代码编辑器 & IDE

#### Visual Studio Code <Badge type="tip" text="推荐" /> <Badge type="info" text="代码编辑器" /> <Badge type="tip" text="开源" /> <Badge type="tip" text="免费" />

::: info
适用语言：几乎全部

推荐语言：所有不需要编译器/额外配置环境的语言（比如 Python、JavaScript、TypeScript 等）

适用人群：喜欢 DIY、自定义的开发者

官方网站：https://code.visualstudio.com/
:::

Visual Studio Code 是由微软开发的一款开源代码编辑器，它支持几乎所有主流的编程语言，拥有丰富的插件生态，可以帮助你更高效地进行软件开发。

VS Code 的优点在于：

- 丰富的插件生态，可以满足各种需求
- 轻量级，启动速度快
- 支持多种操作系统
- 内置 Git 支持
- 支持远程开发

缺点：

- 过多功能需要通过插件手动配置，对初学者不够友好

::: tip
需要指导？请查阅 [Visual Studio Code 使用指南](code-editor-ide/vscode)
:::

#### JetBrains 系列 <Badge type="tip" text="推荐" /> <Badge type="info" text="IDE" /> <Badge type="tip" text="部分开源" /> <Badge type="warning" text="部分收费" /> <Badge type="tip" text="教育用途免费" /> <Badge type="tip" text="开源用途免费" /> <Badge type="warning" text="需申请许可证" />

::: info
适用语言：C/C++、Java/Kotlin、Python、Web、Rust、Go、.Net 等

推荐语言：所有适用语言

适用人群：初学者、喜欢开箱即用的专业开发者

官方网站：https://www.jetbrains.com/
:::

JetBrains IDE 内置了先进的代码辅助功能，例如智能代码补全、实时错误检测、代码重构等，这些都是提高开发效率的关键特性。此外，这些 IDE 还支持多种版本控制系统，如 Git、Mercurial 和 Subversion，使得团队协作变得更加顺畅。对于追求更高开发效率的开发者而言，JetBrains IDEs 提供了大量的插件，这些插件可以进一步增强 IDE 的功能，满足个性化的工作流程需求。

JetBrains 的 IDE 优点在于：

- 提供多种语言的自动环境配置
- 丰富的功能，包括代码提示、自动补全、调试等
- 丰富的插件生态
- 支持多种操作系统
- 支持远程开发

缺点：

- 需要单独申请许可证

JetBrains 的产品包括：

- IntelliJ IDEA：Java/Kotlin 开发
- PyCharm：Python 开发
- WebStorm：Web 开发
- CLion：C/C++ 开发
- GoLand：Go 开发
- Rust：Rust 开发
- Rider：.Net 开发

::: tip
JetBrains 的产品对教育和开源项目提供免费许可证，你可以在官网申请免费许可证。

从注册申请教育许可到安装配置一条龙！敬请查阅 [JetBrains IDEs 使用指南](code-editor-ide/jetbrains)
:::

#### Visual Studio <Badge type="info" text="IDE" /> <Badge type="tip" text="部分开���" /> <Badge type="warning" text="部分收费" /> <Badge type="tip" text="教育用途免费" />

::: info
适用语言：C/C++、C#、.Net 等

官方网站：https://visualstudio.microsoft.com/
:::

Visual Studio 是由微软开发的一款 IDE，它支持 C/C++、C#、.Net 等语言，拥有丰富的功能，可以帮助你更高效地进行软件开发。

::: tip
使用 C/C++ 的一些课程/图形库可能会要求使用 Visual Studio 进行开发，你可以在官网下载 Visual Studio Community 版本，这是一款免费的版本，可以满足你的学习需求。
:::

#### Sublime Text <Badge type="info" text="代码编辑器" /> <Badge type="warning" text="收费" />

::: info
适用语言：几乎全部

官方网站：https://www.sublimetext.com/
:::

Sublime Text 是一款轻量级的代码编辑器，它拥有类似 IDE 的功能，但是没有 IDE 那么复杂。Sublime Text 支持几乎所有主流的编程语言，拥有丰富的插件生态，可以帮助你更高效地进行软件开发。

Sublime Text 的优点在于：

- 轻量级，启动速度快
- 丰富的插件生态
- 支持多种操作系统

缺点：

- 收费
- 需要另行配置开发环境

#### Atom <Badge type="info" text="代码编辑器" /> <Badge type="danger" text="已停止维护" />

::: danger
Atom 是一款由 GitHub 开发的开源代码编辑器，但是自 2019 年以来已经停止维护，不再推荐使用。
:::

#### Notepad++ <Badge type="info" text="代码编辑器" /> <Badge type="tip" text="开源" /> <Badge type="tip" text="免费" />

::: info
适用语言：几乎全部

官方网站：https://notepad-plus-plus.org/
:::

Notepad++ 是一款轻量级的代码编辑器，它支持几乎所有主流的编程语言，可以帮助你更高效地进行软件开发。

::: danger
该软件作者长期支持台独势力，不推荐使用
:::

#### Code::Blocks <Badge type="info" text="IDE" /> <Badge type="tip" text="开源" /> <Badge type="tip" text="免费" />

::: info
适用语言：C/C++

官方网站：http://www.codeblocks.org/
:::

Code::Blocks 是一款轻量级的 C/C++ IDE，它可以帮助你更高效地进行 C/C++ 软件开发。

:::warning
不推荐理由：Code::Blocks 的界面和功能相对较为陈旧，不够现代化。（简而言之，丑）
:::

#### Dev-C++ <Badge type="info" text="IDE" /> <Badge type="tip" text="免费" />

::: info
适用语言：C/C++

官方网站：https://sourceforge.net/projects/orwelldevcpp/
:::

Dev-C++ 是一款轻量级的 C/C++ IDE，它可以帮助你更高效地进行 C/C++ 软件开发。

:::warning
不推荐理由：Dev-C++ 的界面和功能相对较为陈旧，不够现代化。（简而言之，丑）
:::

## 版本控制

### 什么是版本控制？

你可能有过这样的经历：

- xxxx-初稿.doc
- xxxx-修订.doc
- xxxx-最终.doc
- xxxx-最终-修订.doc
- xxxx-最终-修订-最终.doc
- xxxx-最终-修订-最终-最终.doc
- xxxx-打死我也不改.doc
- xxxx-真的最终.doc
- ……

这种文件命名方式，是不是让你感到熟悉？这种方式虽然看起来很直观，但是随着文件的不断修改，文件名会变得越来越长，越来越难以管理。

版本控制系统（Version Control System，VCS）可以帮助你更好地管理文件的版本，它可以记录文件的修改历史，能够随时回滚到任意一个历史版本，还可以协同多人进行文件的编辑。

### 初学者应该学习版本控制吗？

版本控制系统是每一个程序员都应该掌握的技能，它可以帮助你更好地管理代码，提高代码的质量，提高团队协作效率。

但对于初学者来说，暂时不使用版本控制系统也是可以的，因为你的代码量可能并不大，也没有多人协作的需求。但是，当你的代码量逐渐增大，或者需要和他人一起进行项目开发时，版本控制系统就变得尤为重要了。

### Git？SVN？

版本控制系统有很多种，比如 Git、SVN、Mercurial 等。其中，Git 是目前最流行的版本控制系统，它是由 Linux 之父 Linus Torvalds 开发的一款分布式版本控制系统，拥有强大的功能和丰富的生态。

Git 官网：https://git-scm.com/

SVN 是另一种版本控制系统，它是集中式版本控制系统，相对于 Git，SVN 的功能较为简单，但是在某些场景下仍然有一定的优势。

::: tip
在学习和工作中，你可能会遇到 Git 和 SVN 两种版本控制系统，建议你优先学习 Git，因为它是目前最流行的版本控制系统，也是大多数公司和开源项目所使用的版本控制系统。

我们下面会主要介绍 Git 的一些相关工具，有关 Git 的具体使用教程请参见（敬请期待）。
:::

### 代码托管平台

代码托管平台是一个用于存储、管理和共享代码的平台，它通常提供了 Git/SVN 仓库、Issue 跟踪、Wiki 等功能，可以帮助团队更好地协作开发。

常见的代码托管平台有：

- [GitHub](https://github.com)：最大的开源代码托管平台
- [GitLab](https://gitlab.com)：功能强大的自托管代码托管平台
- [Gitee](https://gitee.com)：国内的代码托管平台
- [Coding](https://coding.net)：国内的代码托管平台
- [Bitbucket](https://bitbucket.org)：提供私有仓库的代码托管平台

你可以根据自己的需要选择适合自己的代码托管平台。

### Git 图形化客户端

Git 是一款强大的版本控制系统，但是对于初学者来说，使用 Git 的命令行操作可能会有一定的难度。为了更方便地使用 Git，你可以使用一些图形化客户端，这些客户端通常提供了可视化的操作界面，可以帮助你更轻松地管理 Git 仓库。

#### GitHub Desktop <Badge type="tip" text="推荐" /> <Badge type="info" text="免费" />

::: info
适用平台：GitHub

官方网站：https://desktop.github.com/
:::

GitHub Desktop 是 GitHub 官方推出的一款图形化客户端，它可以帮助你更方便地管理 Git 仓库，进行代码提交、分支管理等操作。

GitHub Desktop 的优点在于：

- 界面简洁，易于上手
- 支持多种操作系统
- 支持 GitHub 的（几乎）所有功能

缺点：

- 仅支持 GitHub，不支持其他代码托管平台

#### VS Code Git Extension <Badge type="tip" text="推荐" /> <Badge type="info" text="免费" />

::: info
适用平台：GitHub、GitLab、Gitee 等

官方网站（随 VS code 附带安装）：https://code.visualstudio.com/
:::

VS Code Git Extension 是 VS Code 内置的 Git 插件，它可以帮助你更方便地管理 Git 仓库，进行代码提交、分支管理等操作。

VS Code Git Extension 的优点在于：

- 与 VS Code 高度集成，无需额外安装
- 支持多种代码托管平台

缺点：

- 功能相对简单，不如 GitHub Desktop 功能丰富

#### JetBrains IDE Git Integration <Badge type="tip" text="推荐" /> <Badge type="info" text="免费" />

::: info
适用平台：GitHub、GitLab、Gitee 等

官方网站（随 JetBrains IDE 附带安装）：https://www.jetbrains.com/
:::

JetBrains IDE Git Integration 是 JetBrains IDE 内置的 Git 插件，它可以帮助你更方便地管理 Git 仓库，进行代码提交、分支管理等操作。

JetBrains IDE Git Integration 的优点在于：

- 与 JetBrains IDE 高度集成，无需额外安装
- 支持多种代码托管平台
- 比 VS Code Git Extension 功能更丰富

#### TortoiseGit <Badge type="info" text="免费" /> <Badge type="info" text="Windows only" />

::: info
适用平台：GitHub、GitLab、Gitee 等

官方网站：https://tortoisegit.org/
:::

TortoiseGit 是一款 Windows 平台上的 Git 图形化客户端，它与 Windows 资源管理器高度集成，可以帮助你更方便地管理 Git 仓库，进行代码提交、分支管理等操作。

::: tip Congratulations!
下面，我们会介绍推荐的两款代码编辑器/IDE 的安装、配置和使用方法。
:::