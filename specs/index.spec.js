import supertest from "supertest";

describe('user', () => {
  describe('POST /v2/pet', () => {
    test('Add a new pet to the store', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .post('/v2/pet')
          .set('Accept', 'application/json')
          .send({"id": 12345, "status": "available"})
          expect(res.status).toEqual(200);
    })

    test('Update an existing pet', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .put('/v2/pet')
          .set('Accept', 'application/json')
          .send({"id": 12345, "status": "notavailable"})

      expect(res.status).toEqual(200);
    })
/*
    test('Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
      const res = await supertest('https://try.vikunja.io')
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({username: 'demo4', password: 'demo'})

      expect(res.status).toEqual(412);
      expect(res.body.code).toEqual(1011)
    })

    test('Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
      const res = await supertest('https://try.vikunja.io')
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({username: 'demo', password: 'demo3'})


      expect(res.status).toEqual(412);
      expect(res.body.code).toEqual(1011)
    })*/
  }) 
})