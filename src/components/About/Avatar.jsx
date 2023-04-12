
export default function Avatar({user}) {
  return (
    <div className="avatar-wrapper">
      <h1 className="h1 text-teal-400 text-left pb-3">{user.name}</h1>
      <div className="flex justify-between items-center">
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <p className="ml-2">{user.description}</p>
      </div>
    </div>
  );
}
