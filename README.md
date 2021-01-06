# Download Environment Variables

Used in Github Action

Download environment variables from a url and save them in .env

## Example

```
- uses: thezion/github-action-env-vars@master
  with:
      json-url: 'https://raw.githubusercontent.com/thezion/github-action-env-vars/master/dist/source.json'
      preset: 'vue'
      filename: '.env.local'
```