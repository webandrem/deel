import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Hit } from '../../types/Hit'
import HitsPanel from "./HitsPanel";
import useDebounce from "../../hooks/useDebounce";
import { Spinner } from "../Spinner";
import './SearchBox.css';
import { DELAY, LIMIT, MIN_CHARS } from "./constants";
import { searchTodo } from "../../service/Todo";

const SearchBox = () => {
  const [filteredHits, setfFilteredHits] = useState<Hit[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedValue = useDebounce<string>(searchTerm, DELAY);

  /** 
   *  - Simple debounce to avoid multiple requests on typing
   * 
   *  IMPROVEMENTS:
   *  - The Search, Ranking, Sort, Pagination and Limit essentially should be implemented in the back-end
   *  - Cache is quite important here to avoid request everytime 
   * */
  useEffect(() => {
    if(debouncedValue.length >= MIN_CHARS) {
      setIsLoading(true);
      searchTodo(searchTerm)
        .then(matchedHits => {
            setIsLoading(false)
            setfFilteredHits(matchedHits.slice(0, LIMIT) ?? [])
        })
        .catch(err => console.log(err));
    }
  }, [debouncedValue])
  

  /**
   * Handlers responsible to manage the state of component
   */
  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const keyboardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    switch(e.code) {
      case 'ArrowUp': 
        (currentIndex > 0 && setCurrentIndex(currentIndex - 1));
        break;
      case 'ArrowDown': 
        (currentIndex < filteredHits.length - 1 && setCurrentIndex(currentIndex + 1));
        break;
      case 'Enter': 
        setSearchTerm(filteredHits[currentIndex].title);
        setIsOpen(false);
        setCurrentIndex(0);
        setfFilteredHits([])
        break;
      case 'Escape':
        setIsOpen(false);
        setCurrentIndex(0);
        setfFilteredHits([])
        break;
    }
  }

  /**
   * - Simple template:
   * - It can be done by using Tailwind as utility library or some nice CSS convention like BEM
   * - Some JIT alternative would be also great
   * - Nice to have some CSS processor
   * */
  return (
    <div className="search-box">
      <label> Type your term here
        <input
          type="text"
          onChange={changeHandler}
          onKeyDown={keyboardHandler}
          value={searchTerm}
          />
      </label>
      <p className="orientations">The concluded items will look like lighter in the panel, feel free to navigate with your keyboard. Enjoy =D </p>
      { isLoading 
          ? 
            <div className="loading">
              <Spinner />
            </div>
          : 
            isOpen && 
            searchTerm && 
            <HitsPanel 
              filteredHits={filteredHits} 
              currentIndex={currentIndex}
              searchTerm={searchTerm}
              /** 
               * In the case to have a lot of shaed data the best would be to use 
               * either Context of some State Management solution 
               * */
              setInput={setSearchTerm} 
              /> 
      }
    </div>
  );
};

export default SearchBox;