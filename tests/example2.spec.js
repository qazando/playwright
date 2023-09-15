// @ts-check
const { test, expect } = require('@playwright/test');

test('Login Com sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click()
});

test('Login Com sucesso 1 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click()
});

test('Login Com sucesso 2', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click()
});

