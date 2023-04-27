import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')
// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function SecretRoute(req, res) {
    const { QuestionPaper, Question } = new PrismaClient()
    if (req.method === 'GET') {
        const questionpapers = await QuestionPaper.findMany({
            select: {
                id: true,
                course_id: true,
                semester: true,
                section: true,
                question: true,
                // _count: true
            },
            // where: {
            //     course_id: 1,
            // }
        })
        res.json({ questionpapers });
    }
    if (req.method === 'POST') {
        const questionpapers = await QuestionPaper.create({
            data: {
                uniqueId: 'CSE200summer222',
                course_id: 'CSE200',
                semester: 'summer22',
                section: 2,
                question: {
                    createMany: {
                        data: [
                            {
                                question: "q1",
                                marks: 5,
                                co: 1
                            },
                            {
                                question: "q2",
                                marks: 6,
                                co: 2
                            },
                        ]
                    }
                }

            }
        })
        res.json({ questionpapers });
    }
};
// });