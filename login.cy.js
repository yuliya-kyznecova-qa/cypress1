describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');// зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru');// ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
         cy.get('#loginButton').click();// нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })

      })

      it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');// ввели верный логин
        cy.get('#pass').type('iLoveqastudio7');// ввели не верный пароль
        cy.get('#loginButton').click();// нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })
     
     it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('germandolnikov.ru');// ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
        cy.get('#loginButton').click();// нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        
        cy.get('#forgotEmailButton').click();// нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');// ввел почту для восстановления
        cy.get('#restoreEmailButton').click();// нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })

     it('Проверка, негативный кейс', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('germana@dolnikov.ru');// ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
        cy.get('#loginButton').click();// нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })

     it('проверка строчными буквами логина', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');// ввели логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
        cy.get('#loginButton').click();// нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })