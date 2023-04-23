import React, { useContext } from 'react'
import { courseContext } from '../context'

export default function useCourse() {
    return  useContext(courseContext);
}
