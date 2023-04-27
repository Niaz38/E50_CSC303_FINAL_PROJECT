import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')
// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function StudentInfo(req, res) {
    const { ObeStudent } = new PrismaClient()
    if (req.method === 'GET') {
        const students = await ObeStudent.findMany({
            select: {
                student_id: true,
                student_name: true,
                courseID: true,
                section: true,
                semester: true,
                total: true,
                CO1: true,
                CO2: true,
                CO3: true,
                CO4: true,
                grade: true,
                educationYear: true,
                // _count: true
            },
            // where: {
            //     course_id: 1,
            // }
        })
        res.json({ students });
    }
    if (req.method === 'POST') {
        // console.log(req.body);
        let bodyValues = req.body
        // console.log(bodyValues)

        const students = await ObeStudent.create({
            data: {
                student_id: req.body.student_id,
                educationYear: parseInt(req.body.educationYear),
                semester: req.body.semester,
                courseID: req.body.courseID,
                section: parseInt(req.body.section),
                grade: req.body.grade,
                student_name: req.body.student_name.toString(),
                total: parseInt(req.body.total),
                CO1: parseInt(req.body.CO1),
                CO2: parseInt(req.body.CO2),
                CO3: parseInt(req.body.CO3),
                CO4: parseInt(req.body.CO4),

            }
        })
        res.json({ bodyValues });
    }
};
// });