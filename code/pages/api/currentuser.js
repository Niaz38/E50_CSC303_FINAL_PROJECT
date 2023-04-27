import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function SecretRoute(req, res) {
    const session = getSession(req, res)
    const user = session.user
    res.json({ user });
});