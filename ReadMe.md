<link rel="stylesheet" href="./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's Markdown Themes

[简体中文版文档](./ReadMe.zh-hans-cn.md)




## npm Page

<dl>
<dt>Package Name</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>Author</dt>
<dd><p>wulechuan (南昌吴乐川)</p></dd>
</dl>




## Introduction

This is a collection of themes that each
can be applied to shade any `Markdown` generated `HTML` contents.


### Why does this Tool Exist?

Simply for easier designing and generating more css files.

Why do we need a css file like any one of them generated by this tool?

Well, we developers and engineers work with markdown files all the time. And many of us, I guess like me, would like to customize the look and feel of those markdown files, more precisely, to customize the HTML contents rendered(generated) according to those markdown files.

**To modify the look and feel of HTML, we use css files.** Thats why.


### Well CSS Files. But Why Multiple?

Then why do we need so many css files?

First, we might need different themes for different ambient lighting conditions. Or even different feelings.

Second, well, we should know that a thing sounds easily to deal with, like reading a markdown file, is not simply in fact. We have different tools and environments.

- Some people prefer tools like [Typora](https://typora.io/).
- Others are used to use code editors like [Visual Studio Code](https://code.visualstudio.com).
- And there are often some other HTML files that are directly generated by some command line tools, in batch.

Different tools produce **different** HTML contents out of the **same** source markdown file.

So, in short, different lighting conditions, different tools or software environments need different css file.

> By the way, I also call these tools and environemts "scenarios" in general.



### How does this Work?

I designed a flex framework. Upon that there are several provided [stylus](http://stylus-lang.com/) files (`.styl`) as configurations. So that multiple versions of CSS can be produced in one go, each targeting different environment/scenario. For each scenario, we get 1 or 2 `.css` files. If 2 are produced, that's because one of them is a minified css. If only 1 css file is produced, then depending on the configuration, it can be either an uncompress one or a compress one.

In short, each `.styl` file is a configuration, targeting one scenario, and produces css file(s).

For examples:

- there is a `typora/typora-_default.styl`. And a css file named `wulechuan-styles-for-html-via-markdown--typora.default.css` is produced accordingly.

- there is a `firefox-addon/firefox-addon-_default.styl`. A css file named `wulechuan-styles-for-html-via-markdown--firefox-addon.default.css` is produced as well.

> Note that this tool, at present, only provide css files, plus a javascript file as a page part. This tool does **NOT** providing any functionality for converting a markdown file into an HTML file.
>
> The said javascript file is named `table-of-contents-behaviours.js`. And it's obviously for setting up the TOC.


### Are CSS Selectors Wrapped Safely?

Well, for the generated css files, there are two set of them. One is wrapped version, the other is non-wrapped version.

For wrapped, I mean css selectors like `a`, `ul`, `table`, `pre`, etc. are wrapped under a class name. By default the class name is `.markdown-article`.

> You can customize the class name differently for each and every scenario easily, in the source `.styl` file.

So for example, in the generated css file, you get css rules like these:

```css
.markdwon-article a     { /* declarations */ }
.markdwon-article ul    { /* declarations */ }
.markdwon-article table { /* declarations */ }
.markdwon-article pre   { /* declarations */ }
```

For non-wrapped, I mean css selectors like `a`, `ul`, `table`, `pre`, etc. are **NOT** wrapped. So in the generated css file, you always get rules like these:

```css
a     { /* declarations */ }
ul    { /* declarations */ }
table { /* declarations */ }
pre   { /* declarations */ }
```





## Examples

### Raw MarkDown

- [en-US.md](./docs/examples/source-markdown-files/en-US.md)

### Generated HTML File

- [HTML](./docs/examples/rendered/html/en-us.html)

### Rendered HTML Snapshots(Pictures)

- [Snapshot in a wide window (TOC collapsed)](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window-toc-collapsed.png)

- [Snapshot in a wide window (TOC expanded)](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window-toc-expanded.png)

- [Snapshot in a narrow window](./docs/examples/rendered/snapshots/en-US-example-in-a-narrow-window-toc-collapsed.png)





## Supported scenarios So Far

### Default scenario (For Standalone HTML Files)

Conceptly, it would be a standalone css file. **BUT** it has 4 variantions.

Why are there so many variantions?

Well, first, as you might have read above, there are variations of wrapped, and non-wrapped.

Then, I've also prepared some css rules for table of contents(TOC) parts. And the TOC parts are optional, thus more variations exist.

The markup structure of the said TOC parts are based on the output of [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right). For your references, the TOC markup structure is here:

```html
<html>
<body>
    <article class="markdown-article"> <!-- Additional wrapper desgined by me -->
        <!-- Anything generated by `markdown-it` goes here -->
    </article>
    <div class="markdown-article-toc-panel"> <!-- Additional wrapper desgined by me -->
        <nav class="table-of-contents"></nav> <!-- Everything generated by `markdown-it-toc-done-right`, including the nav tag itself -->
    </div>
    <button class="markdown-article-toc-toggling-button"></button> <!-- Additional button desgined by me -->
</body>
</html>
```


The said 4 variantions are:

1. **Selectors wrapped, no TOC**

    - css selectors are wrapped under the `.markdown-article` class name
    - css rules for table of contents parts are **excluded**

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.min.css`



2. **Selectors wrapped, with TOC**

    - css selectors are wrapped under the `.markdown-article` class name
    - css rules for table of contents parts are **included**,

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.min.css`

    > Don't forget to use the `table-of-contents-behaviours.js` together with either of these css files.



3. **Selectors non-wrapped, no TOC**

    - css selectors are **NOT** wrapped under any class name
    - css rules for table of contents parts are **excluded**

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.min.css`


4. **Selectors non-wrapped, with TOC**

    - css selectors are **NOT** wrapped under any class name
    - css rules for table of contents parts are **included**

    Files:
    
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.min.css`


    > Don't forget to use the `table-of-contents-behaviours.js` together with either of these css files.


---


### Microsoft Visual Studio Code Markdown preview Page

File:

- `./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css`

This one is specifically for the preview page generated inside Microsoft [Visual Studio Code](https://code.visualstudio.com).

> Usage:
>
> Add a raw HTML line (see below) into your markdown file, and then preview the markdown file in your VS Code as normal.
>
> The HTML line to embed into your markdown file looks like this:
>
> ```html
> <link rel="stylesheet" href="{YOUR_REAL_FILE_PATH_HERE}/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">
> ```

---


### The Firefox addon "Markdown Viewer Webext"

File:

- `./dist/css/wulechuan-styles-for-html-via-markdown--firefox-addon.default.css`

This one is specifically for the nice markdown processing addon of Firefox browser. The addon is named "[Markdown Viewer Webext](https://addons.mozilla.org/zh-CN/firefox/addon/markdown-viewer-webext/)".

> Usage:
>
> 1. **Make sure the said addon is installed already**
> 2. open your Firefox browser, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>a</kbd> to open the Addon Manager page of firefox.
> 3. Find the addon named "**Markdown Viewer Webext**" and click it. Then you are led to the info page of the addon.
> 4. Click the "**Options**" tab. Then you see the panel of options of the addon.
> 5. Scroll down a bit the panel and find the section of title "**Custom CSS**". Below the title you see a multi-lined text input box.
> 6. Copy the entire content of the `...--firefox-addon.default.css` file, and paste into the input box, replacing the existing content of the input box.
> 7. Click anywhere outside the input box. This simple action will make the new content take effects. And you see a green text saying "**SAVED**" for approval.
> 8. Open any markdown file with your Firefox browser and see the result.

> Note that the lookings of the TOC automatically generated by the addon is also customized by my css.

---



### As a Custom Theme of Typora

File:

- `./dist/css/wulechuan-styles-for-html-via-markdown--typora.default.css`

[Typora](https://typora.io/) is a really great tool for both reading and writing markdown files. And the app allows us users to customize the look and feel of the markdown inside Typora.

See the official doc on the subject: [Install Theme](http://theme.typora.io/doc/Install-Theme/)

---




## Design CSS for a New Theme

### Steps

1. Create a `.styl` file under `./source/stylus/markdown-style-scenarios/` folder, or a sub-folder if prefer.

2. In the newly created `.styl` file, write something like this:

    ```stylus
    //-------------------------------------------------
    // Set values for all variable.
    // Note:
    //     Any variable starts with underscore('_') is an optional variable.
    //     Others, required!
    //-------------------------------------------------

    codeBlocksThemeName = 'atom-one-dark'




    //-------------------------------------------------
    // Now all variables are set.
    // Let's import all parts.
    // Those parts will utilize
    // those variables and produce
    // customized css accordingly.
    //-------------------------------------------------

    @import '../to-assemble-all-parts'
    ```

3. Add a gulpjs task, so that the gulp tools will load the `.styl` you just created and edited, and produce css file(s) accordingly. To do so, open the `./gulpfile.esm.js/configs/stylus-tasks.js`, inside the Javascript file, you add an entry to the `Array` named `allSpecificOptions`. Save the Javascript file, of course.

4. Open a command line tool, like **bash**, **Git Bash**, **PowerShell**, **WSL**, or **Windows comannd**, then:
    - `cd` to the folder of this repository
    - type `npm run build` and press <kbd>enter</kbd> key
    - Wait for the program to end.

5. Checkout the `./dist/css` folder for your own css file.



### Code Blocks that are able to Colorize

See [code-blocks-theming.md](./docs/refs/code-blocks-theming.md).


### All Stylus Variables

See [stylus-variable-default-values.md](./docs/refs/stylus-variable-default-values.md).


## TODOS

- Consider introducing more stylus variables for theming.
- Gulp task for processing javascript files which will used in HTML files via Markdowns.
- More themes? More combinations?
- Typora TOC styling?



## License

WTFPL

> NOTE:
>
> I'm not an expert about license types. So I temporarily use WTFPL. But I guess this type of license might conflict with the ones used by those npm packages I'm utilizing.
