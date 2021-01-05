# Download Environment Variables

Download environment variables from a url and save them in .env

```
            - uses: thezion/github-action-env-vars@master
              with:
                  json-url: 'https://raw.githubusercontent.com/thezion/github-action-env-vars/master/dist/source.json'
                  preset: 'vue'
                  filename: 'dist/actual-vue'
```