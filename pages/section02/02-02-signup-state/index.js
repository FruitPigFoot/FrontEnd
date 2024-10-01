import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onClickSignUp(event) {
    console.log(email); //포장상태 확인
    console.log(password); //포장상태 확인
    //1.검증하기
    if (email.includes("@") === false) {
      // document.getElementById("myerror").innerText =  "이메일이 올바르지 않습니다. @가 없음!"; //옛날 방식
      setEmailError("이메일이 올바르지 않습니다! @가 없습니다!");
    } else {
      //2.백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수 api)
      //  =>나중에

      //3. 성공 알람 보여주기
      alert("회원가입을 축하합니다!");
    }
  }

  function onChangeEmail(event) {
    console.log(event); //나의 행동
    console.log(event.target); //작동된 태그
    console.log(event.target.value); //작동된 태그에 입력된 값

    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      이메일: <input onChange={onChangeEmail} type="text" />
      {/* <div id="myerror"></div> */} //옛날 방식 비밀번호:{" "}
      <div>{emailError}</div>
      <input onChange={onChangePassword} type="password" />
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  );
}
