/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Suspense를 위한 Promise  함수
 * @description
 * 주어진 Promise를 감싸서 Suspense 컴포넌트와 함께 사용할 수 있도록 상태 관리 기능을 제공
 * Promise의 상태가 `pending`인 경우, Suspense는 해당 Promise가 완료될 때까지 렌더링을 중단함
 *
 * @param {Promise<any>} promise - 감싸야 할 Promise 객체
 * @returns {Object} - 상태에 따라 결과값을 반환하거나 에러/Promise를 던지는 객체
 * @throws {Promise | any} - 상태가 `pending`일 경우 Promise를, `error`일 경우 에러를 던짐
 */
export const wrapPromise = (promise: Promise<any>) => {
  let status = "pending"; // Promise의 현재 상태
  let result: any; // Promise의 결과값 또는 에러
  const suspender = promise.then(
    async (res) => {
      // Promise가 성공적으로 완료된 경우
      status = "success";
      result = res; // 결과값 저장
    },
    (err) => {
      // Promise가 실패한 경우
      status = "error";
      result = err; // 에러 저장
    },
  );

  return {
    /**
     * 결과를 반환하거나 상태에 따라 예외를 던지는 메서드
     * @description
     * - 상태가 `pending`이면 Promise 객체(`suspender`)를 던짐
     *   => Suspense는 이 Promise가 완료될 때까지 기다림
     * - 상태가 `error`이면 저장된 에러를 던짐
     * - 상태가 `success`이면 저장된 결과값을 반환
     *
     * @returns {any} - Promise의 결과값 (성공 상태일 경우)
     * @throws {Promise | any} - Promise 객체(대기 중) 또는 에러(실패 상태일 경우)
     */
    get() {
      if (status === "pending") {
        throw suspender; // 대기 중인 Promise를 던짐
      } else if (status === "error") {
        throw result; // 에러를 던짐
      } else if (status === "success") {
        return result; // 결과값 반환
      }
    },
  };
};
