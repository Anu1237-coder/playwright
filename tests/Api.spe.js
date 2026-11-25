const { test, expect,request } = require('@playwright/test');
const usernamepwd={"userEmail":"jmausami@gmail.com","userPassword":"Ilrenu@358"};

test.beforeAll(() => {
    const contentpage=request.newContext();
    const response = contentpage.post("https://rahulshettyacademy.com/client/#/auth/login", { data: usernamepwd });
    expect(response.ok()).toBeTruthy();
    const Loginresponse=response.json();
});