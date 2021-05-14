# Culimary

Culimary is a tool to visualize and fine recipes based on json data. Filter by ingredient, type and name is available.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Data

Generated automatically by https://next.json-generator.com/ with the following script

```json
[
    {
        'repeat(50)': {
        id: '{{objectId()}}',
        isFavorite: '{{bool()}}',
        name(tags) {
          return tags.lorem(tags.integer(2, 5), "word");
        },
        type: '{{random("entré", "plat", "dessert")}}',
        location(tags) {
            const type = tags.random("livre", "web");
            return {
            type: type,
            detail: type === 'web' ? `${tags.lorem(1, 'word')}-${tags.lorem(1, 'word')}${tags.domainZone()}` : tags.lorem(3, 'word')
            };
        },
        ingredients: [
            {
                'repeat(3, 5)': '{{random("courgette", "tomate", "tofu", "pamplemousse", "fenouil", "choux-fleur", "chocolat", "riz", "courge", "maïs")}}'
            }
        ]
        }
    }
]
```
