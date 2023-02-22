# Project Name Generator

Генерация бессмысленных (но нейтральных) имен проектов ( и не только проектов).

За основу взят проект https://github.com/aceakash/project-name-generator и несколько переделан под себя.

Убраны зависимости, тащить для такой простой задачи lodash не хотелось бы. Добавлен еще один параметр в options. 

## Установка
`npm install project-name-generator --save`

## Начало работы
const generate = require('@tequila99/project-name-generator');

generate().dashed; // 'uptight-guitar'

generate().spaced; // 'grandiose clam'

generate().raw; // ['deluxe', 'grandmother']

generate({ number: true }).dashed; // 'disgraceful-temper-7794'

generate({ words: 4 }).raw; // ['tiny', 'crabby', 'wired', 'quicksand']

generate({ words: 4, number: true }).dashed; // 'breakable-judicious-luxuriant-tax-3931'

generate({ words: 2, alliterative: true }).spaced; // 'elegant experience'

generate({ words: 2, alliterative: true, capitalize: true }).spaced; // 'Elegant Experience'

## API
Модуль возвращает обычную функцию, `generate(options)`

Вызов `generate()` без параметров вернет объект:
```javascript
{
    raw: ['whispering', 'valley'],
    dashed: 'whispering-valley',
    spaced: 'whispering valley'
}
```

Аргумент `options` является объектом и содержит свойства

* **words** (number) - Количество возвращаемых слов (excluding number). Все слова кроме последнего - прилагательные. Значение по умолчанию **2**.
* **number** (boolean) - Признак генерации числового суффикса из 4 цифр. Диапазон 1 - 9999, включая границы. Значение по умолчанию **false**.
* **alliterative** (boolean) - Признак того, что все слова должны начинаться на одну и ту же букву. Значение по умолчанию **false**.
* **capitalize** (boolean) - Признак того, что все слова должны начинаться c заглавных букв. Значение по умолчанию **false**.

`generate({ words: 3 })` вернет:
```javascript
{
    raw: ['harmonious', 'endurable', 'substance'],
    dashed: 'harmonious-endurable-substance',
    spaced: 'harmonious endurable substance'
}
```

`generate({ words: 5, number: true, capitalize: true })` вернет:
```javascript
{
  raw: [ 'Exciting', 'Cooperative', 'Legal', 'Lackadaisical', 'Blood', 4099 ],
  dashed: 'Exciting-Cooperative-Legal-Lackadaisical-Blood-4099',
  spaced: 'Exciting Cooperative Legal Lackadaisical Blood 4099'
}
```

`generate({ words: 2, number: false, alliterative: true })` вернет:
```javascript
{
  raw: [ 'elegant', 'experience' ],
  dashed: 'elegant-experience',
  spaced: 'elegant experience'
}
```
## Тесты 

Тестов пока нет, но планируются

## TODO

В планах добавить другие алгоритмы для генерации бреда. Эльфийские имена, имена из Star Wars, возможно еще что-то