//import axios from "axios";
import axios from "./axios";

export function bookmarkInsert(contentId, userId, name) {
  console.log("입력받은 값 ");
  // 유저 정보 가져옴 id만 넘기면 됨
  //변수명 userId
  console.log("userId : " + userId);

  // 관광지 id 가져옴
  //변수명: contentId
  console.log("contentId : " + contentId);

  // 사용자가 입력한 이름을 받음
  //변수명 : name
  console.log("name : " + name);

  // 관광지 북마크 등록
  axios
    .post(`attraction/${contentId}/likeUp`, null, {
      params: {
        userId: userId,
        name: name
      }
    })
    .then(res => {
      console.log("res:" + res);
      console.log("북마크 등록 성공!");
      router.push("/likepage");
    })
    .catch(e => {
      console.log(e);
      console.log("북마크 등록 실패!");
      alert("북마크 등록 실패");
    });
}

export function bookmarkDelete(contentId, userId) {
  console.log("입력받은 값 ");
  //유저 정보 가져옴 id만 넘기면 됨
  //변수명 userId
  console.log("userId : " + userId);

  //관광지 id 가져옴
  //변수명: contentId
  console.log("contentId : " + contentId);

  //관광지 북마크에서 삭제함

  axios
    .post(`attraction/${contentId}/likeDown`, null, {
      params: {
        userId: userId
      }
    })
    .then(res => {
      console.log("res:" + res);
      console.log("북마크 해제 성공!");

      router.push("/likepage");
    })
    .catch(e => {
      console.log(e);
      console.log("북마크 해제 실패!");
      alert("북마크 해제 실패");
    });
}
