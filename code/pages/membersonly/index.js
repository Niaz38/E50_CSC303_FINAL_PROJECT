import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function members() {
    return (
        <div>
            <h1>Members Only</h1>
        </div>
    )
}

export default members
export const getServerSideProps = withPageAuthRequired();
