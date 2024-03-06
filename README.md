# Strip Markdown

GitHub Action for stripping markdown.

## Usage

```yaml
- id: text
  name: Strip Markdown
  uses: koistya/strip-markdown@v1
  with:
    content: "## Hello, World!"
- run: echo "${{ steps.text.outputs.content }}"
```

## License

The scripts and documentation in this project are released under the [MIT License](./LICENSE.txt).
