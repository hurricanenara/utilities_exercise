/* 모든 문제는 유틸리티 타입 사용 필수입니다. */
/* 모튤에서 불러오는 모든 타입들은 cmd + 클릭 또는 ctrl + 클릭으로 상세 조회 가능합니다. */

interface User {
  username: string;
  imgUrl: string;
}

interface Member extends User {
  lastVisited: string;
  viewCount: bigint;
  followers: User[];
  createdAt: string;
  updatedAt: string;
}

/*
    1. myProfile이 컴파일 되도록하세요.
    myProfile객체에 존재하는 모든 프로퍼티 필수
*/

const myProfile: Partial<Member> = {
  username: 'dobby',
  imgUrl: '',
  lastVisited: '1675085621467',
  viewCount: BigInt(102300),
  followers: [],
};

/*
    2. dobbyFollowers와 harryFollowers가 컴파일 되도록 하세요.
*/

type UserNameImgUrlArray = Pick<Member, keyof User>[];

const dobbyFollowers: UserNameImgUrlArray = [
  { username: 'harry', imgUrl: 'harry.jpg' },
];
const harryFollowers: UserNameImgUrlArray = [];

/*
    3. http 모듈에서 ClientRequestArgs를 import하고 host, headers, 그리고 method를 분리하세요.
*/

import { ClientRequestArgs } from 'http';

type ClientRequestHeadersAndHost = Pick<
  ClientRequestArgs,
  'host' | 'headers' | 'method'
>;

const clientRequest: ClientRequestHeadersAndHost = {
  method: 'GET',
  host: 'localhost',
  headers: { Connection: 'keep-alive' },
};

/*
    4. tls 모듈에서 TLSSocketOptions를 import하고 모든 프로퍼티를 필수적으로 전환하세요.
    전환한 후 mySocketOptions을 완성하세요.
*/
import { TLSSocketOptions } from 'tls';

type NoOptionalTLSSocketOptions = Required<TLSSocketOptions>;

const mySocketOptions: Pick<NoOptionalTLSSocketOptions, 'isServer'> = {
  isServer: true,
  // ...
};

/*
    5. net 모듈에서 SocketReadyState을 import하고 다음을 완성하세요. 새로운 타입 선언 금지.
*/
import { SocketReadyState } from 'net';

const openState: Extract<SocketReadyState, 'open'> = 'open';
const readOnlyState: Extract<SocketReadyState, 'readOnly'> = 'readOnly';
const closedState: Extract<SocketReadyState, 'closed'> = 'closed';

/*
    6. SocketReadyState를 사용해서 다음을 충족하는 타입을 완성하고 반영하세요.
*/

type MySocketReadyState = Exclude<SocketReadyState, 'closed'>;

const allStatesExceptClosed: MySocketReadyState[] = [
  'opening',
  'open',
  'readOnly',
  'writeOnly',
]; // ✅

// const iShouldntCompile: MySocketReadyState[] = [
//   'opening',
//   'open',
//   'readOnly',
//   'writeOnly',
//   'closed',
// ]; // ❌

/*
    7. 6번에서 완성 한 타입으로 다음을 충족하는 타입을 만드세요.
*/

const states: Record<MySocketReadyState, MySocketReadyState> = {
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

const memoryUsage: Partial<NodeJS.MemoryUsage> = {
  heapTotal: 10,
  heapUsed: 11,
  external: 12,
};

/*
    9. null과 undefined가 있는 현실적인 타입을 만들어보고, 만들어진 타입을 non-nullable 타입으로 전환하세요.
*/

type CustomType = number | number[] | undefined | null;
type NonNullableCustomType = NonNullable<CustomType>;

// const notNu: NonNullableCustomType = null;llNumber: NonNullableCustomType = 0;
// const isNull

/*
    10. 다음 함수들의 반환 타입을 유틸리티 타입을 사용해 정의해보세요.
*/

function getsUsername(user: User) {
  return user.username;
}

type TGetUserNameReturn = ReturnType<typeof getsUsername>;

// ---

function getUser(member: Member) {
  return { username: member.username, imgUrl: member.imgUrl } as User;
}

type TGetUserReturn = ReturnType<typeof getUser>;

// ---

function getFollowersAndViewCount(member: Member) {
  return {
    followers: member.followers,
    viewCount: member.viewCount,
  };
}

type TFollowerAndViewCountReturn = ReturnType<typeof getFollowersAndViewCount>;
