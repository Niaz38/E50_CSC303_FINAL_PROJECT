import { PrismaClient } from "@prisma/client"

// export async function getServerSideProps() {
//     const prisma = new PrismaClient()
//     // const students = await prisma.QuestionPaper.findMany()
//     const createQuestionPaper = prisma.QuestionPaper.create(
//         {
//             data: {
//                 course_id: "CSE 101",
//                 semester: "1",
//                 section: "A",
//                 uniqueId: "CSE1011A",

//             }
//         }
//     )
//     return {
//         // props: { students },
//     }
// }

const Po = ({ students }) => {
    // console.log(students)
    return (<>
        <div><h1>prisma</h1></div>
    </>
    )
}
export default Po