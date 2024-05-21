---
title: 4lch4.com Notes
menu:
  notes:
    name: 4lch4.com
    identifier: notes-development-4lch4.com
    parent: notes-development
    weight: 10
---

{{< note title="Alert Shortcodes" >}}

The following alerts are available in this theme.

{{< alert type="success" >}}
This is sample alert with `type="success"`.
{{< /alert >}}

{{< alert type="danger" >}}
This is sample alert with `type="danger"`.
{{< /alert >}}

{{< alert type="warning" >}}
This is sample alert with `type="warning"`.
{{< /alert >}}

{{< alert type="info" >}}
This is sample alert with `type="info"`.
{{< /alert >}}

{{< alert type="dark" >}}
This is sample alert with `type="dark"`.
{{< /alert >}}

{{< alert type="primary" >}}
This is sample alert with `type="primary"`.
{{< /alert >}}

{{< alert type="secondary" >}}
This is sample alert with `type="secondary"`.
{{< /alert >}}

{{< /note >}}

{{< note title="Image Shortcodes" >}}

#### A sample image without any attribute

{{< img src="/posts/shortcodes/boat.jpg" title="A boat at the sea" >}}

{{< vs 3 >}}

#### A sample image with `height` and `width` attributes

{{< img src="/posts/shortcodes/boat.jpg" height="400" width="600" title="A boat at the sea" >}}

{{< vs 3 >}}

#### A center aligned image with `height` and `width` attributes

{{< img src="/posts/shortcodes/boat.jpg" height="400" width="600" align="center" title="A boat at the sea" >}}

{{< vs 3 >}}

#### A image with `float` attribute

{{< img src="/posts/shortcodes/boat.jpg" height="200" width="500" float="right" title="A boat at the sea" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas lectus sed leo ultricies ultricies. Praesent tellus risus, eleifend vel efficitur ac, venenatis sit amet sem. Ut ut egestas erat. Fusce ut leo turpis. Morbi consectetur sed lacus vitae vehicula. Cras gravida turpis id eleifend volutpat. Suspendisse nec ipsum eu erat finibus dictum. Morbi volutpat nulla purus, vel maximus ex molestie id. Nullam posuere est urna, at fringilla eros venenatis quis.

Fusce vulputate dolor augue, ut porta sapien fringilla nec. Vivamus commodo erat felis, a sodales lectus finibus nec. In a pulvinar orci. Maecenas suscipit eget lorem non pretium. Nulla aliquam a augue nec blandit. Curabitur ac urna iaculis, ornare ligula nec, placerat nulla. Maecenas aliquam nisi vitae tempus vulputate.

{{< /note >}}

{{< note title="Video Shortcodes" >}}

`\{\{< video src="/videos/sample.mp4" >\}\}`

<!-- markdown-link-check-disable-next-line -->

Video by [Rahul Sharma](https://www.pexels.com/@rahul-sharma-493988) from [Pexels](https://www.pexels.com).

{{< /note >}}

{{< note title="Gist Shortcodes" >}}

## Sample

```markdown
> Remove the backslashes when actually using.
> \{\{< gist hossainemruz 4ad86c9b6378677e14eff12713e75e44 >\}\}
```

## <!-- <br/> -->

## Demo

{{< gist hossainemruz 4ad86c9b6378677e14eff12713e75e44 >}}

{{< /note >}}

{{< note title="Full Markdown Sample" >}}

## Other Elements — abbr, sub, sup, kbd, mark

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Emoji Rendering

```html
<p>
  <span class="nowrap">
    <span class="emojify">🙈</span>
    <code>:see_no_evil:</code>
  </span>
  <span class="nowrap">
    <span class="emojify">🙉</span>
    <code>:hear_no_evil:</code>
  </span>
  <span class="nowrap">
    <span class="emojify">🙊</span>
    <code>:speak_no_evil:</code>
  </span>
</p>
<br />
```

<p>
  <span class="nowrap">
    <span class="emojify">🙈</span>
    <code>:see_no_evil:</code>
  </span>
  <span class="nowrap">
    <span class="emojify">🙉</span>
    <code>:hear_no_evil:</code>
  </span>
  <span class="nowrap">
    <span class="emojify">🙊</span>
    <code>:speak_no_evil:</code>
  </span>
</p>
<br>

{{< /note >}}
