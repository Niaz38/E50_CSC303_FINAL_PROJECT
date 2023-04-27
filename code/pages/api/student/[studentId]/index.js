import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')
// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function StudentInfo(req, res) {
    const { ObeStudent } = new PrismaClient()
    if (req.method === 'GET') {
        const { query: { studentId } } = req

        const students = await ObeStudent.findUnique({
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
            },
            where: {
                student_id: studentId.toString(),
            }
        })
        res.json({ students });
    }

};
// });