import AssignmentIcon from "../assets/assignment.svg";
import ActiveAssignmentIcon from "../assets/activeAssignment.svg";
import TopicIcon from "../assets/topic.svg";
import ActiveTopicIcon from "../assets/activeTopic.svg";
import QuizIcon from "../assets/moduleQuiz.svg";
import ActiveQuizIcon from "../assets/activeModuleQuiz.svg";
import VideocamIcon from "../assets/Videocam.jsx";
import PlayCircleIcon from "../assets/PlayCircle.jsx";
import InformationCircleIcon from "../assets/InfomationCircle.jsx";
import HomeIcon from "../assets/HomeIcon";
import ModeuleIcon from "../assets/ModuleIcon";
import InstructorIcon from "../assets/InstructorIcon";
import DocumentIcon from "../assets/Document.jsx";
export const SidebarMenu = [
  {
    key: "home",
    label: "Home",
    Icon: HomeIcon,
    path: "/",
  },
  {
    key: "module",
    label: "Modules",
    Icon: ModeuleIcon,
    path: "/module",
  },
  {
    key: "instructor",
    label: "Instructors",
    Icon: InstructorIcon,
    path: "/instructor",
  },
];

export const ModulesSidebarMenu = [
  {
    key: "topic",
    label: "python loops",
    icon: TopicIcon,
    activeIcon: ActiveTopicIcon,
    path: "/module",
  },
  {
    key: "quiz",
    label: "Quiz-1: Data Types",
    icon: QuizIcon,
    activeIcon: ActiveQuizIcon,
    path: "/module/quiz",
  },
  {
    key: "assignment",
    label: "Assignment-1: Operators | loops",
    icon: AssignmentIcon,
    activeIcon: ActiveAssignmentIcon,
    path: "/module/assignment",
  },
];

export const TopicTabsData = [
  {
    key: "session_plan",
    label: "Session Plan",
    Icon: InformationCircleIcon,
  },
  {
    key: "pre_watch_videos",
    label: "Pre-Watch Videos",
    Icon: PlayCircleIcon,
  },
  {
    key: "session_recording",
    label: "Session Recording",
    Icon: VideocamIcon,
  },
  {
    key: "references",
    label: "References",
    Icon: DocumentIcon,
  },
];
export const profileIcon =
  "https://imgs.search.brave.com/w1t44y_EVltSh4Whg4rpXNYHqhVYN0ysJo9N1F3LCKA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/eU5raWZWUFdtLVI3/ZVlhVzRCZHBnSGFI/YSZwaWQ9QXBp";

export const programs = [
  { id: 1, name: "ECDR" },
  { id: 2, name: "FSR222222" },
  { id: 3, name: "DS261121" },
  { id: 4, name: "DS031221" },
];

export const courseProgressData = [
  { id: 1, name: "Live Session", min: 0, max: 13 },
  { id: 2, name: "Assignment", min: 0, max: 3 },
  { id: 3, name: "MCQ Quiz", min: 0, max: 6 },
];

export const progressOverViewData = [
  {
    id: 1,
    name: "Overall Grade",
    percent: 0,
  },
  {
    id: 2,
    name: "Assignment",
    percent: 0,
  },
];

export const examStructureData = [
  {
    id: 1,
    name: 'Round 1',
    tests: [{id: 1, name: 'MCQS'}, {id: 2, name: 'Coding'}] 
  },
  {
    id: 2,
    name: 'Round 2',
    tests: [{id: 1, name: 'Project'}] 
  }
]

export const assignmentStatsData = {
  stats: [
    {
      score: 3,
      name: "Problems",
    },
    {
      score: 100,
      name: "Total Score",
    },
  ],
  date_time: {
    start: {
      date: "20 December 2021",
      time: "07:30 PM",
    },
    due: {
      date: "26 December 2021",
      time: "11:59 PM",
    },
  },
};


export const quizStatsData = {
  stats: [
    {
      score: 10,
      name: "Questions",
    },
    {
      score: "-",
      name: "Duration",
    },
    {
      score: 125,
      name: "Total Score",
    },
  ],
  date_time: {
    start: {
      date: "16 Dec 2021",
      time: "07:30 PM",
    },
    due: {
      date: "19 Dec 2021",
      time: "11:59 PM",
    },
  },
};