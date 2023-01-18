import React, { useState } from 'react';

const AppContext = React.createContext({
  openModal: false,
  courseList: [],
  teachersList: []
});

export const AppContextProvider = (props) => {

  const [openModal, setOpenModal] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        courseList,
        setCourseList,
        teachersList,
        setTeachersList
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
};

export default AppContext;