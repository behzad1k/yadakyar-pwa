
const LogIn = () => {
  return (
    <div>
      <div className={logIn.logo}>
        <img src="/public/logo.png" alt="" />
      </div>
      <strong className={logIn.title}>ورود | ثبت نام</strong>
      <p>شماره موبایل خود را وارد کنید</p>
      <input type="number" />
    </div>
  );
};

export default LogIn;
