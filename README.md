# Download Environment Variables

Used in **Github Action**

Download environment variables from a url which returns json, then save as a file

## Example

```
- name: Download Environment Variables
  uses: thezion/github-action-env-vars@master
  with:
      json-url: https://raw.githubusercontent.com/thezion/github-action-env-vars/master/dist/source.json
      preset: vue
      filename: .env.local
```