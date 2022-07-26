import React, {useState, useEffect} from "react";
import NewCourse from "./NewCourse";
import CourseDetail from "./CourseDetail";

function CourseEnrollment ({instructors}) {
    const [courses, setCourses] = useState([])

    //get list of courses
    useEffect ( ()  => {
        fetch("http://localhost:9292/courses")
        .then ((r) => r.json())
        .then ((courses) => setCourses(courses));
    }, []);


    
     // Add a new course - CREATE - 
     const addNewCourse= (course) => {
        setCourses([...courses, course]);
    }
    //handle the edit - UPDATE -
    function handleUpdateCourse(updatedCourse){
        const updatedCourses = courses.map((course) => {
            if (course.id === updatedCourse.id) {
                return updatedCourse;
            }
            else{
                return course;
            }
        });
        setCourses(updatedCourses);
    }
    // delete a course - DELETE -
    function deleteCourse (id) {
        const updatedCourses = courses.filter((course) => 
            course.id !== id);
        setCourses(updatedCourses);

}
    return(
        <div>
            {courses.map((course) => (
                <CourseDetail 
                key={course.id}
                courseName = {course.course_name}
                classPeriod={course.class_period}
                deleteCourse={deleteCourse}
                onUpdateCourse={handleUpdateCourse}
                courses={courses}
                course={course}
                instructors={instructors}
                />
            ))
        }
            <NewCourse addNewCourse={addNewCourse} instructors={instructors}/> 
        </div>
    )
}

export default CourseEnrollment;