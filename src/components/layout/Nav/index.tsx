"use client"
import icon from "@/styles/icons.module.scss";
import nav from "@/styles/nav.module.scss";
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={nav.container}>
      <nav className={nav.main}>
        <Link href="/home">
          <i className={icon.homeNav} />
          خانه
        </Link>
        <Link href="/menu">
          <i className={icon.menuNav} />
          دسته بندی
        </Link>
        <Link href='/productReq'>
          <i className={icon.sparePartNav} />
          استعلام قیمت
        </Link>
        <Link href="/shipping">
          <i className={icon.cartNav} />
          سبد خرید
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
