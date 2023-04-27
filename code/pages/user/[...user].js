import { useUser } from '@auth0/nextjs-auth0';

const User = ({ children }) => {
    const { user, error, isLoading } = useUser();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <h1>Welcome {user.nickname}!</h1>
            {children}
        </div>
    );
};

export default User;
