import home from "@/styles/home.module.scss";

const blog = () => {
  return (
    <section className={home.blog}>
      <div className={home.blog1}>
        <a href="#">
          <img src="/temp/blog-1.png" alt="" />
        </a>
      </div>
      <div className={home.blog2}>
        <a href="#">
          <img src="/temp/blog-2.png" alt="" />
        </a>
      </div>
      <div className={home.blog3}>
        <a href="#">
          <img src="/temp/blog-3.png" alt="" />
        </a>
      </div>
      <div className={home.blog4}>
        <span>مطالب بیشتر در مجله یدک یار</span>
        <a href="#">مجله یدک یار</a>
      </div>
    </section>
  );
};

export default blog;
