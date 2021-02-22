import React from 'react';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Section1 from './components/section1/section1';
import Section3 from './components/section3/section3';
import BAW from './components/sectionBaw/BAW';
import Footer from './components/footer/footer';
class App extends React.Component {
 render() {
  return(
   <div>
       <Nav />
       <Header />
       <Section1 />
       <Section3 />
       <BAW />
       <Footer />
   </div>
  );
 }
}
export default App