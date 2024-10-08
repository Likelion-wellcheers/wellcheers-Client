import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './component/layout/Layout';
import { Login } from './pages/login/Login';
import { Mypage } from './pages/mypage/Mypage';
import { SearchHome } from './pages/searchHome/SearchHome';
import { Signup } from './pages/signup/Signup';
import { Search } from './pages/localnews/Search';
import { Localinfo } from './pages/localnews/Localinfo';
import { SearchMap } from './pages/searchHome/SearchMap';
import { CalCost } from './pages/searchHome/CalCost';
import { Editinfo } from './pages/mypage/Editinfo';
import { Savelist } from './pages/mypage/Savelist';
import { Eachmagazine } from './pages/localnews/Eachmagazine';
import { Moremagazine } from './pages/localnews/Moremagazine';
import { Detailsavelist } from './pages/mypage/Detailsavelist';
import { CenterDetail } from './pages/searchHome/CenterDetail';
import { Mainwonder } from './pages/qusetionanswer/Mainwonder';
import { Wonderwrite } from './pages/qusetionanswer/Wonderwrite';
import { Answer } from './pages/qusetionanswer/Answer';
import { Question } from './pages/qusetionanswer/Question';
import { Locreview } from './pages/localnews/Locreview';
import { PostReviewLocal } from './pages/localnews/PostReviewLocal';
import KakaoLogin from './pages/login/KakaoLogin';
import Test from './pages/login/Test';
import { Logincomplete } from './pages/login/Logincomplete';
import { AddMyInfo } from './pages/login/AddMyInfo';
import { MyPlans } from './pages/mypage/MyPlans';
import { PostReviewCenter } from './pages/searchHome/PostReviewCenter';



const App = () => {
    return (
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path="/" element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="kakaologin" element={<KakaoLogin />} />
                  <Route path="addmyinfo" element={<AddMyInfo />} />
                  <Route path="logincomplete" element={<Logincomplete />} />
                  <Route path="test" element={<Test />} />
                  <Route path="mypage" element={<Mypage />} />
                  <Route path="myplan/:idx" element={<MyPlans />} />
                  <Route path="editinfo" element={<Editinfo />} />
                  <Route path="savelist" element={<Savelist />} />
                  <Route path="detailsavelist" element={<Detailsavelist />} />
                  <Route path="searchhome" element={<SearchHome />} />
                  <Route path="searchhome/searchmap" element={<SearchMap />} />
                  <Route path="searchhome/searchmap/centerdetail/:centerId" element={<CenterDetail />}/>
                  <Route path="searchhome/searchmap/centerdetail/:centerId/reviewcenter" element={<PostReviewCenter />}/>
                  <Route path="searchhome/searchmap/CalCost" element={<CalCost />}/>
                  <Route path="signup" element={<Signup />} />
                  <Route path="localnews" element={<Search />} />
                  <Route path="localinfo" element={<Localinfo />} />
                  <Route path="localinfo/:cityCode/reviewing" element={<PostReviewLocal />} />
                  <Route path="eachmagazine" element={<Eachmagazine />} />
                  <Route path="moremagazine" element={<Moremagazine />} />
                  <Route path="mainwonder" element={<Mainwonder />} />
                  <Route path="wonderwrite" element={<Wonderwrite />} />
                  <Route path="answer" element={<Answer />} />
                  <Route path="question" element={<Question />} />
                  <Route path="locreview" element={<Locreview />} />
                </Route>
            </Routes> 
            
    );
}

export default App;