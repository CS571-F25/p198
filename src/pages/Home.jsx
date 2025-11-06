export default function Home({ user }) {
  return (
    <div className="text-center">
      <h1>Welcome to MatchBites</h1>
      <p className="lead">
        Swipe, match, and plan meals with your friends — all in one place.
      </p>
      {!user ? (
        <button className="btn btn-primary mt-3">Get Started</button>
      ) : (
        <p>Hello, {user.name}!</p>
      )}
    </div>
  );
}
