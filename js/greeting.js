const loginForm = document.querySelector("#login-form"); // 로그인 폼 가져오기
const loginInput = document.querySelector("#login-form input"); // 로그인 정보 가져오기
const greeting = document.querySelector("#greeting"); // Hello + value 화면 표시 id

const HIDDEN_CLASSNAME = "hidden"; // .css hidden 클래스 가져오기
const USERNAME_KEY = "username"; // 유저 이름 값

const savedUsername = localStorage.getItem(USERNAME_KEY); // 유저 이름 저장 변수

if (savedUsername === null) { // 유저 이름 저장이 안되어있을때 실행
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 화면 표시
  loginForm.addEventListener("submit", onLoginSubmit); // 로그임 submit 이벤트 반응 했을때 함수 실행
} else { // 유저 이름이 있을때
  paintGreetings(savedUsername);  // Hello + 이름 함수 실행 (유저이름 인수값)
}

function onLoginSubmit(event) { // 로그인 화면 표시 
  event.preventDefault(); // submit 했을때 새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 적는 칸 숨기기
  const username = loginInput.value; // 유저 이름 받아서 저장
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 유저 정보 저장
  paintGreetings(username); // 유저 이름 출력 함수 실행
}

function paintGreetings(username) { // 유저이름 출력 함수
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}