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
    createdAt: "2023-02-05",
    updatedAt: "2024-02-05",
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
const mySocketOptions = {
    isServer: true,
    // 31개 쓰는건 너무 가혹해
    // server: "ASDfsdf" as unknown as Server,
    // session: "SAdfds" as unknown as Buffer,
    // requestOCSP: true,
    // ca: "sdfa",
    // cert: "asdfdfd",
};
const openState = "open";
const readOnlyState = "readOnly";
const closedState = "closed";
const allStatesExceptClosed = [
    "opening",
    "open",
    "readOnly",
    "writeOnly",
]; // ✅
// const iShouldntCompile: NotClosed[] = [
//   "opening",
//   "open",
//   "readOnly",
//   "writeOnly",
//   "closed",
// ]; // ❌
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
/*
    8. process 모듈에서 MemoryUsage를 import하고 모든 프로퍼티를 선택적으로 전환하세요.
    그런 후, MemoryUsage의 프로퍼티 중 2개를 사용해보세요.
*/
// // process 모듈에서 안 내보냄. NodeJS 전역에 있음.
// import { MemoryUsage } from "process";
const memoryUsage = {
    rss: 456,
    heapTotal: 123,
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
