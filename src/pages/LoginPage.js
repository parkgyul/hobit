import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
  //상태 변화를 기록하기 위함.
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅을 사용

  const handleInputId = (e) => {
    setInputId(e.target.value);
  }; // e : 이벤트 객체 - 이벤트가 발생하면, 이벤트가 발생한 요소의 현재값(사용자가 입력한 값)으로 inputId 상태 업데이트.

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    fetch("[url]", {
      //원하는 주소 입력
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("로그인 성공!");
          navigate("/main");
        } else {
          throw new Error("네트워크 오류 발생");
        }
      })
      .catch((error) => {
        console.error("오류 발생:", error);
      });
  };

  const onClickRegister = () => {
    navigate("/Join");
  };

  return (
    <div>
      <div style={{ width: "200px" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onClickLogin}
        >
          <h1>로그인</h1>
          <label className="labelStyle">UserName</label>
          <input
            type="text"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디를 입력하세요"
          />
          <label>Password</label>
          <input
            type="password"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력하세요"
          />
          <br />
          <button type="submit">Login</button>

          <button type="button" onClick={onClickRegister}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
