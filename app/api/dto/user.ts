export interface User {
  nickname: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  pointBalance: number; // 포인트
  isArtistRegistered: boolean; // 작가 등록 여부
  artistId?: string; // 작가 홈 아이디
  profileImage?: string; // 프로필 이미지
  email: string; // 이메일
  isNeededToUpdateNickname: boolean; // 닉네임 업데이트 필요 여부
}

export interface UserNoticeInfo {
  noticeExposure: {
    [id: string]: string; // 다시 보지 않기 누른 시각
  };
}

export interface MyInfoRes extends User {
  registrationChannel: "google"; // 회원가입 채널
  isAdvConsent: boolean; // 광고성 정보 수신 동의 여부
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRes {
  user: User;
  tokens: Tokens;
  isNeededToUpdateNickname: boolean; // 닉네임 업데이트 필요 여부
}

// 닉네임과 서비스 이용약관 동의 여부
export interface NicknameAndTermsPostReq {
  nickname: string;
  isOver14Consent: boolean; // 만 14세 이상 동의 여부
  isTermsOfServiceConsent: boolean; // 서비스 이용약관 동의 여부
  isPrivacyPolicyConsent: boolean; // 개인정보 처리방침 동의 여부
  isAdvConsent: boolean; // 광고성 정보 수신 동의 여부
}

// 사용자 정보 변경
export interface UserPatchReq {
  nickname?: string;
  profileImage?: string;
}

export interface UserAdvPatchReq {
  isAdvConsent: boolean;
}
