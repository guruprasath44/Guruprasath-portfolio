import { v4 as uuidv4 } from 'uuid';
import ClassImg from '../images/class-management.png';
import ElearningImg from '../images/e-learning-blog.png';
import MarksheetImg from '../images/marksheet.jpg';
import AttendanceImg from '../images/attendance.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'E Learning Website',
    desc:
      'E learning website to learn programming languageslike Java, Mysql , C',
    img: ElearningImg,
  },
  {
    id: uuidv4(),
    name: 'Student Marksheet',
    desc: 'Website to view marksheet for students',
    img: MarksheetImg,
  },
  {
    id: uuidv4(),
    name: 'Attendance Management System',
    desc: 'Attendance management system for a class',
    img: AttendanceImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc: 'A portfolio profile of mine',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Class Management System',
    desc: 'A website for class management for students and faculty',
    img: ClassImg,
  },
];

export default projects;
