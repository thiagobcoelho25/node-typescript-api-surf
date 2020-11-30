//se utilizar import {...} from ... funcional apenas localmente, não Globalmente
declare namespace NodeJS {
    interface Global {
        testRequest: import('supertest').SuperTest<import('supertest').Test>
    }
}