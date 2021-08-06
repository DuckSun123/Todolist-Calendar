today = new Date();
yy = today.getFullYear();
mm = today.getMonth();

YM = yy + "년 " + (mm + 1) + "월";
document.getElementById("ym").innerHTML = YM;

first_date = new Date(yy, mm, 1).getDate();
last_date = new Date(yy, mm + 1, 0).getDate();
first_day = new Date(yy, mm, 1).getDay();

function makecalendar() {
  calendar = document.getElementById("calendar");
  //calendar테이블을 변수로 정의
  row = calendar.insertRow();
  //calendar에 행을 추가해준다.
  //변수명(row)을 지정해주는 이유 : 후에 cell이 추가될 자리를 알려주기 위해
  for (i = 0; i < first_day; i++) {
    //first_day에 해당하는 요일까지 열을 만든다.
    //요일은 0부터 시작하기 때문에 i값도 0에서 시작한다.
    cell = row.insertCell();
    //cell.innerHTML = "HI";
  }
  for (let i = 1; i <= last_date; i++) {
    // 달력은 1일부터 시작하므로 i=1
    if (first_day != 7) {
      //first_day는 0~6이다. 일주일은 한 줄에 7칸이니까 7이상은 찍히지 않는다.
      cell = row.insertCell();
      //셀추가
      cell.setAttribute("id", [i]);
      //모든 셀에 id를 부여함
      cell.innerHTML = [i];
      //추가된 셀에 i값 입력
      first_day += 1;
      //요일값이 하루 추가된걸 for문에 알려줌
    } else {
      //첫줄의 first_day 값이 7이되면 작동
      row = calendar.insertRow();
      //행을 하나 추가
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerHTML = [i];
      //세줄은 위와 같음
      first_day = first_day - 6;
      //6을 빼는 이유는 매번 7에서 else문으로 넘어오고, if문이 6번만 하면 되기때문이다.
      //7을 빼버리면 0부터 시작해서 if문이 7번 실행되고 else로 넘어오므로 -6을한다.
    }
  }
}
makecalendar();

function serch_today() {
  today_date = today.getDate();
  this_mm = new Date().getMonth();
  this_yy = new Date().getFullYear();
  this_YM = this_yy + "년 " + (this_mm + 1) + "월";
  //오늘 날짜를 함수로 정의 -> 올해 오늘 날짜만 색칠되게하기위함

  for (let i = 1; i <= last_date; i++) {
    set_id = document.getElementById([i]);
    //오늘 날짜와 비교할 id정의
    if (today_date == set_id.getAttribute("id") && this_YM == YM) {
      //오늘 날짜값과 달력 날짜의 id값 비교
      set_id.bgColor = "red";
      //일치한 값에 컬러주기
    }
  }
}
window.onload = serch_today();

function before_month() {
  while (calendar.rows.length > 2) {
    //2줄이 남을 때 까지 줄을 지워줌
    //버튼과 요일이 남아야 하기 때문에 2줄만 남기고 지운다.
    calendar.deleteRow(calendar.rows.length - 1);
    //length-1 = 아래서부터 지우라는 뜻
  }
  mm = mm - 1;
  //한달씩 뒤로감
  if (mm === -1) {
    //0월이 되었을 때 이전연도 12월로 가도록 작업
    //js에서 0월 = 실제 1월 이므로 -1로 맞춰야한다.
    yy = yy - 1;
    mm = mm + 12;
  }
  YM = yy + "년 " + (mm + 1) + "월";
  document.getElementById("ym").innerHTML = YM;
  first_date = new Date(yy, mm, 1).getDate();
  last_date = new Date(yy, mm + 1, 0).getDate();
  first_day = new Date(yy, mm, 1).getDay();
  makecalendar();
}

function next_month() {
  while (calendar.rows.length > 2) {
    calendar.deleteRow(calendar.rows.length - 1);
  }
  mm = mm + 1;
  //한달씩 증가함
  if (mm === 12) {
    //13월이 되었을 때 다음연도 1월로 가도록 작업
    //js에서 11월 = 실제 12월 이므로 12로 맞춰야한다.
    yy = yy + 1;
    mm = mm - 12;
  }

  YM = yy + "년 " + (mm + 1) + "월";
  document.getElementById("ym").innerHTML = YM;
  first_date = new Date(yy, mm, 1).getDate();
  last_date = new Date(yy, mm + 1, 0).getDate();
  first_day = new Date(yy, mm, 1).getDay();
  makecalendar();
}
