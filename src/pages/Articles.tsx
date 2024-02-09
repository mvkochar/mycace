import React from 'react'
import './Articles.css'
import { ArticlesList } from '../components/ArticlesList/ArticlesList'
import ArticleItem from '../components/ArticleItem/ArticleItem'

type ArticlesProps = {
  handleHeaderType: (headerId: number) => void;
}

const Articles = ({handleHeaderType}:ArticlesProps) => {
  const [query, setQuery] = React.useState('')
  const [isSearch, setIsSearch] = React.useState(false)
  const [searchRes, setSearchRes] = React.useState(0)

  React.useEffect(() => {
    handleHeaderType(1)
  
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(false)
    setQuery(event.target.value)
  }

  const handleSearch = (query: string) => {
    let res = 0
    if (query.length == 0) return
    res = ArticlesList.filter((article) => article.title.toLowerCase().includes(query.toLowerCase())).length
    setSearchRes(res)
    setIsSearch(true)
  }

  return (
    <main>
      <div className="wrapper">
        <form action="" className='home-main-fm' style={{ height: "50px" }}>
          <input
            type="text"
            name='searchQuery'
            placeholder='Як приготувати класичний чізкейк'
            value={query}
            style={{paddingTop: "4px" }}
            onChange={(event) => handleChange(event)}
          />
          <button type='button' style={{ marginLeft: "103px" }} onClick={()=>handleSearch(query)}>Шукати</button>
        </form>
        <div className={isSearch ? "desserts-search-result d-f align-center" : "d-n"}>
          <p className="desserts-search-query">"{query}"</p>
          <button className='desserts-search-close' onClick={() => setIsSearch(false)}><img src="images/close.svg" alt="close" /></button>
          <p className="desserts-search-count">{searchRes} статей.</p>
        </div>
        <div className="articles-main d-f">
          <div className="articles-main-filters">
            <h3 className="filters-title">Цікаві та корисні статті</h3>
            <div className="filters-subtitle">Тематика</div>
            <div className="filters-box d-f">
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="recipes" id="recipes" />
                <label htmlFor="recipes">Рецепти</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="advice" id="advice" />
                <label htmlFor="advice">Корисні поради на кухні </label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="selections" id="selections" />
                <label htmlFor="advice">Підбірки</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="clients" id="clients" />
                <label htmlFor="clients">Робота з клієнтами</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="stories" id="stories" />
                <label htmlFor="stories">Цікаві історії</label>
              </div>
            </div>
          </div>
          <div>
            <div className="articles-main-box d-f">
              {
                isSearch 
                ?ArticlesList.filter((article) => article.title.toLowerCase().includes(query.toLowerCase())).map((article) =>
                <ArticleItem
                  key={article.id}
                  image={article.image}
                  title={article.title}
                  desc={article.desc}
                />
              )
              :  
                ArticlesList.map((article) =>
                  <ArticleItem
                    key={article.id}
                    image={article.image}
                    title={article.title}
                    desc={article.desc}
                  />
                )
              }
            </div>
            <button className='desserts-more-btn' style={{ width: "1180px" }}>'Більше статей'</button>
            <div className="desserts-main-pages d-f">
              <button className='pages-action'><img src="images/btn-left.svg" alt="btn-left" /></button>
              <button className='pages-item'>1</button>
              <button className='pages-item'>2</button>
              <button className='pages-item pages-item__active'>3</button>
              <button className='pages-item'>4</button>
              <button className='pages-more'>...</button>
              <button className='pages-item'>15</button>
              <button className='pages-action'><img src="images/btn-right.svg" alt="btn-right" /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Articles