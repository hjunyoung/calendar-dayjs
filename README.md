# Color Diary

Log your life with colors.

## FE

- React + TS
- Use Container-Presenter pattern
- styled-components

## BE

- Express
- MongoDB and mongoose

## Featuers

- Infinity scrolling(?)

## Routers

- Home(Login, or not)
  - calendar
  - LoggedIn: show colors log for months or year(user can change)
    - each color log is circle
    - dot 형식에서 다른 형식으로 설정 가능하도록
  - Dark mode toggle(in setting page?)
- Login
  - Google, Naver, and Kakao OAuth
- Sign up
- Diary Detail page
  - In this page, add Log Delete & Edit function
- Upload Diary
  - upload multiple images (or videos?)
  - write text
  - choose color representing today
    - provide color panel or color candidates(+ related feeling in text: user can change)
- setting

  - user setting(user profile)
  - decoration setting

**componentDidMount 에서 Loader 지우기**
**main content max-width = 1000px**

## Calendar

- use dayjs
- [ ] year and month click해서 year, month 선택할 수 있게
- [ ] calendar에서 date click => 그 날 작성한 diary로 이동
