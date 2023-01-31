"use strict";
/* 모든 문제는 유틸리티 타입 사용 필수입니다. */
/* 모튤에서 불러오는 모든 타입들은 cmd + 클릭 또는 ctrl + 클릭으로 상세 조회 가능합니다. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myProfile = {
    username: 'dobby',
    imgUrl: '',
    lastVisited: '1675085621467',
    viewCount: BigInt(102300),
    followers: [],
};
const dobbyFollowers = [{ username: 'harry', imgUrl: 'harry.jpg' }];
const harryFollowers = [];
const clientRequest = {
    method: 'GET',
    host: 'localhost',
    headers: { Connection: 'keep-alive' },
};
const mySocketOptions = {
    isServer: true,
};
const openState = 'open';
const readOnlyState = 'readOnly';
const closedState = 'closed';
const allStatesExceptClosed = [
    'opening',
    'open',
    'readOnly',
    'writeOnly',
]; // ✅
const iShouldntCompile = [
    'opening',
    'open',
    'readOnly',
    'writeOnly',
    // 'closed',
]; // ❌
const states = {
    opening: 'opening',
    open: 'open',
    readOnly: 'readOnly',
    writeOnly: 'writeOnly',
    // closed: "closed", // ❌
};
/*
    8. process 모듈에서 MemoryUsage를 import하고 모든 프로퍼티를 선택적으로 전환하세요.
    그런 후, MemoryUsage의 프로퍼티 중 2개를 사용해보세요.
*/
const process_1 = __importDefault(require("process"));
const importMemoryUsage = process_1.default.memoryUsage();
const myMemoryUsage = {
    rss: 1,
    heapTotal: 3,
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
