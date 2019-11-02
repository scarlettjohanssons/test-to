# test-Тестовая работа To Do List. При исполнени задания были использованы: Webpack, HTML, SASS, jQuery а также плагины Webpack.
Реализован поиск. Через фильтры не получилось. В to do list реализовано удаление, кнопка готовности. Редактирование реализовано криво. При нажатии на кнопку Create открывается pop up окно. В окне создание нового to do можно написат title description и можно выбрать приоритет. 
Для начала создал package.json - npm init -y
Установка node modules - npm install webpack webpack-cli --svae-dev
Для настройки Webpack, был создан файл webpack.config.js
Что бы Webpack понимал HTML использовал плагин. Для подключения npm i html-webpack-plugin --save-dev и провел настройки в webpack.config.js
Что бы Webpack понимал SASS использовал плагин. Для подключения npm install sass-loader node-sass webpack --save-dev и npm install style-loader css-loader --save-dev и провел настройки в webpack.config.js
Для jQuery плагин npm i jquery popper.js --save
