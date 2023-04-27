import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')
// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function SecretRoute(req, res) {
    const { CourseOutline } = new PrismaClient()
    if (req.method === 'GET') {
        const courseoutline = await CourseOutline.findMany({
            select: {
                // id: true,
                course: true,
                faculty: true,
                objectives: true,
                policy: true,
                outcome: true,
                schedule: true,
                resource: true,
                // _count: true
            },
            // where: {
            //     course_id: 1,
            // }
        })
        res.json({ courseoutline });
    }
    if (req.method === 'POST') {
        let bodyValues = req.body

        console.log(bodyValues.course.data)
        let course = bodyValues.course.data
        let faculty = bodyValues.faculty.data
        let objectives = bodyValues.objectives.data
        let policy = bodyValues.policy.data
        let outcome = bodyValues.outcome.data
        let schedule = bodyValues.schedule.data
        let resource = bodyValues.resource.data

        const newCourse = course.map((c) => {
            return {
                courseCode: c.courseCode,
                semester: c.semester,
                section: parseInt(c.section),
                courseTitle: c.courseTitle,
                marks: parseInt(c.marks),
            }
        })
        const newFaculty = faculty.map((c) => {
            return {
                name: c.name,
                designation: c.designation,
                department: c.department,
                email: c.email,
            }
        })
        const newObjectives = objectives.map((c) => {
            return {
                objective: c.objective,
            }
        })
        const newPolicy = policy.map((c) => {
            return {
                policy: c.policy,
            }
        })
        const newOutcome = outcome.map((c) => {
            return {
                outcome: c.outcome,
            }
        })
        const newSchedule = schedule.map((c) => {
            return {
                week: c.week,
                topic: c.topic,
                readings: c.readings,
            }
        })
        const newResource = resource.map((c) => {
            return {
                title: c.title,
            }
        })


        const courseoutline = await CourseOutline.create({
            data: {
                course: {
                    createMany: {
                        data: newCourse
                    }
                },
                faculty: {
                    createMany: {
                        data: newFaculty
                    }
                },
                objectives: {
                    createMany: {
                        data: newObjectives
                    }
                },

                policy: {
                    createMany: {
                        data: newPolicy
                    }
                },

                outcome: {
                    createMany: {
                        data: newOutcome
                    }
                },
                schedule: {
                    createMany: {
                        data: newSchedule
                    }
                },
                resource: {
                    createMany: {
                        data: newResource
                    }
                },
            }
        })
        res.json({ courseoutline });
    }
};
// });

// if (req.method === 'POST') {
//     let bodyValues = req.body
//     // console.log(bodyValues.course_id)
//     let course_id = bodyValues.course_id
//     let semester = bodyValues.semester
//     let section = parseInt(bodyValues.section)
//     let uniqueId = course_id + semester + section
//     let question = bodyValues.question
//     // console.log(question)
//     const newQuestions = bodyValues.questions.data.map((question) => {
//         return {
//             question: question.question,
//             marks: parseInt(question.marks),
//             co: parseInt(question.co)
//         }
//     })
//     const questionpapers = await QuestionPaper.create({
//         data: {
//             uniqueId: uniqueId,
//             course_id: course_id,
//             semester: semester,
//             section: section,
//             question: {
//                 createMany: {
//                     data: newQuestions
//                 }
//             }
//         }
//     })
//     res.json({ bodyValues });
// }

// {
// 	"courseoutline": [
// 		{
// 			"id": 1,
// 			"course": [
// 				{
// 					"id": 1,
// 					"courseCode": "Cse303",
// 					"semester": "Summer22",
// 					"section": 1,
// 					"courseTitle": "Database Management",
// 					"marks": 100,
// 					"courseOutlineId": 1
// 				}
// 			],
// 			"faculty": [
// 				{
// 					"id": 1,
// 					"name": "Dr. Sadita Khan",
// 					"designation": "Assistant Professor",
// 					"department": "Computer Science & Engineering",
// 					"email": "sadita@iub.edu.bd",
// 					"courseOutlineId": 1
// 				}
// 			],
// 			"objectives": [
// 				{
// 					"id": 1,
// 					"objective": "Understand the basic concepts of web application development.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 2,
// 					"objective": "Understand the basic concepts of web application development tools.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 3,
// 					"objective": "Understand the basic concepts of web application development frameworks.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 4,
// 					"objective": "Understand the basic concepts of web application security.",
// 					"courseOutlineId": 1
// 				}
// 			],
// 			"policy": [
// 				{
// 					"id": 1,
// 					"policy": "70% attendance is mandatory.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 2,
// 					"policy": "Students are expected to be on time for the class.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 3,
// 					"policy": "Students are expected to be polite and respectful to the instructor and other students.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 4,
// 					"policy": "Students are expected to be honest and ethical in their academic work.",
// 					"courseOutlineId": 1
// 				}
// 			],
// 			"outcome": [
// 				{
// 					"id": 1,
// 					"outcome": "Develop web applications using HTML, CSS, and JavaScript.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 2,
// 					"outcome": "Develop web applications using React.js.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 3,
// 					"outcome": "Develop web applications using Node.js.",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 4,
// 					"outcome": "Develop web applications using Node.js.",
// 					"courseOutlineId": 1
// 				}
// 			],
// 			"schedule": [
// 				{
// 					"id": 1,
// 					"week": "Week 1",
// 					"topic": "Web App",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 2,
// 					"week": "Week 2",
// 					"topic": "HTML",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 3,
// 					"week": "Week 3",
// 					"topic": "CSS",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 4,
// 					"week": "Week 4",
// 					"topic": "JS",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 5,
// 					"week": "Week 5",
// 					"topic": "React",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 6,
// 					"week": "Week 6",
// 					"topic": "Node",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 7,
// 					"week": "Week 7",
// 					"topic": "Express",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 8,
// 					"week": "Week 8",
// 					"topic": "MongoDB",
// 					"readings": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				}
// 			],
// 			"resource": [
// 				{
// 					"id": 1,
// 					"title": "Introduction to HTML",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 2,
// 					"title": "Introduction to CSS",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 3,
// 					"title": "Introduction to JavaScript",
// 					"courseOutlineId": 1
// 				},
// 				{
// 					"id": 4,
// 					"title": "Introduction to React.js",
// 					"courseOutlineId": 1
// 				}
// 			]
// 		}
// 	]
// }