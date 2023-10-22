import supertest from "supertest";

import config from "../user/config";
const {url} = config

const user = {

    login: (playload) => {
    return supertest(url)
    .post('/v2/user/login')
    .set ('Accept', 'application/json')
    .send(playload)
}
}
export default user