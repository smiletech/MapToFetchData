import "./App.css";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Main from "./component/Main";
function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;

// <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<TestPage />} />
//           <Route path="/TestPage/:id/:Examid" element={<QuestionPage />} />
//           <Route exact path="/finish" element={<Finish />} />
//         </Routes>
//       </BrowserRouter>
