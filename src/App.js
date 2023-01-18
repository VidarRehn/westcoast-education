import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import Navbar from './components/nav/Navbar';
//pages
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Teachers from './pages/teachers/Teachers';
import TeacherSpec from './pages/teachers/TeacherSpec';
import CourseSpec from './pages/courses/CourseSpec';

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CourseSpec />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/teachers/:id' element={<TeacherSpec />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
