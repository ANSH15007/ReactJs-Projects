import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Accordian from './components/1.Accordian'
import RandomColor from './components/2.Random-color'
import StarRating from './components/3.Star-rating'
import ImageSlider from './components/4.Image-slider'
import LoadMoreData from './components/5.Load-more-data'
import TreeView from './components/6.Tree-view'
import Menus from "./components/6.tree-view/data"
import QRCodeGenerator from './components/7.qr-code-generator'
import LightDarkMode from './components/8.Light-Dark-mode'
import ScrollIndicator from './components/9.Scroll-indicator'
import TabTest from './components/10.Custom-tabs/tab-test'
import ModalTest from './components/11.Custom-modal-popup/modal-test'
import GithubProfileFinder from './components/12.github-profile-finder'
import SearchAutocomplete from './components/13.search-autocomplete-with-api'
import TicTacToe from './components/14.TicTacToe'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Accordian></Accordian>*/}
    {/*<RandomColor></RandomColor>*/}
    {/*<StarRating></StarRating>*/}
    {/*<ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"}></ImageSlider>*/}
    {/*<LoadMoreData></LoadMoreData>*/}
    {/*<TreeView menus={Menus}></TreeView>*/}
    {/*<QRCodeGenerator></QRCodeGenerator>*/}
    {/*<LightDarkMode></LightDarkMode>*/}
    {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}></ScrollIndicator>*/}
    {/*<TabTest></TabTest>*/}
    {/*<ModalTest></ModalTest>*/}
    {/*<GithubProfileFinder></GithubProfileFinder>*/}
    {/*<SearchAutocomplete></SearchAutocomplete>*/}
    <TicTacToe></TicTacToe>

  </StrictMode>,
)
