"use strict";
/* 모든 문제는 유틸리티 타입 사용 필수입니다. */
/* 모튤에서 불러오는 모든 타입들은 cmd + 클릭 또는 ctrl + 클릭으로 상세 조회 가능합니다. */
Object.defineProperty(exports, "__esModule", { value: true });
/*
    1. myProfile이 컴파일 되도록하세요.
    myProfile객체에 존재하는 모든 프로퍼티 필수
*/
const myProfile = {
    username: "dobby",
    imgUrl: "",
    lastVisited: "1675085621467",
    viewCount: BigInt(102300),
    followers: [],
};
/*
    2. dobbyFollowers와 harryFollowers가 컴파일 되도록 하세요.
*/
const dobbyFollowers = [
    { username: "harry", imgUrl: "harry.jpg" },
];
const harryFollowers = [];
const clientRequest = {
    method: "GET",
    host: "localhost",
    headers: { Connection: "keep-alive" },
};
const net = require("net");
//* Required 유틸리티 타입 고찰
// type test = {
//   ttest?: undefined;
// };
// const tttest: Required<test> = {
//   ttest: undefined, //- 에러 ttest : never 이어서 undefined 를 쓸 수 없다
// };
//- 선택 옵션인 속성이 undefined 타입을 가질때 Required 유틸리티 타입을 쓰면 never 이 됨
const mySocketOptions = {
    isServer: true,
    server: net.Server,
    session: Buffer.from(""),
    requestOCSP: true,
    // ca: "string | Buffer | (string | Buffer)[]",
    // cert: "string | Buffer | Array<string | Buffer> | undefined",
    // sigalgs: "string | undefined",
    // ciphers: "string | undefined",
    // clientCertEngine: "string | undefined",
    // crl: "string | Buffer | Array<string | Buffer> | undefined",
    // dhparam: "string | Buffer | undefined",
    // ecdhCurve: "string | undefined",
    // honorCipherOrder: true,
    // key: "string | Buffer | Array<string | Buffer | KeyObject> | undefined",
    // privateKeyEngine: "string | undefined",
    // privateKeyIdentifier: "string | undefined",
    // maxVersion: "TLSv1.3",
    // minVersion: "TLSv1.3",
    // passphrase: "string | undefined",
    // pfx: "string | Buffer | Array<string | Buffer | PxfObject> | undefined",
    // secureOptions: 123, // Value is a numeric bitmask of the `SSL_OP_*` options
    // secureProtocol: "string | undefined",
    // sessionIdContext: "string | undefined",
    // ticketKeys: Buffer.from(""),
    // sessionTimeout: 123,
    // secureContext: net,
    // enableTrace: true,
    // requestCert: true,
    // ALPNProtocols: [],
    // SNICallback: net,
    // rejectUnauthorized: true,
};
const openState = "open";
const readOnlyState = "readOnly";
const closedState = "closed";
/*
    6. SocketReadyState를 사용해서 다음을 충족하는 타입을 완성하고 반영하세요.
*/
const allStatesExceptClosed = [
    "opening",
    "open",
    "readOnly",
    "writeOnly",
]; // ✅
const iShouldntCompile = [
    "opening",
    "open",
    "readOnly",
    "writeOnly",
    // "closed",
]; // ❌
/*
    7. 6번에서 완성 한 타입으로 다음을 충족하는 타입을 만드세요.
*/
const states = {
    opening: "opening",
    open: "open",
    readOnly: "readOnly",
    writeOnly: "writeOnly",
    // closed: "closed", // ❌
};
const memoryUsagee = {
    rss: 123,
    heapTotal: 456,
    // heapUsed: number,
    // external: number,
    // arrayBuffers: number
};
/*
    10. 다음 함수들의 반환 타입을 유틸리티 타입을 사용해 정의해보세요.
*/
function getsUsername(user) {
    return user.username;
}
// ---
function getUser(member) {
    return { username: member.username, imgUrl: member.imgUrl };
}
// ---
function getFollowersAndViewCount(member) {
    return {
        followers: member.followers,
        viewCount: member.viewCount,
    };
}
