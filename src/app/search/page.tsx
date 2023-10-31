import search from "@/styles/search.module.scss";
import icon from "@/styles/icons.module.scss";
import home from "@/styles/home.module.scss";

const Search = () => {
  return (
    <main>
      <section className={search.head}>
        <i className={icon.headphone}></i>
        <form action="">
          <input type="text" placeholder="جست و جو" />
        </form>
        <i className={icon.chevronLeft}></i>
      </section>
      <section className={search.results}>
        <div className={search.suggest}>
          <a href="#">
            <div className={search.suggestCard}>
              <div className={search.suggestCardImg}>
                <img src="/temp/searchsuggesttemp.svg" alt="" />
              </div>
              <span className={search.suggestCardTitle}>لگو/اسباب بازی</span>
            </div>
          </a>
          <a href="#">
            <div className={search.suggestCard}>
              <div className={search.suggestCardImg}>
                <img src="/temp/searchsuggesttemp.svg" alt="" />
              </div>
              <span className={search.suggestCardTitle}>لگو/اسباب بازی</span>
            </div>
          </a>
          <a href="#">
            <div className={search.suggestCard}>
              <div className={search.suggestCardImg}>
                <img src="/temp/searchsuggesttemp.svg" alt="" />
              </div>
              <span className={search.suggestCardTitle}>لگو/اسباب بازی</span>
            </div>
          </a>

          <a href="#">
            <div className={search.suggestCard}>
              <div className={search.suggestCardImg}>
                <img src="/temp/searchsuggesttemp.svg" alt="" />
              </div>
              <span className={search.suggestCardTitle}>لگو/اسباب بازی</span>
            </div>
          </a>
          <a href="#">
            <div className={search.suggestCard}>
              <div className={search.suggestCardImg}>
                <img src="/temp/searchsuggesttemp.svg" alt="" />
              </div>
              <span className={search.suggestCardTitle}>لگو/اسباب بازی</span>
            </div>
          </a>
          <a href="#">
            <div className={search.suggestCard}>
              <div className={search.suggestCardImg}>
                <img src="/temp/searchsuggesttemp.svg" alt="" />
              </div>
              <span className={search.suggestCardTitle}>لگو/اسباب بازی</span>
            </div>
          </a>
        </div>
        <div className={search.resultsScroll}>
          <a href="#">
            <article className={search.resultsProduct}>
              <div className={search.resultsProductImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={search.resultsProductTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
            </article>
          </a>
          <a href="#">
            <article className={search.resultsProduct}>
              <div className={search.resultsProductImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={search.resultsProductTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
            </article>
          </a>
          <a href="#">
            <article className={search.resultsProduct}>
              <div className={search.resultsProductImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={search.resultsProductTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
            </article>
          </a>
          <a href="#">
            <article className={search.resultsProduct}>
              <div className={search.resultsProductImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={search.resultsProductTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
            </article>
          </a>
          <a href="#">
            <article className={search.resultsProduct}>
              <div className={search.resultsProductImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={search.resultsProductTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
            </article>
          </a>
          <a href="#">
            <article className={search.resultsProduct}>
              <div className={search.resultsProductImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={search.resultsProductTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
            </article>
          </a>
        </div>
        <div className={search.resultsScroll}>
          <span className={search.resultsTitle}>
            <i className={icon.category} />
            دسته‌بندی
          </span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
        </div>
        <div className={search.resultsScroll}>
          <span className={search.resultsTitle}>
            <i className={icon.car} />
            خودرو
          </span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
        </div>
        <div className={search.resultsScroll}>
          <span className={search.resultsTitle}>
            <i className={icon.factory} />
            سازنده خودرو
          </span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
        </div>
        <div className={search.resultsScroll}>
          <span className={search.resultsTitle}>
            <i className={icon.sparePart} />
            برند قطعه
          </span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
          <span className={search.resultsItem}>فیلتر روغن</span>
          <span className={search.resultsItem}>فیلتر هوا</span>
          <span className={search.resultsItem}>فیلتر اتاق</span>
        </div>
      </section>
    </main>
  );
};

export default Search;
