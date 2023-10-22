import supertest from "supertest";
import user from "./helper/user";
import config from "./user/config";

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
          .send({"status": "pending"})

      expect(res.status).toEqual(200);
    })

    test('Finds Pets by status', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .get('/v2/pet/findByStatus?status=pending')
          .set('Accept', 'application/json')
          .send({"status": "pending"})

      expect(res.status).toEqual(200);
    })

    test('Finds Pets by id', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .get('/v2/pet/12345')
          .set('Accept', 'application/json')
          .send({"id": 12345})

      expect(res.status).toEqual(200);
    })
  
    test('Place an order for a pet', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .post('/v2/store/order')
          .set('Accept', 'application/json')
          .send({"id": 6})

      expect(res.status).toEqual(200);
    })

    test('Find purchase order by ID', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .get('/v2/store/order/6')
          .set('Accept', 'application/json')
          .send({"id": 6})

      expect(res.status).toEqual(200);
    })

    test('Creates list of users with given input array', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .post('/v2/user/createWithArray')
          .set('Accept', 'application/json')
          .send([{"id": 12345, "username": "qwerty"}])

      expect(res.status).toEqual(200);
    })

    test('Get user by user name', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .get('/v2/user/qwerty')
          .set('Accept', 'application/json')
          .send([{"username": "qwerty"}])

      expect(res.status).toEqual(200);
    })

    test('Create user', async () => {
      const res = await supertest('https://petstore.swagger.io')
          .post('/v2/user')
          .set('Accept', 'application/json')
          .send({"id": 7,
          "username": "Peter",
          "firstName": "Ivan",
          "lastName": "Ivanov",
          "email": "123@ya.ru",
          "password": "qwerty123",
          "phone": "s8911122",
          "userStatus": 1})

      expect(res.status).toEqual(200);
    })
    test('Logs user into the system', async () => {
      const res = await user.login(config.credentials)
      expect(res.status).toEqual(200);
    })

  }) 
