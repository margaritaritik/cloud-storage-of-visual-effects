Разработка веб-приложения для хранения визуальных эффектов на CSS JS HTML
Прототип:https://www.figma.com/file/oMf9MDvo5lDQcj7mGAo334/Development-of-a-web-application-for-editing%2C-adding%2C-discussing-visual-effects?node-id=89%3A72

Функциональные требования:

1) А1. Регистрация на сайте 
1. Пользователь должен перейти в окно регистрации 
2. Пользователь должен ввести логин 
a. Система должна проверить Логин. 
i. Не может быть несколько пользователей с одинаковыми логинами
ii. Логин может быть только на английском языке
iii. Логин не может начинаться с цифры или специального символа
3. Пользователь должен ввести почту
4. Пользователь должен ввести пароль
a. Система должна проверить пароль
i. Не менее 8 символов
ii. Не может содержать часть логина или почты
iii. Должен содержать как цифры, так и буквы
5. Пользователь должен подтвердить пароль
a. Система должна сравнить пароль и подтвержденный пароль
i. Если они разные система выведет сообщение об ошибке 
6. Пользователь должен нажать на кнопку регистрации
a. Система проверяет есть ли уже аккаунты с почтой указанной пользователем	
i. Если да, то система выводит сообщение о том, что почта уже была использована при регистрации
ii. Если нет, то система выводит сообщение о том, что на почту отправлено сообщение, в котором нужно подтвердить личность
1. Если пользователь не подтверждает свою личность, то регистрация не осуществляется 


2) А2. Вход в систему зарегистрированного пользователя 
1. Пользователь должен перейти в окно входа
2. Пользователь должен ввести логин
3. Пользователь должен ввести пароль 
4. Пользователь должен подтвердить, что он не робот
5. Пользователь должен нажать на кнопку «Войти»
a. Система должна проверить, что пользователь не робот
b. Система должна проверить логин и пароль в БД
i. Если все верно, система должна перенаправить пользователя на главную страницу сайта под своим аккаунтом
ii. Если нет в БД этого аккаунта, то система выводит сообщение об ошибке
c. Система должна проверить админ это или пользователь
i. Если администратор, то у него расширенные возможности:
1. изменять дизайн сайта
2. просматривать жалобы на курсы
3. отвечать пользователям на жалобы через почту
4. удалять отзывы
5. обновлять данные 
d. Система проверяет, подтвердил ли пользователь, что он не робот Google Captcha
i. Если пользователь не подтвердил, то вход не возможен
e. Система должна перенаправить пользователя на главную страницу сайта под своим аккаунтом
6. Пользователь нажимает ссылку «вы забыли логин или пароль?»
a. Система должна перенаправить пользователя на страницу восстановления пароля 

 
3) А3. Восстановление пароля
1. Пользователь должен перейти в окно восстановления пароля
2. Пользователь должен ввести почту 
3. Пользователь должен нажать на кнопку отравить код
a. Система отправляет код на эту почту
4. Пользователь должен ввести код
a. Система должна проверить правильный ли это код
1. Если код не верен, то пользователь не может поменять пароль 
a. Система выводит пользователю сообщение о неверном коде 
5. Пользователь должен ввести новый пароль
a. Система проверяет новый пароль с предыдущим
1. Если они совпадают, то система выводит пользователю предупреждение
b. Система должна проверить пароль
a. Не менее 8 символов
b. Не может содержать часть логина или почты
c. Должен содержать как цифры, так и буквы
6. Пользователь должен подтвердить новый пароль
a. Если пароли не совпадают, то система выводит предупреждение
7. Пользователь должен нажать на кнопку «войти»
a. Система изменяет пароль пользователя
b. Система перенаправляет пользователя на главную страницу сайта под его аккаунтом

4) А4. Поиск визуального эффекта
1. Пользователь должен перейти на главную страницу сайта
2. Пользователь может найти визуальный эффект по названию, автору или описанию визуального эффекта
a. Система ищет визуальные эффекты по тому что ввел пользователь в поисковую строку
3. Пользователь может отсортировать визуальные эффекты
a. По тому используется ли в визуальном эффекте JS
b. По тому используется ли в визуальном эффекте препроцессор SASS
c. …
4. Пользователь может нажать на кнопку «искать» или нажать на пробел после ввода в поисковую строку
a. Система должна найти визуальные эффекты по тому что ввел пользователь в поисковую строку включая сортировку и фильтрацию
5. Пользователь может нажать на визуальный эффект
a. Система перенаправляет пользователя на страницу визуального эффекта 

5) А5. Создание репозитория 
1. Пользователь должен перейти на страницу личного кабинета
2. Пользователь может нажать на кнопку «создать репозиторий»
a. Система перенаправляет пользователя на страницу создания репозитория
3. Пользователь может ввести название визуального эффекта
4. Пользователь может ввести описание визуального эффекта 
5. Пользователь может импортировать файлы HTML, CSS, JS
a. Система проверяет данные файлов
1. Если данные верны, то пользователь может видеть отображение визуального эффекта 
2. Если данные не верны, то пользователь видит ошибку
6. Пользователь может опубликовать визуальный эффект


6) А6. Изменение визуального эффекта  
1. Пользователь должен перейти на страницу личного кабинета
2. Пользователь может нажать на кнопку изменения визуального
a. Система перенаправляет пользователя на страницу изменения репозитория
3. Пользователь может изменить название визуального эффекта
4. Пользователь может изменить описание визуального эффекта 
5. Пользователь может удалить файлы HTML, CSS, JS
6. Пользователь может импортировать файлы HTML, CSS, JS
a. Система проверяет данные файлов
1. Если данные верны, то пользователь может видеть отображение визуального эффекта 
2. Если данные не верны, то пользователь видит ошибку
7. Пользователь может опубликовать измененный репозиторий

7) А7. Изменение своих данных
1. Пользователь должен перейти на страницу личного кабинета
2. Пользователь может нажать на кнопку изменения своих данных
a. Система перенаправляет пользователя на страницу изменения своих данных
3. Пользователь может изменить свой логин
a. Система должна проверить Логин. 
1. Не может быть несколько пользователей с одинаковыми логинами
2. Логин может быть только на английском языке
3. Логин не может начинаться с цифры или специального символа
4. Пользователь может изменить свое описание 


